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

import { auth, GoogleProvider } from "../../firebase";

const LoginDialogue = function() {
    const [open, setOpen] = useState(true); // TODO - change to false by default
    const [curTab, setCurTab] = useState('login');


    const handleOnClose = () => {
        setOpen(false);
    }

    const handleTabChange = (e, value) => {
        e.preventDefault();
        setCurTab(value);
    }

    const handlePasswordLogin = (e, authContent) => {
        // TODO
    }

    const handleCreatePasswordAccount = (e, registerContent) => {
        // TODO
    }

    const handleGoogleLogin = (e) => {
        e.preventDefault();
        auth.signInWithPopup(GoogleProvider).catch((error) => alert(error.message));
    }

    const handleGithubLogin = (e) => {
        e.preventDefault();
        // TODO: login with github
    }

    return (
        // Probably remove padding on the dialogue to allow tabs to extend to the end of the div
        <Dialog open={ open } onClose={ handleOnClose }>
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