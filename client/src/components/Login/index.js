import React, { useState } from 'react';
import styled from 'styled-components';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import TextField from '@mui/material/TextField';
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'




const LoginDialogue = function() {
    const [open, setOpen] = useState(true); // TODO - change to false by default
    const [curTab, setCurTab] = useState('login');


    const handleOnClose = () => {
        setOpen(false);
    }

    const handleTabChange = (e, value) => {
        setCurTab(value);
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
                    Login Time!
                </TabPanel>
                <TabPanel value={ curTab } index="register">
                    Register Time!
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