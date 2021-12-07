import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import axios from 'axios'
import { useGlobalContext } from '../utils/GlobalContext';
import { auth } from '../firebase'
import { PASSWORD_LOGIN } from '../utils/actions'


function EditProfile() {

    const [state, dispatch] = useGlobalContext();
    const [currentUser] = useState()


    const [emailValue, setEmailValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const [passwordConfirmValue, setPasswordConfirmValue] = useState('')

    const handleEditEmail = async (e) => {
        e.preventDefault();
        console.log(emailValue)
        if (emailValue === '') {
        alert('email field must not be empty');
        return;
        }
    
        try {

            const result = await auth.updateEmail(emailValue)
            EditFromfirebaseResponse(result, PASSWORD_LOGIN)
        } catch {
        alert("Failed to update")
        }
    }
    const handleChangePassword = async (e) => {
        e.preventDefault();
        console.log(passwordValue)
        if (emailValue === '') {
        alert('email field must not be empty');
        return;
        }
    
        try {

            const result = await auth.updateEmail(passwordValue)
            EditFromfirebaseResponse(result, PASSWORD_LOGIN)
        } catch {
        alert("Failed to update")
        }
    }
    const handleCancel = () => {
        // how to return back to profile page
    }
    const handleChangeBoth = () => {
        handleEditEmail()
        handleChangePassword()
    }

    const EditFromfirebaseResponse = async (result, loginType) => {
        console.log(result);
        const token = result.user.refreshToken;
            const user = {
                username: result.user.displayName,
                email: result.user.email,
                image: result.user.photoURL,
                token: token,
                uid: result.user.uid
            }
            axios.post('http://localhost:3001/registerUser',{user}).then(function(data){
                if(data.data.result){
                    dispatch({type: loginType, payload: user });
                    // dispatch({ type: TOGGLE_LOGIN_DIALOG });
                }else{
                    alert('couldnt save to server')
                }
            })
    }

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
                        <Button variant="outlined" label="Submit" onClick={ handleEditEmail }>Change Email</Button>
                        <Button variant="outlined" label="Submit" onClick={ handleChangePassword }>Change Password</Button>
                        <Button variant="outlined" label="Submit" onClick={ handleChangeBoth }>Change Both</Button>
                        <Button variant="outlined" label="Submit" onClick={ handleCancel }>Cancel</Button>
                    </ButtonAction>
            </TextFieldContainer>
            
        </MainContainer>
    )
}

export default EditProfile

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