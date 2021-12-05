import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import remarkGFM from "remark-gfm";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Input} from "@mui/material";

function TutorialInput({ className }) {
  const [body, setBody] = useState("");
  const [preview, setPreview] = useState(false);
  const [submit, setSubmit] = useState(false);
  // const [markdown, setMarkdown] = useState("");
  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "Input") {
      setBody(value);
      console.log(body);
      // setMarkdown(generateMarkdown(value))
    }
  };
  const togglePreview = (event) => {
    setPreview(!preview);
  };

  const toggleSubmit = (props) => {
    setSubmit(!submit);
  };


  const [category, setCategory] = React.useState('');

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };


  if (preview)
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
          <Input sx={{ width: 300, backgroundColor: 'white' }} placeholder="Title..." />
        </TitleContainer>
        <CategoryContainer>
        <Box sx={{ width: 300 }}>
          <FormControl sx={{ width: 300, backgroundColor: "white", color: "#94ECBE" }}>
            <InputLabel sx={{ color: "#94ECBE" }} id="demo-simple-select-label">Category</InputLabel>
            <Select
              fullWidth
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Category"
              onChange={handleCategory}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          </Box>

        </CategoryContainer>
        <TagContainer>
          <Input sx={{ width: 300, backgroundColor: 'white' }} placeholder="Tags..." />
        </TagContainer>
      </TopContainer>
      <MiddleContainer>
          <LeftContainer>
          <TextField
          multiline
          name="Input"
          value={body}
          rows={15}
          onChange={handleChange}
          className={className}
        />
          </LeftContainer>
          <hr />
          <RightContainer>
        <TextField
          multiline
          name="Input"
          value={body}
          rows={15}
          onChange={handleChange}
          className={className}
        />
        </RightContainer>
       <MiddleTitleContainer>
           <MiddleLeftContainer>
                <h1>Write Here</h1>
           </MiddleLeftContainer>
           <MiddleRightContainer>
           <h1>Preview</h1>
           </MiddleRightContainer>
       </MiddleTitleContainer>
      </MiddleContainer>
      <Button
          variant="contained"
          onClick={togglePreview}
          children="Preview"
        />
        <Button variant="contained" onClick={toggleSubmit} children="Submit" />
    </MainContainer>
  );
}

const StyledTutorialInput = styled(TutorialInput)`
  width: 100vw;
  border-radius: 4px #2d2244;
  margin-left: 20px;
`;

const MainContainer = styled.div`
    display: flex;
    width: 100vw;
    flex-direction: column;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--dark-purple);

`;

const TitleContainer = styled.div`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
  flex: 0.3;


  > input {
    width: 300px;

  }
`;
const CategoryContainer = styled.div`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
  flex: 0.3;
  margin: 20px;

`;
const TagContainer = styled.div`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
  flex: 0.3;
`;

const MiddleTitleContainer = styled.div`
`

const MiddleLeftContainer = styled.div`
`
const MiddleRightContainer = styled.div`
`

const MiddleContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 10px;
    flex: 0.6;
    
 
`;

const LeftContainer = styled.div`
    /* flex-direction: column; */
    display: flex;
    flex: 0.5;
`

const RightContainer = styled.div`
    /* flex-direction: column; */
    display: flex;
    flex: 0.5;

`


// > button {
//     border: 3px solid #94ecbe !important;
//     margin-bottom: 15px !important;
//     background-color: #fff !important;
//     color: var(--light-green) !important;
//     border-color: var(--light-green) !important;
//   }




export default StyledTutorialInput;
