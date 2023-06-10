import styled from 'styled-components'
//import React from 'react';
//import './wrapper.css';

/*
// const Wrapper = styled.main.attrs(props => ({
//   role: !props.as ? 'main' : undefined,
//   id: !props.as ? 'main-content' : undefined,
// 
*/

const Wrapper = styled.main`
  position: relative;
  border-radius: 5px;
  width: 80%;
  max-width: 770px;
  word-wrap: break-word;
  background-color: var(--color-wrapperBackground);
  margin: 0px auto 30px auto;
  top: 30px;
  padding: 50px;
  box-shadow: 0 0 0 0, 0 6px 12px var(--color-wrapperShadow);

  @media (max-width: 780px) {
    width: 100%;
    padding: 25px;
  }
`

// const Wrapper = ({children, role, id}) => {
//   return (
//     <main className="wrapper" {...role} {...id}>
//       {children}
//     </main>
//   )
// }

export default Wrapper
