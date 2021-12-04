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




const LoginDialogue = function() {
    const [open, setOpen] = useState(true); // TODO - change to false by default
    const [curTab, setCurTab] = useState('login');


    const handleOnClose = () => {
        setOpen(false);
    }

    const handleTabChange = (e, value) => {
        setCurTab(value);
    }

    const handlePasswordLogin = (e, authContent) => {
        // TODO
    }

    const handleCreatePasswordAccount = (e, registerContent) => {
        // TODO
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
                        {/* Username field */}
                        <TextField
                            id="username"
                            label="Username"
                        />
                        {/* Password field */}
                        <TextField
                            id="password"
                            label="Password"
                            type="password"
                        />
                        {/* Github OAuth button */}
                        {/* Google OAuth button */}
                    </DialogContent>
                    {/* Submit button */}
                    <DialogActions>
                        <Button variant="text" label="Submit" onClick={ handlePasswordLogin }>Log In</Button>
                    </DialogActions>
                </TabPanel>
                <TabPanel value={ curTab } index="register">
                    <DialogContent>
                        {/* Username field */}
                        {/* Email field */}
                        {/* Password field */}
                        {/* Password confirmation */}
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