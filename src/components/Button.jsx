import React from "react";
import { styled } from "styled-components";
function Button(props) {
  return <Btn onClick={props.onClick}>{props.name}</Btn>;
}

export default Button;

const Btn = styled.button`
  background-color: #97919171;
  color: black;
  width: 80px;
  height: 40px;
  margin-top: 10px;
  margin-left: 10px;
  border: none;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background-color: #979191f1;
    color: white;
    border: none;
  }
`;
