import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { history, users } from "../assets/data";

const Circle = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.color};
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 25px;
`;

const Name = styled.div`
  flex-grow: 1;
  @media screen and (max-width: 660px) {
    font-size: 13px;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 20px;
  width: 100%;
  text-align: center;
`;

const RowContainer = styled.div`
  font-family: Kanit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%; /* Adjust the max-width based on your design */
  margin: 0 auto;

  @media screen and (max-width: 660px) {
    width: 90%;
  }
`;

const NameContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Number = styled.div`
  margin-left: 10px;

  @media screen and (max-width: 660px) {
    font-size: 13px;
  }
`;

const PlayerName = styled.div`
  color: ${(props) => (props.history ? "#000" : "#5c5c5c")};
  margin-right: ${(props) => (props.noMargin ? "0" : "10px")};
  margin-top: ${(props) => (props.noMargin ? "1px" : "2px")};
  font-size: ${(props) => (props.noMargin ? "10px" : "16px")};

  @media screen and (max-width: 660px) {
    font-size: 10px;
  }
`;

const PlayerSearch = ({ selectedPlayer }) => {
  const [participants, setParticipants] = useState([]);
  useEffect(() => {
    const partArr = [];
    for (const user of users) {
      if (
        history[user.name].some((val) => val.playerName === selectedPlayer.name)
      ) {
        const historyObj = history[user.name].filter(
          (item) => item.playerName === selectedPlayer.name
        )[0];
        partArr.push({
          ...user,
          ...historyObj,
        });
      }
    }
    setParticipants([...partArr]);
  }, [selectedPlayer]);
  return (
    <>
      {/* <ItemListContainer> */}
      <RowContainer>
        {participants.map((user) => {
          return (
            <ItemContainer>
              <NameContainer>
                <>
                  <Circle color={`${user.color}`}>
                    {user.name.charAt(0).toUpperCase()}
                  </Circle>
                  <Name>{user.name}</Name>
                </>
              </NameContainer>
              <NameContainer>
                <PlayerName noMargin>{user.tournamentName}</PlayerName>
                <Number>{user.result.toLocaleString()}</Number>
              </NameContainer>
            </ItemContainer>
          );
        })}
      </RowContainer>
      {/* </ItemListContainer> */}
    </>
  );
};

export default PlayerSearch;
