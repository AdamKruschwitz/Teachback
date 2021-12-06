import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Button, TextField } from '@mui/material';
import remarkGFM from 'remark-gfm';
import ReactMarkdown from 'react-markdown'

import { useQuery } from '@apollo/client';
import { GET_CURRENT_STEP, GET_ROOM } from '../utils/queries' ;
import { useParams } from 'react-router-dom';

function Room() {
    const handleNextStep= () => {
        //TODO: functinality missing
    }
    const handleFinishStep = () => {
        //TODO: functinality missing
    }

    const [step, setStep] = useState({});
    const [room, setRoom] = useState({});
    const [curStepI, setCurStepI] = useState(0);
    const { id } = useParams();
    const {data: roomData, loading: roomLoading } = useQuery(GET_ROOM, { variables: {id: id} });
    const {data: stepData, loading: stepLoading } = useQuery(GET_CURRENT_STEP, { variables: {id: id}, pollInterval: 500 });
    
    useEffect( () => {
        if(roomData) {
            setRoom(roomData);
        }
    })

    return (
        <MainContainer>
            <TopContainer>
                <h1>Step 1</h1>
                <MarkdownContainer>
                    <ReactMarkdown children={step.content} remarkPlugins={[remarkGFM]} />
                </MarkdownContainer>
            </TopContainer>
            <ButtonContainer>
                {/* TODO: if statement for if owner or if follower */}
                <Button onClick={handleNextStep}>Next Step</Button>
                <Button onClick={handleFinishStep}>Finish Step</Button>
            </ButtonContainer>
            <CommentsContainer>
                <h1>Comments</h1>
                <CommentsCard>
                    <h3>Hello Man</h3>
                    <p>Quisque dictum varius ornare. Phasellus rutrum metus scelerisque maximus interdum. Maecenas id dui metus. Proin vulputate iaculis magna, ut lacinia nibh rutrum a. Maecenas porttitor, odio pellentesque efficitur ullamcorper, lorem est imperdiet dolor, cursus auctor nisl urna in dui. Maecenas pretium risus sit amet tristique consectetur. Nulla viverra orci diam. Curabitur et finibus nibh. Vestibulum in ligula rutrum, ultricies leo ac, posuere dui.</p>
                </CommentsCard>
                <CommentsCard>
                    <h3>Hello Man</h3>
                    <p>Quisque dictum varius ornare. Phasellus rutrum metus scelerisque maximus interdum. Maecenas id dui metus. Proin vulputate iaculis magna, ut lacinia nibh rutrum a. Maecenas porttitor, odio pellentesque efficitur ullamcorper, lorem est imperdiet dolor, cursus auctor nisl urna in dui. Maecenas pretium risus sit amet tristique consectetur. Nulla viverra orci diam. Curabitur et finibus nibh. Vestibulum in ligula rutrum, ultricies leo ac, posuere dui.</p>
                </CommentsCard>
                <CommentsCard>
                    <h3>Hello Man</h3>
                    <p>Quisque dictum varius ornare. Phasellus rutrum metus scelerisque maximus interdum. Maecenas id dui metus. Proin vulputate iaculis magna, ut lacinia nibh rutrum a. Maecenas porttitor, odio pellentesque efficitur ullamcorper, lorem est imperdiet dolor, cursus auctor nisl urna in dui. Maecenas pretium risus sit amet tristique consectetur. Nulla viverra orci diam. Curabitur et finibus nibh. Vestibulum in ligula rutrum, ultricies leo ac, posuere dui.</p>
                </CommentsCard>
                <CommentsCard>
                    <h3>Hello Man</h3>
                    <p>Quisque dictum varius ornare. Phasellus rutrum metus scelerisque maximus interdum. Maecenas id dui metus. Proin vulputate iaculis magna, ut lacinia nibh rutrum a. Maecenas porttitor, odio pellentesque efficitur ullamcorper, lorem est imperdiet dolor, cursus auctor nisl urna in dui. Maecenas pretium risus sit amet tristique consectetur. Nulla viverra orci diam. Curabitur et finibus nibh. Vestibulum in ligula rutrum, ultricies leo ac, posuere dui.</p>
                </CommentsCard>
            </CommentsContainer>
            
        </MainContainer>
    )
}

export default Room

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const TopContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 35em;
    margin-bottom: 10px;
    font-family: Montserrat;
    background-color: var(--dark-purple);
    color: #fff;

`
const MarkdownContainer = styled.div`
    border: 1px solid #c4c4c4;
    height: 70%;
    width: 80%;
    background-color: #f0f0f0;
    color: #111;
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

