import React from 'react';
import { Category } from '../components';
import { SearchBar } from '../components';
import styled from 'styled-components'
import { Button } from '@mui/material';

const Browse = function() {
    const handleCategorySelect = () => {

    }

    const handleTagSelect = () => {
        
    }

    return (
        <MainBody>
            <TopContainer>
                <LeftContainer>
                    <h1>Technologies</h1>
                    <Button onClick={handleCategorySelect}>Javascript</Button>
                    <Button onClick={handleCategorySelect}>HTML</Button>
                    <Button onClick={handleCategorySelect}>CSS</Button>
                    <Button onClick={handleCategorySelect}>React</Button>
                    <Button onClick={handleCategorySelect}>Reavt Native</Button>
                    <Button onClick={handleCategorySelect}>IOS</Button>
                </LeftContainer>
                <RightContainer>
                    <h1>Popular Tags</h1>
                    <Button onClick={handleTagSelect}>Swift</Button>
                    <Button onClick={handleTagSelect}>GoLang</Button>
                    <Button onClick={handleTagSelect}>Flutter</Button>
                    <Button onClick={handleTagSelect}>Javascript</Button>
                    <Button onClick={handleTagSelect}>Jquery</Button>
                    <Button onClick={handleTagSelect}>Next.js</Button>
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