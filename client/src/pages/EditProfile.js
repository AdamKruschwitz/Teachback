import React from 'react'
import styled from 'styled-components'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';


function EditProfile() {

    const handleEditEmal = () => {

    }
    const handleChangePassword = () => {

    }
    const handleCancel = () => {

    }
    const handleChangeBoth = () => {

    }
    return (

        <MainContainer>
            <TextFieldContainer>
            <TextField sx={{margin: '10px'}}
                            required
                            id="email"
                            // onChange={(event, object) => {
                            //     setEmailValue(event.target.value)
                            // }}
                            // value={emailValue}
                            label="New Email"
                        />
                        <br />
                        <TextField sx={{margin: '10px'}}
                            required
                            id="password"
                            // onChange={(event, object) => {
                            //     setPasswordValue(event.target.value)
                            // }}
                            // value={passwordValue}
                            label="New Password"
                            type="password"
                        />
                        < br/>
                        <TextField sx={{margin: '10px'}}
                            required
                            id="passwordConfirm"
                            // onChange={(event, object) => {
                            //     setPasswordConfirmValue(event.target.value)
                            // }}
                            // value={passwordConfirmValue}
                            label="Confirm New Password"
                            type="password"
                        />
                    <ButtonAction>
                        <Button variant="outlined" label="Submit" onClick={ handleEditEmal }>Change Email</Button>
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
        background-color: #453469;
    }
    }
`