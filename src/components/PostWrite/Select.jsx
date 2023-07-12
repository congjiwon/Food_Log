import React from "react";
import { styled } from "styled-components";

function Select({ onChange, topic, value }) {
  return (
    <>
      <GradeMessage>{topic} 평가</GradeMessage>
      <select value={value} name="grade" onChange={onChange}>
        <option value="default">---</option>
        <option value="5">⭐️⭐️⭐️⭐️⭐️</option>
        <option value="4">⭐️⭐️⭐️⭐️</option>
        <option value="3">⭐️⭐️⭐️</option>
        <option value="2">⭐️⭐️</option>
        <option value="1">⭐️</option>
      </select>
    </>
  );
}

export default Select;

const GradeMessage = styled.label`
  /* padding: 10px; */
`;
