import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import axios from 'axios'
import { useGlobalContext } from '../utils/GlobalContext';
import { UPDATE_EMAIL, UPDATE_PASSWORD } from '../utils/actions'
import "firebase/auth";
import firebase from "firebase/app";

export default function EditProfile() {
    const [state, dispatch] = useGlobalContext();
    const [currentUser] = useState({});
    const [emailValue, setEmailValue] = useState('')
    const [currentPasswordValue, setCurrentPasswordValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const [passwordConfirmValue, setPasswordConfirmValue] = useState('')

    // Load user profile data
    useEffect(()=>{
        // TODO
        },[])
    
    const reauthenticate = (currentPassword) => {
        var user = firebase.auth().currentUser;
        var cred = firebase.auth.EmailAuthProvider.credential(
            user.email, currentPassword);
        return user.reauthenticateWithCredential(cred);
    }
   
    function updateUserEmail() {
        // [START auth_update_user_email]
        reauthenticate(currentPasswordValue).then(() => {
            var user = firebase.auth().currentUser;
            user.updateEmail(emailValue).then(() => {
             alert('Email changed successfully!');
             window.location.reload();
            }).catch((error) => { alert(error.message); });
          }).catch((error) => { alert(error.message); });
    }
    
    const handleChangePassword = async () => {
        // Verify inputs
        if (currentPasswordValue === '') {
            alert('you need to enter your current password first');
            return;
            }
        if(passwordValue !== setPasswordConfirmValue){
            alert('new passwords need to be the same')
            return; 
        }
        if (passwordValue === '') {
            alert('Enter the new password');
            return;
        }
        // Change password
        try {
            reauthenticate(currentPasswordValue).then(() => {
                var user = firebase.auth().currentUser;
                user.updatePassword(passwordValue).then(() => {
                  alert('password updated')
                }).catch((error) => { alert(error.message); });
              }).catch((error) => { alert(error.message); });
        } catch {
        alert("Failed to update")
        }
    }
    const handleCancel = () => {
        // how to return back to profile page
        window.location.href = '/profile'
    }

    // change both is not possible in firebase according to security. 
    // you need to change first email and then password. 
    // maybe we can do all of them together with then() notation but later

    return (
        <MainContainer>
            <TextFieldContainer>
            <TextField sx={{margin: '10px'}}
                            id="email"
                            onChange={(event, object) => {
                                setEmailValue(event.target.value)
                            }}
                            value={emailValue}
                            label="New Email"
                        />
                        <br />
                        <TextField sx={{margin: '10px'}}
                            required
                            id="oldPassword"
                            onChange={(event, object) => {
                                setCurrentPasswordValue(event.target.value)
                            }}
                            value={currentPasswordValue}
                            label="Current Password"
                            type="password"
                        />
                        < br/>
                        <TextField sx={{margin: '10px'}}
                            id="password"
                            onChange={(event, object) => {
                                setPasswordValue(event.target.value)
                            }}
                            value={passwordValue}
                            label="New Password"
                            type="password"
                        />
                        < br/>
                        <TextField sx={{margin: '10px'}}
                            required
                            id="passwordConfirm"
                            onChange={(event, object) => {
                                setPasswordConfirmValue(event.target.value)
                            }}
                            value={passwordConfirmValue}
                            label="Confirm New Password"
                            type="password"
                        />
                    <ButtonAction>
                        <Button variant="outlined" label="Submit" onClick={ updateUserEmail }>Change Email</Button>
                        <Button variant="outlined" label="Submit" onClick={ handleChangePassword }>Change Password</Button>
                        <Button variant="outlined" label="Submit" onClick={ handleCancel }>Cancel</Button>
                    </ButtonAction>
            </TextFieldContainer>
            
        </MainContainer>
    )
}

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const TextFieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`
const ButtonAction = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
        > button {
            background-color: var(--light-green) !important;
            color: var(--dark-purple) !important;
            border-color: var(--dark-purple) !important;
            font-family: 'Montserrat', sans-serif;
            margin: 10px;
            :hover {
            background-color: var(--dark-purple) !important;
            color: var(--light-green) !important;
        }
    }
`
