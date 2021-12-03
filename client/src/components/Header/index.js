// import React, { useState } from 'react'
// import styled from 'styled-components'
// import Button from '@mui/material/Button'

// const Header = function() {
//     const [loggedIn, setLoggedIn] = useState(false);
    
//     const handleLogIn = () => {
//         // TODO: - implement with firebase
//         setLoggedIn(!loggedIn);
//     }

//     return (
//         <div>
//             <HeaderContainer>
                
//                 <HeaderLeft>
//                     <Logo>Teachback</Logo>
//                     <HeaderItemContainer>
//                         <HeaderItemLabel>Browse</HeaderItemLabel>
//                     </HeaderItemContainer>
//                 </HeaderLeft>
//                 <HeaderRight>
//                     <ButtonContainer>
//                         <LeftButton onClick={handleLogIn} variant="outlined">Login</LeftButton>
//                         <RightButton variant="contained">Register</RightButton>
//                     </ButtonContainer>
//                 </HeaderRight>
//             </HeaderContainer>
//         </div>
//     )
// }

// const HeaderContainer = styled.div`
//     display: flex;
//     justify-content: space-between;
//     flex-direction: row;
//     align-items: inline;
//     padding-left: 2em;
//     padding-right: 2em;
//     background-color: var(--dark-purple);
//     color: var(--light-blue);
// `

// const HeaderLeft = styled.div`
//     display: flex;
//     flex-direction: row;
//     flex: 0.5;
//     justify-content: flex-start;
//     align-items: stretch;
// `

// const HeaderRight = styled.div`
//     display: flex;
//     flex-direction: row;
//     flex: 0.5;
//     justify-content: flex-end;
//     align-items: center;
// `

// const Logo = styled.h1`
//     padding-right: 1em;
// `

// const HeaderItemContainer = styled.div`
//     display: flex;
//     align-items: center;
//     padding-left: 1em;
//     padding-right:1em;
//     :hover {
//         background-color: #5f478f;
//     }
// `

// const HeaderItemLabel = styled.h2` 
//     vertical-align: middle;
//     color: var(--light-green);
// `

// const ButtonContainer = styled.div`
    
// `

// const LeftButton = styled(Button)`
//     position: static;
//     z-index: 1;
//     background-color: var(--dark-purple) !important;
//     color: var(--light-green) !important;
//     border-color: var(--light-green) !important;
// `

// const RightButton = styled(Button)`
//     transform: translateX(-10px);
//     z-index: 0;
//     background-color: var(--light-green) !important;
//     color: var(--dark-purple) !important;
//     border-color: var(--light-green) !important;
// `


// const StyledHeader = styled(Header)``

// export default StyledHeader