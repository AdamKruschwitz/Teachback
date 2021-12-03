import React, { useState } from 'react'
import styled from 'styled-components'
// import { Button } from '@mui/material';


function Footer() {

    const [loggedIn, setLoggedIn] = useState(false);
    const handleLogIn = () => {
            // TODO: - implement with firebase
            setLoggedIn(!loggedIn);
        }

    return (
        <FooterContainer>
            <FooterTopContainer>
                <FooterNameContainer>
                    {/* TODO: add logo  */}
                    <p>Teachback</p>
                </FooterNameContainer>
                <FooterLinkContainer>
                    <LinkBoxLeft>
                        <h3>Mobile App</h3>
                        <p>Features</p>
                        <p>Features</p>
                        <p>Features</p>
                    </LinkBoxLeft>
                    <LinkBoxCenter>
                        <h3>Community</h3>
                        <p>Features</p>
                        <p>The Portal</p>
                        <p>Live Events</p>
                    </LinkBoxCenter>
                    <LinkBoxRight>
                        <h3>Company</h3>
                        <p>About us</p>
                        <p>Contact us</p>
                        <p>History</p>
                    </LinkBoxRight>
                </FooterLinkContainer>
                <FooterButtonContainer>
                    <TopButton onClick={handleLogIn} variant="outlined">Login</TopButton>
                    <BottomButton variant="contained">Register</BottomButton>
                </FooterButtonContainer>
            </FooterTopContainer>

            <FooterBottomContainer>
                <FooterLeftContainer>
                    <p>© Techback, Inc. 2019. We love our users!</p>
                </FooterLeftContainer>
                <FooterSocialContainer>

                </FooterSocialContainer>

            </FooterBottomContainer>
            
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.div`
    margin: 0;
    display: flex;
    flex-direction: column;
    background-color: var(--dark-purple);
    position: absolute;
    width: 100vw;
    height: 30vh;
    left: 1px;
    top: 2073px;
`
const FooterTopContainer = styled.div`
    display: flex;
    flex: 0.8;
    color: #fff;
`
const FooterNameContainer = styled.div`
    flex: 0.5;
`
const FooterLinkContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex: 0.3;
`
const LinkBoxLeft = styled.div`

    > p {
            color: rgba(214, 228, 255, 0.8);

        }
`
const LinkBoxCenter = styled.div`
    > p {
            color: rgba(214, 228, 255, 0.8);

        }
`
const LinkBoxRight = styled.div`
    > p {
            color: rgba(214, 228, 255, 0.8);

        }    
`
const FooterButtonContainer = styled.div`
    flex: 0.2;
    
`
const FooterBottomContainer = styled.div`
    color: #fff;
    flex: 0.2;
`
const TopButton = styled.div`
    background-color: var(--light-green) !important;
    color: var(--dark-purple) !important;
    border-color: var(--light-green) !important;
`
const BottomButton = styled.div`
    background-color: var(--dark-purple) !important;
    color: var(--light-green) !important;
    border-color: var(--light-green) !important;
`
const FooterLeftContainer = styled.div`

`
const FooterSocialContainer = styled.div`

`