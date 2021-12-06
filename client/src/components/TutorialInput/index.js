import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import remarkGFM from "remark-gfm";
import  { Redirect } from 'react-router-dom'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Input} from "@mui/material";
import { useGlobalContext } from "../../utils/GlobalContext"
import { CREATE_TUTORIAL } from "../../utils/mutations"
import { QUERY_TUTORIALS } from "../../utils/queries";
import { useMutation, useQuery } from '@apollo/client';

function TutorialInput({ className }) {
  const [body, setBody] = useState("");
  const [submit, setSubmit] = useState(false);
  const [steps, setSteps] = useState([""]);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  

  const [state,  dispatch] = useGlobalContext()

  // const [markdown, setMarkdown] = useState("");
  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "Input") {
      setBody(value);
      console.log(body);
      // setMarkdown(generateMarkdown(value))
    }
  };

  const handleNewStep = () => {
    // save the body state to the current step and steps
    const stepsBeforeCurrent = steps.slice(0, currentStepIndex)
    const stepsAfterCurrent = steps.slice(currentStepIndex+1)
    const newSteps = stepsBeforeCurrent.concat(body, stepsAfterCurrent)
    
    // add an empty string to the steps state
    newSteps.push("")
    setSteps(newSteps)
   
    // then update currentstep 
    setCurrentStepIndex(newSteps.length-1)

    // set body to be equal to empty string
    setBody("")
    console.log(newSteps)
  };

  const handleSelectStep = (index) => {
    // Saved the current step
    const stepsBeforeCurrent = steps.slice(0, currentStepIndex)
    const stepsAfterCurrent = steps.slice(currentStepIndex+1)
    const newSteps = stepsBeforeCurrent.concat(body, stepsAfterCurrent)

    setCurrentStepIndex(index)
    setSteps(newSteps)
    setBody(steps[index])
  };

  const [createTutorial, { error }] = useMutation(CREATE_TUTORIAL);

  const toggleSubmit = (props) => {
    setSubmit(!submit);

    const newTutorialObject = {
        Name: title,
        Author: state.user.token,
        Steps: steps,
        Category: category._id,
        Tags: tags
      }

    //   if(!this.auth.getCurrentUser()){
    //     return;
    // }

      try {
        const { data } = createTutorial({
          variables: { ...state },
        });
  
        // TODO: redirect to profile page
        <Redirect to='/Profile'  />

      } catch (err) {
        console.error(err);
      }
  };


  const [category, setCategory] = React.useState('');

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  const [title, setTitle] = React.useState('');

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const [tags, setTags] = React.useState('');

  const handleTags = (event) => {
      setTags(event.target.value)
  }

  return (
    <MainContainer>

      <TopContainer>

        <TitleContainer>
          <Input sx={{ width: 300, backgroundColor: 'white' }} placeholder="Title..." value={title} onChange={handleTitle}  />
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
          <Input sx={{ width: 300, backgroundColor: 'white' }} placeholder="Tags..." value={tags} onChange={handleTags} />
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
               {steps.map((_stepBody, stepIndex) => {
                   return (<Button onClick={ () => handleSelectStep(stepIndex)} key={stepIndex}>{stepIndex+1}</Button>)
               })}
               <Button onClick={handleNewStep}>+</Button>
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
