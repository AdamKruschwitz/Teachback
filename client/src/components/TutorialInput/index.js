import React, { useState }from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styled from "styled-components";
import ReactMarkdown from 'react-markdown';
import remarkGFM from 'remark-gfm';



function TutorialInput({ className }) {
    const [body, setBody] = useState("");
    const [preview, setPreview] = useState(false);
    // const [markdown, setMarkdown] = useState("");
    const handleChange = (event) => {
        const { name, value } = event.target;

        if(name === "Input") {
            setBody(value);
            console.log(body);
            // setMarkdown(generateMarkdown(value))
        }
    }
    const togglePreview = (event) => {
        setPreview(!preview);
    }

    if(preview)
    return (
        <div>
            <Button onClick={togglePreview} children="Preview" />
            <ReactMarkdown remarkPlugins={[remarkGFM]}>{body}</ReactMarkdown>
        </div>
    );

    return (
        <div>
        <Button onClick={togglePreview} children="Preview" />
        <TextField 
            multiline
            name="Input"
            value={body}
            rows={10}
            onChange={handleChange}
            className={className}
            />
        </div>
    )
}
const StyledTutorialInput = styled(TutorialInput)`
    width: 100vw;
`



export default StyledTutorialInput;