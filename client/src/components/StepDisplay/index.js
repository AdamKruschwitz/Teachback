import React from 'react';
import styled from 'styled-components';
import remarkGFM from 'remark-gfm';
import ReactMarkdown from 'react-markdown'

export default function StepDisplay({ content }) {
    return (
        <TopContainer>
            <h1>Step 1</h1>
            <MarkdownContainer>
                <ReactMarkdown children={content} remarkPlugins={[remarkGFM]} />
            </MarkdownContainer>
        </TopContainer>
    )
}

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