import React from "react";
import styled from "styled-components";
import Logo from "./components/Logo";
import ButtonGroup from "./components/Nav";
import "./App.css";

const AppWrapper = styled.div`
  text-align: center;
  padding: 20px 20px 0px 20px;
  background-color: #e6e6e6;
  min-height: 98vh;
  margin: 0px;
`;

function App() {
  return (
    <AppWrapper>
      <Logo />
      <ButtonGroup />
    </AppWrapper>
  );
}

export default App;
