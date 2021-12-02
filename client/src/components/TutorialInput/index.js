import React, { useState }from "react";
import TextField from "@mui/material/TextField";
import styled from "styled-components";



function TutorialInput({ className }) {
    const [body, setBody] = useState("");
    const handleChange = (event) => {
        const { name, value } = event.target;

        if(name === "Input") {
            setBody(value);
            console.log(body);
        }
    }
    return (
        <TextField 
            name="Input"
            className={ className } 
            placeholder="Write your tutorial here..."
            multiline 
            onChange={handleChange}
        />
    );
}
const StyledTutorialInput = styled(TutorialInput)`
    height: 100vh !important;
    width: 100vw;
`



export default StyledTutorialInput;