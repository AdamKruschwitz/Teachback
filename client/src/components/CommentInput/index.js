import React from "react";
import styled from "styled-components";
import TextField from '@mui/material/TextField'
// import Box from '@mui/material/Box'
// import Input from "@mui/material/Input";
// import InputAdornment from "@mui/material/InputAdornment";

//TO-DO: Get container for comment section here
export deafult function FormPropsTextFields() {
    return (
        <Box 
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch'},
        }}
        noValidate
        autoComplete="off"
        >
        <div>
            <Textfield 
                required
                id="filled-required"
                label="Required"
                defaultValue="This is a test"
                variant="filled"
                />
            <TextField
            disabled
            id="filled-disabled"
            label="Disabled"
            defaultValue="This is a test"
            variant="filled"
            />
            <TextField
            id="filled-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="filled"
            />
            

        </div>

// const InputComponent = ({ placeholder, type }) => {
//     return (
//         <div>
//             <InputContainer
//                 placeholder={placeholder}
//                 startAdornment={
//                     type === "Search" ? (
//                         <InputAdornment position="start">

//                         </InputAdornment>
//                     ) : (
//                         ""
//                     )
//                 }
//                 />
//         </div>
//     );
// };

export default InputComponent;