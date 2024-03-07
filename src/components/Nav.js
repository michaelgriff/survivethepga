import React, { useState } from "react";
import styled from "styled-components";
import ItemList from "./ItemList";
import { users, currentPicks, history, players } from "../assets/data"; // Import your data file
import Dropdown from "./Dropdown";
import PlayerSearch from "./PlayerSearch";

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
  const [selectedPlayer, setSelectedPlayer] = useState(
    Object.values(players)
      .sort((a, b) =>
        a.playerName.split(" ")[1].localeCompare(b.playerName.split(" ")[1])
      )
      .map((player) => {
        return { name: player.playerName, photo: player.playerPhoto };
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
        <Button
          onClick={() => handleButtonClick("componentD")}
          active={activeButton === "componentD"}
        >
          Players
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
      {activeButton === "componentD" && (
        <>
          <Dropdown
            selectedOption={selectedPlayer}
            setSelectedOption={setSelectedPlayer}
            isSearch={true}
            options={Object.values(players).map((player) => {
              return { name: player.playerName, photo: player.playerPhoto };
            })}
          />
          <PlayerSearch selectedPlayer={selectedPlayer} />
        </>
      )}
    </div>
  );
}

export default ButtonGroup;
