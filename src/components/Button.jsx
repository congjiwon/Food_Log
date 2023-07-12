import React from "react";
import { styled } from "styled-components";
function Button({ name, right }) {
  return <Btn style={{ right: right }}>{name}</Btn>;
}

export default Button;

const Btn = styled.button`
  background-color: #9e6629;
  color: white;
  width: 100px;
  height: 40px;
  margin-top: 10px;
  position: absolute;
  bottom: 0;
  border-radius: 5px;
  margin: 5px;
  border: none;
  &:hover {
    cursor: pointer;
    background-color: #e6d0b9;
    color: black;
    border: none;
  }
`;
