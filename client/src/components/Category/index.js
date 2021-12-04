import React from 'react'
import styled from 'styled-components'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { Button } from '@mui/material';


function Category() {
    const handleRating = () => {

    }
    const handleCreateRoom = () => {

    }
    return (
        <CategoryContainer>
            <LeftConatiner>
                <TopContainer>
                    <p>How To Lorem Ipsum</p>
                </TopContainer>
                <BottomContainer>
                    <StarOutlineIcon onClick={handleRating}/>
                    <StarOutlineIcon onClick={handleRating}/>
                    <StarOutlineIcon onClick={handleRating}/>
                    <StarOutlineIcon onClick={handleRating}/>
                    <StarOutlineIcon onClick={handleRating}/>
                    <p>Viewed: 22 times</p>
                </BottomContainer>

            </LeftConatiner>
            <RightContainer>
                <Button variant="outlined" onClick={handleCreateRoom}>Create Room</Button>
            </RightContainer>
            
        </CategoryContainer>
    )
}

export default Category

const CategoryContainer = styled.div`
    display: flex;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    justify-content: center;
    align-items: center;
    margin: 10px;
    background-color: #fff;
    height: 140px;
`
const LeftConatiner = styled.div`
    margin-left: 1%;
    display: flex;
    flex: 0.8;
    flex-direction: column;

`
const TopContainer = styled.div`
    flex: 0.7;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 2em;
    line-height: 1em;
`
const BottomContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex: 0.3;

    > p {
        margin-left: 10px;
        font-size: 0.8rem;
        color: #C4C4C4;
    }
    > .MuiSvgIcon-root {
        :hover {
            color: rgb(236, 224, 49) !important;
            /* background-color: rgb(236, 224, 49) !important; */
        }
    }

`
const RightContainer = styled.div`
    flex: 0.2;

    > button {
        margin-right: 15px;
        font-size: 1rem;
        font-weight: 500;
        width: 13em;
        height: 4rem;
        border: 3px solid #94ECBE !important;
        margin-bottom: 15px !important;
        background-color: #fff !important;
        color: var(--light-green) !important;
        border-color: var(--light-green) !important;
        :hover {
            background-color: #94ECBE !important;
            color: #fff !important;
        }
    }

    

`