import React, { useState } from "react";
import styled from "styled-components";
import { players } from "../assets/data";

const SearchBar = styled.input`
  width: 38%; /* Adjust the max-width based on your design */
  margin: 0 auto 20px;

  @media screen and (max-width: 660px) {
    width: 80%;
  }
  padding: 8px 12px;
  border-radius: 6px;
  border: 2px solid #ccc;
  font-family: Kanit;
`;

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
`;

const RowContainer = styled.div`
  font-family: Kanit;
  display: flex;
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

const PlayerSearch = () => {
  const [search, setSearch] = useState("");
  const [selection, setSelection] = useState("");

  return (
    <>
      <SearchBar
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <RowContainer>
        <ItemContainer>
          <NameContainer>
            <>
              <Circle color={"#545454"}>J</Circle>
              <Name>michaelgriff</Name>
            </>
          </NameContainer>
        </ItemContainer>
      </RowContainer>
    </>
  );
};

export default PlayerSearch;
