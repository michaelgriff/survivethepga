import React, { useState } from "react";
import styled from "styled-components";
import ItemList from "./ItemList";
import { users, currentPicks, history } from "../assets/data"; // Import your data file
import Dropdown from "./Dropdown";

const ButtonGroupWrapper = styled.div`
  font-family: Kanit;
  font-weight: 300;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 20px auto;
  width: 70%;

  @media screen and (max-width: 660px) {
    width: 100%;
  }
`;

const Button = styled.div`
  padding: 10px 0;
  font-size: 20px;
  cursor: ${(props) => (props.active ? "default" : "pointer")};
  border-bottom: ${(props) =>
    props.active ? "3px solid black" : "3px solid transparent;"};
  color: black;

  &:hover {
    transition: ease-in-out 0.2s;
  }

  @media screen and (max-width: 660px) {
    font-size: 16px;
  }
`;

function ButtonGroup() {
  const [activeButton, setActiveButton] = useState("componentA");
  const [selectedOption, setSelectedOption] = useState(
    users.map((user) => {
      return { name: user.name, color: user.color };
    })[0]
  );

  const handleButtonClick = (component) => {
    setActiveButton(component);
  };

  return (
    <div>
      <ButtonGroupWrapper>
        <Button
          onClick={() => handleButtonClick("componentA")}
          active={activeButton === "componentA"}
        >
          Standings
        </Button>
        <Button
          onClick={() => handleButtonClick("componentB")}
          active={activeButton === "componentB"}
        >
          This Week
        </Button>
        <Button
          onClick={() => handleButtonClick("componentC")}
          active={activeButton === "componentC"}
        >
          History
        </Button>
      </ButtonGroupWrapper>

      {/* Render the active component based on the button click */}
      {activeButton === "componentA" && <ItemList data={users} />}
      {activeButton === "componentB" && <ItemList data={currentPicks} />}
      {activeButton === "componentC" && (
        <>
          <Dropdown
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            options={users.map((user) => {
              return { name: user.name, color: user.color };
            })}
          />
          <ItemList data={history[selectedOption.name]} />
        </>
      )}
    </div>
  );
}

export default ButtonGroup;
