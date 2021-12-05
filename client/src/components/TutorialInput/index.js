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

  const toggleSubmit = (props) => {
    setSubmit(!submit);
  };


  const [category, setCategory] = React.useState('');

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  return (
    <MainContainer>

      <TopContainer>

        <TitleContainer>
          <Input sx={{ width: 300, backgroundColor: 'white' }} placeholder="Title..." />
        </TitleContainer>

        <CategoryContainer>
        <Box sx={{ width: 300 }}>
          <FormControl sx={{ width: 300, backgroundColor: "white", color: "#94ECBE" }}>
            <InputLabel sx={{ color: "black" }} id="demo-simple-select-label">Category</InputLabel>
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

      <MiddleTitleContainer>
            <MiddleLeftContainer>
                <h1>Write Here</h1>
            </MiddleLeftContainer>

            <MiddleRightContainer>
                <h1>Preview</h1>
            </MiddleRightContainer>
      </MiddleTitleContainer>

      <MiddleContainer>
          <LeftContainer>
          <TextField
          sx= {{fontSize: "20px"}}
          multiline
          name="Input"
          value={body}
          rows={40}
          onChange={handleChange}
          className={className}
        />
          </LeftContainer>
          <RightContainer>
              <MarkdownContainer >
                <ReactMarkdown children={body} remarkPlugins={[remarkGFM]} />
             </MarkdownContainer>

          </RightContainer>
        </MiddleContainer>

        <ButtonContainer>
            <StepsContainer>
               <Button>1</Button>
               <Button>2</Button>
               <Button>3</Button>
               <Button>+</Button>
            </StepsContainer>
            <ButtonRight>
                <Button sx={{backgroundColor: "#94ECBE !important", color: "#2D2244 !important", border: "1px solid #2D2244 !important"}} variant="contained" onClick={toggleSubmit} children="Submit" 
                />
            </ButtonRight>
        </ButtonContainer>
      
    </MainContainer>
  );
}

const StyledTutorialInput = styled(TutorialInput)`
  /* width: 100vw; */
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
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-family: Montserrat;

`

const MiddleLeftContainer = styled.div`
    display: flex;
    justify-content: center;
    flex: 0.5;
`
const MiddleRightContainer = styled.div`
    display: flex;
    justify-content: center;
    flex: 0.5;
`

const MiddleContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 10px;
    flex: 0.6;
    
 
`;

const LeftContainer = styled.div`
    flex-direction: column;
    display: flex;
    flex: 0.5;
    margin: 10px;
`

const RightContainer = styled.div`
    flex-direction: column;
    display: flex;
    flex: 0.5;
    margin: 10px;
    border: 1px solid #c4c4c4;
    border-radius: 4px;

    :hover {
        border-color: #111;
    }

`

const ButtonContainer = styled.div`
display: flex;
justify-content: flex-end;


`

const StepsContainer = styled.div`
    display: flex;
    flex: 0.5;
    margin-left: 10px;

    > button {
        width: 25px;
        height: 60px;
        border-radius: 50%;
        background-color: #fff;
        color: #111;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        margin: 10px;

        :hover {
            background-color: var(--light-green);
            color: var(--dark-purple);
        }
    }
`
const ButtonRight = styled.div`
    display: flex;
    justify-content: flex-end;
    flex: 0.5;
    margin: 10px;

    > button {
    border: 1px solid #94ecbe;
    margin-bottom: 15px !important;
    background-color: #fff;
    color: var(--light-green);
    border-color: var(--light-green);
    margin: 10px;
    :hover {
        border: none;
        background-color: #2D2244;

    }

  }
`

const MarkdownContainer = styled.div`
    margin-left: 10px;
`



export default StyledTutorialInput;
