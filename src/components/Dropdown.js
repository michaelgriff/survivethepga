import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  font-family: Kanit;
  margin-bottom: 20px;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #e6e6e6;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: auto;
  max-height: 150px;
  width: 250px; /* Set your fixed width */
  z-index: 1;
`;

const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: ease-in-out 0.2s;
  &:hover {
    background-color: #ddd;
  }
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
  text-align: left;
  @media screen and (max-width: 660px) {
    font-size: 13px;
  }
`;

const PlayerPhoto = styled.img`
  border-radius: 50%;
  border: none;
  height: 35px;
  width: auto;
  margin-right: ${(props) => (props.margin ? "10px" : "none")};

  @media screen and (max-width: 660px) {
    height: 30px;
  }
`;

const Dropdown = ({ options, selectedOption, setSelectedOption, isSearch }) => {
  function compareByName(a, b) {
    const aList = a.name.split(" ");
    const bList = b.name.split(" ");
    return aList[aList.length - 1].localeCompare(bList[bList.length - 1]);
  }
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleItemClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownItem onClick={() => setIsOpen(!isOpen)}>
        {isSearch ? (
          <PlayerPhoto
            src={selectedOption.photo}
            alt={`${selectedOption.name}`}
            margin={true}
          />
        ) : (
          <Circle color={selectedOption.color}>
            {selectedOption
              ? selectedOption.name.charAt(0).toUpperCase()
              : null}
          </Circle>
        )}

        <Name>{selectedOption.name}</Name>
      </DropdownItem>
      {isOpen && (
        <DropdownMenu>
          {options.sort(compareByName).map((option, index) => (
            <DropdownItem key={index} onClick={() => handleItemClick(option)}>
              {isSearch ? (
                <PlayerPhoto src={option.photo} alt={`${option.name}`} margin />
              ) : (
                <Circle color={selectedOption.color}>
                  {option ? option.name.charAt(0).toUpperCase() : null}
                </Circle>
              )}
              <Name>{option.name}</Name>
            </DropdownItem>
          ))}
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
