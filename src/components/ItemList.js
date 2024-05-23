import React from "react";
import styled from "styled-components";

import Item from "./Item";

const ItemListContainer = styled.div`
  width: 40%; /* Adjust the max-width based on your design */
  margin: 0 auto;

  @media screen and (max-width: 660px) {
    width: 90%;
  }
`;

const TournamentName = styled.div`
  font-size: 35px;
  width: 100%;
  text-align: center;
  font-family: Kanit;

  @media screen and (max-width: 660px) {
    font-size: 22px;
  }
`;

const TournamentSubHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const TournamentSubHeadingText = styled.div`
  font-size: 17px;
  font-family: Kanit;
  margin-bottom: 20px;
  color: #5c5c5c;

  @media screen and (max-width: 660px) {
    font-size: 12px;
  }
`;

const ItemList = ({ data }) => {
  return (
    <>
      {data[0].playerName && data[0].name ? (
        <>
          <TournamentName>Charles Schwab Challenge</TournamentName>
          <TournamentSubHeading>
            <TournamentSubHeadingText>
              Colonial CC • May 23-26, 2024
            </TournamentSubHeadingText>
          </TournamentSubHeading>
        </>
      ) : null}
      <ItemListContainer>
        {data[0].number
          ? data
              .sort((a, b) => a.number - b.number || a.number)
              .reverse()
              .map((item, index) => (
                <Item
                  key={index}
                  index={index + 1}
                  name={item.name}
                  number={item.number}
                  color={item.color}
                />
              ))
          : data[0].isCurrent
          ? data
              .sort((a, b) => ("" + a.playerName).localeCompare(b.playerName))
              .map((item, index) => (
                <Item
                  key={index}
                  index={index + 1}
                  name={item.name}
                  playerName={item.playerName}
                  playerPhoto={item.playerPhoto}
                  color={item.color}
                />
              ))
          : data.map((item, index) => (
              <Item
                key={index}
                index={index + 1}
                playerName={item.playerName}
                playerPhoto={item.playerPhoto}
                tournamentName={item.tournamentName}
                result={item.result}
              />
            ))}
      </ItemListContainer>
    </>
  );
};

export default ItemList;
