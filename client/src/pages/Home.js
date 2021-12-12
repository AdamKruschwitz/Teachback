import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';

const Home = function() {
    // TESTING OBJECTS
    const testTutorials = [
        // TODO
    ]

    const [tutorials, setTutorials] = useState(testTutorials);

    // Load the top tutorials
    useEffect(() => {
        // TODO
        return false;
    })

    return(
        <Container>
            <HeroContainer>
                <HeroLeft>
                    <HeroText>Make complex tasks simple, and bring everyone along with you!</HeroText>
                    <JoinButton size="large" >Sign Up</JoinButton>
                </HeroLeft>
                <HeroRight>
                    {/* TODO - add a hero image */}
                </HeroRight>
            </HeroContainer>
            <FeaturedContent>
                <h1>Check out these popular tutorials!</h1>
                { tutorials.map((tutorial) => /* replace with a tutorial card after merge */ false) }
            </FeaturedContent>
            <SignupReminder>
                <p>Sign up here and start taking free technology tutorials today!</p>
                <JoinButton> Sign Up </JoinButton>
            </SignupReminder>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    background-color: var(--light-grey);
`

const HeroContainer = styled.div`
    width: 100%;
    background-color: var(--dark-purple);
    height: 75vh;
    
    display: flex;
    flex-direction: row;
`

const HeroLeft = styled.div`
    width: 55%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    margin: 4rem 1rem 4rem 1rem;
`

const HeroRight = styled.div`
    width: 45%;
    background-color: var(--light-blue);
    height: 100%;
`

const HeroText = styled.p`
    color: var(--light-blue);
    font-size: 56px;
    letter-spacing: -1.5%;
    font-family: 'Montserrat', sans-serif;
`

const JoinButton = styled(Button)`
    z-index: 0;
    background-color: var(--light-green) !important;
    color: var(--dark-purple) !important;
    border-color: var(--light-green) !important;
    font-family: 'Montserrat', sans-serif;
    padding: 1rem !important;
`

const FeaturedContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    background-color: var(--light-grey);
    width: 100%;

    > h1 {
        font-family: 'Montserrat', sans-serif;
        color: black;
        font-size: 48px;
    }
`

const SignupReminder = styled.div`
    background-color: var(--light-grey);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    > p {
        font-family: 'Montserrat', sans-serif;
        color: black;
        font-size: 48px;
        max-width: 60%;
    }
`

export default Home;