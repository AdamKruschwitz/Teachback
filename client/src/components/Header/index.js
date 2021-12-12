import React from 'react'
import styled from 'styled-components'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase'

import { useGlobalContext } from '../../utils/GlobalContext';
import { TOGGLE_LOGIN_DIALOG, USER_LOGOUT } from '../../utils/actions';

const Header = function() {
    const [state, dispatch] = useGlobalContext();
    
    const handleLogIn = () => {
        // TODO: - implement with firebase
        dispatch({ type: TOGGLE_LOGIN_DIALOG });
    }

    const handleSignOut = () => {
        auth.signOut().then(function() {
            dispatch({type: USER_LOGOUT, payload: null})
        })
    }

    console.log(state);

    if(!state.user) {
        return (
            <div>
                <HeaderContainer>
                    
                    <HeaderLeft>
                        <UnstyledLink to="/">
                            <Logo>Teachback</Logo>
                        </UnstyledLink>
                        <UnstyledLink to="browse">
                            <HeaderItemContainer>
                                <HeaderItemLabel>Browse</HeaderItemLabel>
                            </HeaderItemContainer>
                        </UnstyledLink>
                    </HeaderLeft>
                    <HeaderRight>
                        <ButtonContainer>
                            <LeftButton onClick={handleLogIn} variant="outlined" size="large">Login</LeftButton>
                            
                            <UnstyledLink to="/register" style={{ textDecoration: 'none' }}>
                            <RightButton variant="contained" onClick={handleLogIn} size="large">Register</RightButton>
                            </UnstyledLink>   
                        </ButtonContainer>
                    </HeaderRight>
                </HeaderContainer>
            </div>
        )
    }
    else {
        return (
            <div>
                <HeaderContainer>
                    <HeaderLeft>
                        <UnstyledLink to="/">
                            <Logo>Teachback</Logo>
                        </UnstyledLink>
                        <UnstyledLink to="browse">
                            <HeaderItemContainer>
                                <HeaderItemLabel>Browse</HeaderItemLabel>
                            </HeaderItemContainer>
                        </UnstyledLink>
                        <UnstyledLink to="profile">
                            <HeaderItemContainer>
                                <HeaderItemLabel>Profile</HeaderItemLabel>
                            </HeaderItemContainer>
                        </UnstyledLink>
                    </HeaderLeft>
                    <HeaderRight>
                        <ButtonContainer>
                            <UnstyledLink to="tutorial/create">
                                <RightButton variant="contained">Create Tutorial</RightButton>
                            </UnstyledLink>   
                        </ButtonContainer>
                        <ButtonContainer>
                                <LeftButton variant="outlined" onClick={handleSignOut}>Sign Out</LeftButton>
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
    height: 100%;
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

const UnstyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: inherit;
    }
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
