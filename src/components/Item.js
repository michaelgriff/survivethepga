import React from "react";
import styled from "styled-components";

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

const Number = styled.div`
  margin-left: 10px;

  @media screen and (max-width: 660px) {
    font-size: 13px;
  }
`;

const Index = styled.div`
  width: 20px;
  text-align: center;
  margin-right: 10px;
  margin-bottom: 10px;
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
`;

const RowContainer = styled.div`
  font-family: Kanit;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const NameContainer = styled.div`
  display: flex;
  align-items: center;
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

const PlayerPhoto = styled.img`
  border-radius: 50%;
  border: none;
  height: 40px;
  width: auto;
  margin-right: ${(props) => (props.margin ? "10px" : "none")};

  @media screen and (max-width: 660px) {
    height: 30px;
  }
`;

const Item = ({
  index,
  name,
  number,
  color,
  playerName,
  playerPhoto,
  tournamentName,
  result,
}) => {
  console.log(name);
  return (
    <RowContainer>
      {number ? <Index>{index}</Index> : null}
      <ItemContainer>
        <NameContainer>
          {tournamentName ? (
            <>
              <PlayerPhoto margin src={playerPhoto} alt={`${playerName}`} />
              <PlayerName history>{playerName}</PlayerName>
            </>
          ) : (
            <>
              <Circle color={color}>{name.charAt(0).toUpperCase()}</Circle>
              <Name>{name}</Name>
            </>
          )}
        </NameContainer>
        {number ? (
          <Number>{number.toLocaleString()}</Number>
        ) : tournamentName ? (
          <NameContainer>
            <PlayerName noMargin>{tournamentName}</PlayerName>
            <Number>{result ? result.toLocaleString() : "TBD"}</Number>
          </NameContainer>
        ) : (
          <NameContainer>
            <PlayerName>{playerName}</PlayerName>
            <PlayerPhoto src={playerPhoto} alt={`${playerName}`} />
          </NameContainer>
        )}
      </ItemContainer>
    </RowContainer>
  );
};

export default Item;
