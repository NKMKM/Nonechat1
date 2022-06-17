import React, { useState, useEffect } from "react";
import Logout from "./Logout";
import styled from "styled-components";
export default function Welcome() {
  const [userName, setUserName] = useState("");
  useEffect( () => {
    (async function(){
    setUserName(
      await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      ).username
    );
      })();
  }, []);
  return (
    <Container>
      <h1 class="noselect">
        Welcome to the club <span>{userName}!</span>
      </h1>
      <h3 class="noselect" >Please choose a chat to Start messaging.</h3>
    </Container>
return(
    <Logout />
  );
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: #4e0eff;
  }
 .noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
`;
