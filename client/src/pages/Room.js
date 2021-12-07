import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Button } from '@mui/material';

import { StepDisplay } from '../components'

import { useQuery, useMutation } from '@apollo/client';
import { GET_CURRENT_STEP, GET_ROOM } from '../utils/queries' ;
import { CONNECT_TO_ROOM, DISCONNECT_FROM_ROOM, FINISH_STEP, CANCEL_FINISHED_STEP } from '../utils/mutations';
import { useParams } from 'react-router-dom';

import { useGlobalContext } from '../utils/GlobalContext'

function Room() {
    
    // Will be used for displaying connected users and allowing next buttons.
    const [room, setRoom] = useState({});
    const [finishedStep, setFinishedStep] = useState(false);
    // const [curStepI, setCurStepI] = useState(0);
    const { id } = useParams();
    const { data: roomData, loading: roomLoading } = useQuery(GET_ROOM, { variables: {id: id} });
    const { data: stepData } = useQuery(GET_CURRENT_STEP, { variables: {id: id}, pollInterval: 500 });
    const [connectToRoom] = useMutation(CONNECT_TO_ROOM);
    const [disconnectFromRoom] = useMutation(DISCONNECT_FROM_ROOM);
    const [finishStep] = useMutation(FINISH_STEP);
    const [cancelFinishedStep] = useMutation(CANCEL_FINISHED_STEP);
    const [state, _dispatch] = useGlobalContext();

    const toggleFinishedStep = () => {
        setFinishedStep(!finishedStep);
    }

    const handleNextStep= () => {
        
    }

    const areAllUsersReady = () => {
        var allUsersReady = true;
        const connectedUserEmails = room.connectedUsers.map(user => user.email);
        const finishedUserEmails = room.connectedUsers.map(user => user.email);
        for(const email of connectedUserEmails) {
            if(finishedUserEmails.indexOf(email) === -1) {
                allUsersReady = false;
                break;
            }
        }
        return allUsersReady;
    }

    const handleFinishStep = () => {
        finishStep({
            variables: {
                roomId: id
            }
        });
        toggleFinishedStep();
    }

    const handleCancelFinishStep = () => {
        cancelFinishedStep({
            variables: {
                roomId: id
            }
        });
        toggleFinishedStep();
    }
    
    // Handle loading initial room data
    useEffect( () => {
        if(roomData) {
            // If the room has loaded for the first time...
            setRoom(roomData);
        } 
    }, [roomData]);

    // Handle step updates
    useEffect( () => {
        if(stepData) {
            setRoom({
                ...room,
                currentStep: stepData.currentStep
            });
        }
    }, [stepData]);

    // connect to the room on the server side
    useEffect( () => {
        connectToRoom({
            variables: {
                roomId: id
            }
        });

        // Cleanup for when the user disconnects
        return () => {
            disconnectFromRoom({
                variables: {
                    roomId: id
                }
            });
        }
    }, [])

    if(roomLoading) return "Room Loading..."

    return (
        <MainContainer>
            <StepDisplay content={room.tutorial.steps[room.currentStep].content}/>
            <ButtonContainer>
                {/* Room controls */}
                {
                    room.owner.email===state.user.email ?
                        // If the room owner
                        areAllUsersReady()?
                            // If all users finished with the step
                            <Button onClick={handleNextStep}>Next Step</Button> :
                            // Else users aren't all finished
                            <Button disabled onClick={handleNextStep}>Next Step</Button> :
                        // Else the room follower
                        finishedStep ? 
                            // Of they are finished with the step
                            <Button id="undo-finished-step" onClick={handleCancelFinishStep}>I'm not ready!</Button> :
                            // If they are not finished with the step
                            <Button id="finish-step" onClick={handleFinishStep}>Finish Step</Button>
                }
                
                <Button onClick={handleFinishStep}>Finish Step</Button>
            </ButtonContainer>
            <CommentsContainer>
                <h1>Comments</h1>
                {
                    room.tutorial.steps[room.currentStep].comments.map(comment => {
                        return (
                            <CommentsCard>
                                <h3>{ comment.user.username }</h3>
                                <p>{ comment.content }</p>
                            </CommentsCard>
                        )
                    })
                }
                
            </CommentsContainer>
        </MainContainer>
    )
}

export default Room

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`


const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    flex: 0.1;
    margin: 10px;
    font-family: Montserrat;


    > button {
        border: 1px solid #94ECBE !important;
        margin-bottom: 15px !important;
        color: var(--light-green) !important;
        border-color: var(--light-green) !important;
        margin: 10px;
        :hover {
            background-color: var(--light-green) !important;
            color: var(--dark-purple) !important;
        }
    }

    > #undo-finished-step {
        color: var(--red) !important;
        border-color: var(--red) !important;
    }
`
const CommentsContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0.5;
    margin: 10px;
    font-family: Montserrat;
`
const CommentsCard = styled.div`
    font-family: Montserrat;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    margin: 10px;

    > h3 {
        margin-left: 10px;
    }

    > p {
        margin-left: 10px;
    }
`

