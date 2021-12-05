import React from "react";
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Input from "@mui/material/Input";
import styled from "styled-components";
import { Button } from '@mui/material';


//TO-DO: Get container for comment section here
export default function CommentInput() {
    const [value, setValue] = React.useState('Controlled');

    const handleChange = (event) => {
        setValue(event.target.value);
    };


    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    id="outlined-multiline-static"
                    label="Multiline"
                    multiline
                    rows={4}
                    defaultValue="Default Value"
                    onChange={handleChange}
                    value={value}
                />
            </div>
            
            <div>
            <Button 
            onClick={() => {
               //TODO: implement comment submission
               
                // alert('clicked'), variant="contained";
            }}
            >
                Submit </Button>
            </div>
        </Box>
    );
}


