import React, { useState } from 'react';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import TextField from '@mui/material/TextField';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';

import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';

import { auth, GithubProvider, GoogleProvider } from "../../firebase";

import { useGlobalContext } from '../../utils/GlobalContext';
import { TOGGLE_LOGIN_DIALOG, GITHUB_LOGIN, GOOGLE_LOGIN, PASSWORD_LOGIN } from '../../utils/actions';

const LoginDialogue = function() {

    const [emailValue, setEmailValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const [passwordConfirmValue, setPasswordConfirmValue] = useState('')

    const [loginEmailValue, setLoginEmailValue] = useState('')
    const [loginPasswordValue, setLoginPasswordValue] = useState('')


    const [curTab, setCurTab] = useState('login');
    const [state, dispatch] = useGlobalContext();
  
    const handleOnClose = () => {
        dispatch({ type: TOGGLE_LOGIN_DIALOG });
    }

    const handleTabChange = (e, value) => {
        e.preventDefault();
        setCurTab(value);
    }

    async function handlePasswordLogin(e) {
        e.preventDefault();
       
        if (loginPasswordValue == '') {
        alert('password field must not be empty');
        return;
        }
        if (loginEmailValue == '') {
            alert('enter your email');
            return;
            }
    
        try {
   
              const result = await auth.signInWithEmailAndPassword(loginEmailValue, loginPasswordValue)
              const token = result.user.refreshToken;
              const user = {
                  username: result.user.email,
                  email: result.user.email,
                  image: '',
                  toke: token
              }
              dispatch({type: PASSWORD_LOGIN, payload: user });
              dispatch({ type: TOGGLE_LOGIN_DIALOG });
        } catch {
          alert("Failed to sign in")
        }
    
    }

    const handleCreatePasswordAccount = async (e) => {
        e.preventDefault();
       
        if (passwordValue == '' || passwordConfirmValue == '') {
        alert('password field must not be empty');
        return;
        }
        if (passwordValue !== passwordConfirmValue) {
            alert('passwords do  not match');
        return;
        }
    
        try {

          const res = await auth.createUserWithEmailAndPassword(emailValue, passwordValue)
          console.log(res)
          if (res.user != undefined) {
              const result = await auth.signInWithEmailAndPassword(emailValue, passwordValue)

              const token = result.user.refreshToken;
              const user = {
                  username: result.user.email,
                  email: result.user.email,
                  image: '',
                  toke: token
              }
              dispatch({type: PASSWORD_LOGIN, payload: user });
              dispatch({ type: TOGGLE_LOGIN_DIALOG });
          }
        } catch {
          alert("Failed to create an account")
        }
    
      }
    
    const handleGoogleLogin = (e) => {
        e.preventDefault();
        auth.signInWithPopup(GoogleProvider)
            .then((result) => {
                const credential = result.credential;
                const token = credential.accessToken;
                const user = {
                    username: result.additionalUserInfo.username,
                    email: result.user.email,
                    image: result.user.photoURL,
                    token: token
                }
                dispatch({type: GOOGLE_LOGIN, payload: user });
                // TODO: graphql query sending user info.
            })
            .catch((error) => alert(error.message));
    }

    const handleGithubLogin = (e) => {
        e.preventDefault();
        auth.signInWithPopup(GithubProvider).then((result) => {
            const credential = result.credential;
            const token = credential.accessToken;
            console.log(result);
            alert(result);
            const user = {
                username: result.additionalUserInfo.username,
                email: result.user.email,
                image: result.user.photoURL,
                token: token
            }
            dispatch({ type: GITHUB_LOGIN, payload: user });
            // TODO: graphQL query sending user info.
        }).catch((error) => alert(error.message));
    }

    return (

        <Dialog open={ state.loginOpen } onClose={ handleOnClose }>
            <DialogTitle>
                <Tabs value={ curTab } onChange={ handleTabChange }>
                    <Tab label="Log In" value="login" />
                    <Tab label="Register" value="register" />
                </Tabs>
                <TabPanel value={ curTab } index="login">
                    <DialogContent>
                        <TextField sx={{margin: '10px'}}
                            value={loginEmailValue}
                            onChange={(event, object) => {
                                setLoginEmailValue(event.target.value)
                            }}
                            id="email"
                            label="email"
                        />
                        <br />
                        <TextField sx={{margin: '10px'}}
                            value={loginPasswordValue}
                            onChange={(event, object) => {
                                setLoginPasswordValue(event.target.value)
                            }}
                            id="password"
                            label="Password"
                            type="password"
                        />
                        <br />
                        {/* Github OAuth button */}
                        <Button sx={{margin: '10px'}} id="github-auth" variant="contained" onClick={ handleGithubLogin }>
                            <GitHubIcon />
                        </Button>
                        {/* Google OAuth button */}
                        <Button sx={{margin: '10px'}} id="google-auth" variant="contained" onClick={ handleGoogleLogin }>
                            <GoogleIcon />
                        </Button>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="text" label="Submit" onClick={ handlePasswordLogin }>Log In</Button>
                    </DialogActions>
                </TabPanel>
                <TabPanel value={ curTab } index="register">
                    <DialogContent>
                        {/* <TextField sx={{margin: '10px'}}
                            ref={usernameRef}
                            id="username"
                            label="Username"
                        /> */}
                        <br />
                        <TextField sx={{margin: '10px'}}
                            required
                            id="email"
                            onChange={(event, object) => {
                                setEmailValue(event.target.value)
                            }}
                            value={emailValue}
                            label="Email"
                        />
                        <br />
                        <TextField sx={{margin: '10px'}}
                            required
                            id="password"
                            onChange={(event, object) => {
                                setPasswordValue(event.target.value)
                            }}
                            value={passwordValue}
                            label="Password"
                            type="password"
                        />
                        < br/>
                        <TextField sx={{margin: '10px'}}
                            required
                            id="passwordConfirm"
                            onChange={(event, object) => {
                                setPasswordConfirmValue(event.target.value)
                            }}
                            value={passwordConfirmValue}
                            label="Confirm Password"
                            type="password"
                        />
                        <br />
                    </DialogContent>
                    <DialogActions>
                        <Button variant="text" label="Submit" onClick={ handleCreatePasswordAccount }>Create Account</Button>
                    </DialogActions>
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