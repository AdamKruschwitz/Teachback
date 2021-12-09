import React, { useState, onEffect } from 'react';
import { TutorialInput } from '../components';
import { SearchBar } from '../components';
import styled from 'styled-components'
import { Button } from '@mui/material';

const Browse = function() {
    
    // state to hold search criteria
    const [search, setSearch] = useState({});
    const [categories, setCategories] = useState([]);
    const [tags, setTags] = useState([]);
    const [tutorials, setTutorials] = useState([]);
    
    // Get categories
    onEffect(() => {
        // TODO
    });

    // Get tags
    onEffect(() => {
        // TODO
    });

    // Get search results
    onEffect(() => {
        // TODO
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
                    { categories.map((category) => <CategoryButton name={category} />) }
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
                { tutorials.map((tutorial) => <TutorialInput tutorial={tutorial} />) }
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