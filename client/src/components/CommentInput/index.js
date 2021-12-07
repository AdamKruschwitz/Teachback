import React from "react";
import TextField from '@mui/material/TextField'
import Input from "@mui/material/Input";
import styled from "styled-components";
import Button from '@mui/material/Button';

//TO-DO: Get container for comment section here
export default function CommentInput() {
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div>
            <TextField
                id="textfield"
                label="Enter Comment here"
                multiline
                defaultValue="Default Value"
                onChange={handleChange}
                value={value}
                TextField style={{ width: '95%' }}
            />
            <Button onClick={() => {

            }}> Submit</Button>
        </div>

    )
}

