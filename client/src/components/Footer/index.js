import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '@mui/material';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';

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
                    <h2>Teachback</h2>
                </FooterNameContainer>
                <FooterLinkContainer>
                    <LinkBoxLeft>
                        <h4>Mobile App</h4>
                        <p>Features</p>
                        <p>Features</p>
                        <p>Features</p>
                    </LinkBoxLeft>
                    <LinkBoxCenter>
                        <h4>Community</h4>
                        <p>Features</p>
                        <p>The Portal</p>
                        <p>Live Events</p>
                    </LinkBoxCenter>
                    <LinkBoxRight>
                        <h4>Company</h4>
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
            <LineBreak>
                <hr />
            </LineBreak>
            <FooterBottomContainer>
                <FooterLeftContainer>
                    <p>© Techback, Inc. 2019. We love our users!</p>
                </FooterLeftContainer>
                <FooterSocialContainer>
                    
                    {/* TODO: change icons to images */}
                    <Icons>
                        <SearchIcon />
                        <SearchIcon />
                        <SearchIcon />
                    </Icons>
                    
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
    height: 50vh;
    left: 1px;
    top: 1700px;
`

const LineBreak = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 1px;
    margin-left: 80px;
    margin-right: 80px;
    background: rgba(214, 228, 255, 0.5);
    transform: matrix(1, 0, 0, -1, 0, 0);

    > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
    
  }
`
const FooterTopContainer = styled.div`
    display: flex;
    flex: 0.8;
    color: #fff;
`
const FooterNameContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    flex: 0.4;
    font-family: Comfortaa;
    font-style: normal;
    font-weight: normal;

    > h2 {
        font-size: 28.4444px;
        line-height: 32px;
        padding-left: 20%
    }

`
const FooterLinkContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex: 0.4;
    font-family: Montserrat;
    font-style: normal;
`
const LinkBoxLeft = styled.div`
    > h4 {
        color: #D6E4FF;

    }
    > p {
            color: rgba(214, 228, 255, 0.8);
            font-size: 15px;
            line-height: 24px;
        }
`
const LinkBoxCenter = styled.div`
    > h4 {
        color: #D6E4FF;

    }
    > p {
            color: rgba(214, 228, 255, 0.8);
            font-size: 15px;
            line-height: 24px;
        }
`
const LinkBoxRight = styled.div`
    > h4 {
        color: #D6E4FF;

    }
    > p {
            color: rgba(214, 228, 255, 0.8);
            font-size: 15px;
            line-height: 24px;
        }    
`
const FooterButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.2;
    
`
const FooterBottomContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #fff;
    flex: 0.2;
`
const TopButton = styled(Button)`
    width: 130px;
    height: 40px;
    margin-bottom: 15px !important;
    background-color: var(--light-green) !important;
    color: var(--dark-purple) !important;
    border-color: var(--light-green) !important;
`
const BottomButton = styled(Button)`
    width: 130px;
    height: 40px;
    border: 1px solid #94ECBE !important;
    margin-bottom: 15px !important;
    background-color: var(--dark-purple) !important;
    color: var(--light-green) !important;
    border-color: var(--light-green) !important;
`
const FooterLeftContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex: 0.5;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;

    > p {
        font-size: 15px;
        line-height: 24px;
        padding-left: 5%
    }
`
const FooterSocialContainer = styled.div`
    display: flex;
    flex: 0.5;
    justify-content: center;
    align-items: center;
    
`
const Icons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 30px;
    width: 30px;

> .MuiSvgIcon-root {
    border: 1px solid white;
    border-radius: 999px;
    background-color: #D6E4FF;
    margin-left: auto;
    margin-right: 20px;
}
`
