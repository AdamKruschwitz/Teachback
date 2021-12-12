import React, { useState, useEffect } from 'react';
import { TutorialCard, SearchBar } from '../components';
import styled from 'styled-components'
import { Button } from '@mui/material';

const Browse = function() {
    // TEST OBJECTS
    const testTutorials = [
        {
            title: "How to tie your shoe",
            rating: 5.0,
            author: {
                username: "BillyBeans"
            },
            _id: "abc123"
        }
    ];

    const testCategories = [
        { name: "Fidget Spinning" },
        { name: "Hog Racing" },
        { name: "Javascript" },
        { name: "Cooking" }
    ];

    const testTags = [
        { name: "Prank" },
        { name: "Gone Wrong" },
        { name: "Epic Fail" },
        { name: "Juicebox opening tips" }
    ]

    // state to hold search criteria
    const [search, setSearch] = useState({});
    const [categories, setCategories] = useState(testCategories);
    const [tags, setTags] = useState(testTags);
    const [tutorials, setTutorials] = useState(testTutorials);
    
    // Get categories
    useEffect((e) => {
        // TODO
        return false;
    });

    // Get tags
    useEffect((e) => {
        // TODO
        return false;
    });

    // Get search results
    useEffect((e) => {
        // TODO
        return false;
    });

    const handleCategorySelect = () => {
        // TODO
    }

    const handleTagSelect = () => {
        // TODO
    }
    const CategoryButton = ({name}) => (<Button onClick={(e) => handleCategorySelect(e, name)}>{name}</Button>);
    const TagButton = ({name}) => (<Button onClick={(e) => handleTagSelect(e, name)}>{name}</Button>);

    return (
        <MainBody>
            <TopContainer>
                <LeftContainer>
                    <h1>Categories</h1>
                    { categories.map((category) => <CategoryButton name={category.name} />) }
                </LeftContainer>
                <RightContainer>
                    <h1>Popular Tags</h1>
                    { tags.map((tag) => <TagButton name={tag.name} />) }
                </RightContainer>
            </TopContainer>
            <SearchContainer>
                <SearchBar />
            </SearchContainer>
            <CategoryContainer>
                {/* Search results */}
                <h1>{search.category || "Tutorials"}</h1>
                { tutorials.map((tutorial) => <TutorialCard tutorial={tutorial} />) }
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