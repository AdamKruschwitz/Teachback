import React, { useState } from 'react';
import styled from 'styled-components';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import TextField from '@mui/material/TextField';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';

import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';

import { auth, GithubProvider, GoogleProvider, EmailPasswordProvider } from "../../firebase";





import { useGlobalContext } from '../../utils/GlobalContext';
import { TOGGLE_LOGIN_DIALOG, GITHUB_LOGIN, GOOGLE_LOGIN } from '../../utils/actions';

const LoginDialogue = function() {
    const [curTab, setCurTab] = useState('login');
    const [state, dispatch] = useGlobalContext();


    const handleOnClose = () => {
        dispatch({ type: TOGGLE_LOGIN_DIALOG });
    }

    const handleTabChange = (e, value) => {
        e.preventDefault();
        setCurTab(value);
    }

    const handlePasswordLogin = (e, authContent) => {
        // TODO: 
        e.preventDefault();
        auth.signInWithPopup(EmailPasswordProvider)
        .then((result) => {
            const credential = result.credential;
            const token = credential.accessToken;
            const user = {
                username: result.credential;
            }
        })
    }

    const handleCreatePasswordAccount = (e, registerContent) => {
        // TODO:
    }

    const handleGoogleLogin = (e) => {
        e.preventDefault();
        auth.signInWithPopup(GoogleProvider)
            .then((result) => {
                const credential = result.credential;
                const token = credential.accessToken;
                const user = {
                    username: result.additionalUserInfo.username,
                    email: result.user.email,
                    image: result.user.photoURL,
                    toke: token
                }
                dispatch({type: GOOGLE_LOGIN, payload: user });
                // TODO: graphql query sending user info.
            })
            .catch((error) => alert(error.message));
    }

    const handleGithubLogin = (e) => {
        e.preventDefault();
        auth.signInWithPopup(GithubProvider).then((result) => {
            const credential = result.credential;
            const token = credential.accessToken;
            console.log(result);
            alert(result);
            const user = {
                username: result.additionalUserInfo.username,
                email: result.user.email,
                image: result.user.photoURL,
                token: token
            }
            dispatch({ type: GITHUB_LOGIN, payload: user });
            // TODO: graphQL query sending user info.
        }).catch((error) => alert(error.message));
    }

    return (
        // Probably remove padding on the dialogue to allow tabs to extend to the end of the div
        <Dialog open={ state.loginOpen } onClose={ handleOnClose }>
            <DialogTitle>
                <Tabs value={ curTab } onChange={ handleTabChange }>
                    <Tab label="Log In" value="login" />
                    <Tab label="Register" value="register" />
                </Tabs>
                <TabPanel value={ curTab } index="login">
                    <DialogContent>
                        <TextField
                            id="username"
                            label="Username"
                        />
                        <br />
                        <TextField
                            id="password"
                            label="Password"
                            type="password"
                        />
                        <br />
                        {/* Github OAuth button */}
                        <Button id="github-auth" variant="contained" onClick={ handleGithubLogin }>
                            <GitHubIcon />
                        </Button>
                        {/* Google OAuth button */}
                        <Button id="google-auth" variant="contained" onClick={ handleGoogleLogin }>
                            <GoogleIcon />
                        </Button>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="text" label="Submit" onClick={ handlePasswordLogin }>Log In</Button>
                    </DialogActions>
                </TabPanel>
                <TabPanel value={ curTab } index="register">
                    <DialogContent>
                        <TextField
                            id="username"
                            label="Username"
                        />
                        <br />
                        <TextField
                            id="email"
                            label="Email"
                        />
                        <br />
                        <TextField
                            id="password"
                            label="Password"
                            type="password"
                        />
                        < br/>
                        <TextField
                            id="passwordConfirm"
                            label="Confirm Password"
                            type="password"
                        />
                        <br />
                    </DialogContent>
                    <DialogActions>
                        <Button variant="text" label="Submit" onClick={ handleCreatePasswordAccount }>Create Account</Button>
                    </DialogActions>
                </TabPanel>
            </DialogTitle>
        </Dialog>
    )
}

const TabPanel = function({ children, value, index }) {
    return value === index && (
            <div>{children}</div>
        )
}


export default LoginDialogue;