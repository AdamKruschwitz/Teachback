import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { StepDisplay } from '../components'
import { Button, TextField } from '@mui/material';
import remarkGFM from 'remark-gfm';
import ReactMarkdown from 'react-markdown'
import { CommentInput } from '../components';

import { useQuery } from '@apollo/client';
import { GET_CURRENT_STEP, GET_ROOM } from '../utils/queries' ;
import { useParams } from 'react-router-dom';

function Room() {
    const handleNextStep = () => {
        //TODO: functinality missing
    }
    const handleFinishStep = () => {
        //TODO: functinality missing
    }

    const [step, setStep] = useState({});
    // Will be used for displaying connected users and allowing next buttons.
    const [room, setRoom] = useState({});
    // const [curStepI, setCurStepI] = useState(0);
    const { id } = useParams();
    const { data: roomData, loading: roomLoading } = useQuery(GET_ROOM, { variables: {id: id} });
    const { data: stepData } = useQuery(GET_CURRENT_STEP, { variables: {id: id}, pollInterval: 500 });
    
    // After render, check the state of initial room load and check for updated step data.
    useEffect( () => {
        if(roomData) {
            setRoom(roomData);
        } else if(stepData) {
            setStep(stepData);
        }
        
    }, [setStep, setRoom])

    return (
        <MainContainer>
            <StepDisplay content={step.content}/>
            <ButtonContainer>
                {/* TODO: if statement for if owner or if follower */}
                <Button onClick={handleNextStep}>Next Step</Button>
                <Button onClick={handleFinishStep}>Finish Step</Button>
            </ButtonContainer>
            <CommentsContainer>
                <h1>Comments</h1>
                {
                    step.comments.map(comment => {
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
