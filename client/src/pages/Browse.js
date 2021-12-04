import React from 'react';
import { Category } from '../components';
import { SearchBar } from '../components';
import styled from 'styled-components'
import { Button } from '@mui/material';

const Browse = function() {
    
    return (
        <MainBody>
            <TopContainer>
                <LeftContainer>
                    <h1>Technologies</h1>
                    <Button>Javascript</Button>
                    <Button>HTML</Button>
                    <Button>CSS</Button>
                    <Button>React</Button>
                    <Button>Reavt Native</Button>
                    <Button>IOS</Button>
                </LeftContainer>
                <RightContainer>
                    <h1>Popular Tags</h1>
                    <Button>Swift</Button>
                    <Button>GoLang</Button>
                    <Button>Flutter</Button>
                    <Button>Javascript</Button>
                    <Button>Jquery</Button>
                    <Button>Next.js</Button>
                </RightContainer>
            </TopContainer>
            <SearchContainer>
                <SearchBar />
            </SearchContainer>
            <CategoryContainer>
                <h1>Categories</h1>
                <Category />
                <Category />
                <Category />
                <Category />
                <Category />
                <Category />
            </CategoryContainer>
        </MainBody>
    )
}

export default Browse

const MainBody = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #F0F0F0;
`
const TopContainer = styled.div`
    display: flex;
    flex-direction: row;
    /* flex: 0.5; */
    height: 450px;
    width: 100vw;
    background-color: var(--dark-purple);
`
const CategoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0.5;

`
const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.5;
    font-family: Montserrat;

    > h1 {
        color: #fff;
    }
    > button {
        color: #fff;
    }
`
const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.5;
    font-family: Montserrat;
    
    > h1 {
        color: #fff;

    }

    > button {
        color: #fff;
    }
`
const SearchContainer = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`