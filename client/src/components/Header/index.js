import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '@mui/material/Button'

const Header = function() {
    const [loggedIn, setLoggedIn] = useState(false);
    
    const handleLogIn = () => {
        // TODO: - implement with firebase
        setLoggedIn(!loggedIn);
    }

    if(!loggedIn) {
        return (
            <div>
                <HeaderContainer>
                    
                    <HeaderLeft>
                        <Logo>Teachback</Logo>
                        <HeaderItemContainer>
                            <HeaderItemLabel>Browse</HeaderItemLabel>
                        </HeaderItemContainer>
                    </HeaderLeft>
                    <HeaderRight>
                        <ButtonContainer>
                            <LeftButton onClick={handleLogIn} variant="outlined" size="large">Login</LeftButton>
                            <RightButton variant="contained" onClick={handleLogIn} size="large">Register</RightButton>   
                        </ButtonContainer>
                    </HeaderRight>
                </HeaderContainer>
            </div>
        )
    }
    else if(loggedIn) {
        return (
            <div>
                <HeaderContainer>
                    
                    <HeaderLeft>
                        <Logo>Teachback</Logo>
                        <HeaderItemContainer>
                            <HeaderItemLabel>Browse</HeaderItemLabel>
                        </HeaderItemContainer>
                        <HeaderItemContainer>
                            <HeaderItemLabel>Profile</HeaderItemLabel>
                        </HeaderItemContainer>
                    </HeaderLeft>
                    <HeaderRight>
                        <ButtonContainer>
                            <RightButton variant="contained" onClick={handleLogIn}>Create Tutorial</RightButton>   
                        </ButtonContainer>
                    </HeaderRight>
                </HeaderContainer>
            </div>
        )
    }
}

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: inline;
    padding-left: 2em;
    padding-right: 2em;
    background-color: var(--dark-purple);
    color: var(--light-blue);
`

const HeaderLeft = styled.div`
    display: flex;
    flex-direction: row;
    flex: 0.5;
    justify-content: flex-start;
    align-items: stretch;
`

const HeaderRight = styled.div`
    display: flex;
    flex-direction: row;
    flex: 0.5;
    justify-content: flex-end;
    align-items: center;
`

const Logo = styled.h1`
    padding-right: 1em;
    font-family: 'Bungee', cursive;
    margin: 0px;
`

const HeaderItemContainer = styled.div`
    display: flex;
    align-items: center;
    padding-left: 1em;
    padding-right:1em;
    cursor: pointer;
    :hover {
        background-color: #453469;
    }
`

const HeaderItemLabel = styled.h2` 
    vertical-align: middle;
    color: var(--light-green);
    font-family: 'Montserrat', sans-serif;
`

const ButtonContainer = styled.div`
    
`

const LeftButton = styled(Button)`
    position: static;
    z-index: 1;
    background-color: var(--dark-purple) !important;
    color: var(--light-green) !important;
    border-color: var(--light-green) !important;
    font-family: 'Montserrat', sans-serif;
`

const RightButton = styled(Button)`
    transform: translateX(-10px);
    z-index: 0;
    background-color: var(--light-green) !important;
    color: var(--dark-purple) !important;
    border-color: var(--light-green) !important;
    font-family: 'Montserrat', sans-serif;
`


const StyledHeader = styled(Header)``

export default StyledHeader