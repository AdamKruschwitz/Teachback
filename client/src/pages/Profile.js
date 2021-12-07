import React from 'react';
import { Category } from '../components';
import styled from 'styled-components'
import { Button } from '@mui/material';
import portrait from '../portrait.jpeg';
import { Link } from "react-router-dom"


const Profile = function() {
    const handleEditProfile = () => {
            // TODO: finish functionality

    }
    return (
        <ProfilePageBody>
            <TopContainer>
                <img 
                    src={portrait}
                    alt='portrait'
                />
                <p>Alex</p>
                <Link to='/profile/edit'>
                <Button style={{
                    border: '3px solid #94ECBE ',
                    marginBottom: '15px',
                    color: 'var(--light-green)',
                }}variant="outlined" onClick={handleEditProfile}>Edit Profile</Button>
                </Link>
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
    background-color: #F0F0F0;
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
`
const TutorialsContainer = styled.div`
    flex: 0.3;

    > h1 {
        margin-left: 10px;
    }
`
const HistoryContainer = styled.div`
    flex: 0.3;

    > h1 {
        margin-left: 10px;
    }
`