import React from 'react';
import { Category } from '../components';
import styled from 'styled-components'
import { Button } from '@mui/material';
import portrait from '../portrait.jpeg'

const Profile = function() {
    const handleEditProfile = () => {

    }
    // TODO
    return (
        <ProfilePageBody>
            <TopContainer>
                <img 
                    src={portrait}
                    alt='portrait'
                />
                <p>Alex</p>
                <Button variant="outlined" onClick={handleEditProfile}>Edit Profile</Button>
            </TopContainer>
            <TutorialsContainer>
                <h1>Tutorials</h1>
                <Category />
                <Category />
                <Category />
            </TutorialsContainer>
            <HistoryContainer>
                <h1>History</h1>
                <Category />
                <Category />
                <Category />
            </HistoryContainer>
        </ProfilePageBody>
    );
}

export default Profile

const ProfilePageBody = styled.div`
    display: flex;
    flex-direction: column;
`

const TopContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    flex: 0.3;
    background: #2D2244;

    > p {
        color: #fff;
        margin-bottom: 30px;
        font-family: Montserrat;
        font-size: 2rem;
    }

    > img {
        object-fit: fill;
        height: 300px;
        width: 300px;
        margin: 40px;
        border-radius: 50%;

    }

    > button {
        border: 3px solid #94ECBE !important;
        margin-bottom: 15px !important;
        color: var(--light-green) !important;
        border-color: var(--light-green) !important;
        :hover {
            background-color: var(--light-green) !important;
            color: var(--dark-purple) !important;
        }
    }
`
const TutorialsContainer = styled.div`
    flex: 0.3;
`
const HistoryContainer = styled.div`
    flex: 0.3;
`