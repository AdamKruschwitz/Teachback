import React, { useState }from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styled from "styled-components";
import ReactMarkdown from 'react-markdown';
import remarkGFM from 'remark-gfm';
import { Select } from '@mui/material';
import { Input } from '@mui/material';





function TutorialInput({ className }) {
    const [body, setBody] = useState("");
    const [preview, setPreview] = useState(false);
    const [submit, setSubmit] = useState(false);
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

    const toggleSubmit = (props) => {
        setSubmit(!submit)
    }


    if(preview)
    return (
        <div>
            <Button onClick={togglePreview} children="Preview" />
            <ReactMarkdown remarkPlugins={[remarkGFM]}>{body}</ReactMarkdown>
        </div>
    );

    return (
        <MainContainer>
            <TopContainer>
                <TitleContainer>
                    <Input placeholder="Title..." />
                </TitleContainer>
                <CategoryContainer>
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value='23'
                    label="Age"
                    onChange={handleChange}
                >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>
                </CategoryContainer>
                <TagContainer>
                    <Input placeholder="Tags..." />
                </TagContainer>
                
            </TopContainer>
        <MainBody>
        <TextField 
            multiline
            name="Input"
            value={body}
            rows={15}
            onChange={handleChange}
            className={className}
        />
        <Button variant="contained" onClick={togglePreview} children="Preview" />
        <Button variant="contained" onClick={toggleSubmit} children="Submit" />
        </MainBody>
        </MainContainer>
    )
}


const StyledTutorialInput = styled(TutorialInput)`
    width: 100vw;
    border-radius: 4px #2D2244;
    margin-left: 20px;
`
const MainBody = styled.div`

    > button {
        border: 3px solid #94ECBE !important;
        margin-bottom: 15px !important;
        background-color: #fff !important;
        color: var(--light-green) !important;
        border-color: var(--light-green) !important;
    } 

`
const MainContainer = styled.div`
`

const TopContainer = styled.div`
    display: flex;
`

const TitleContainer = styled.div`
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: flex;
    flex: 0.3;

    > input {
        width: 300px;
    }
`
const CategoryContainer = styled.div`
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: flex;
    flex: 0.3;
`
const TagContainer = styled.div`
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: flex;
    flex: 0.3;
`

const MenuItem = styled.div``

const FormControl = styled.div``

const InputLabel = styled.div`
    
`



export default StyledTutorialInput;
