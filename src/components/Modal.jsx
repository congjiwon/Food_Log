import React from "react";
import { styled } from "styled-components";
function Modal(props) {
  const { closeModal, deleteCancel } = props;
  return (
    <>
      {
        <ModalOuterBox>
          <ModalInnerBox>
            <p>삭제하시겠습니까?</p>
            <ModalBtnArea>
              <Btn onClick={closeModal}> 네 </Btn>
              <Btn onClick={deleteCancel}>아니요</Btn>
            </ModalBtnArea>
          </ModalInnerBox>
        </ModalOuterBox>
      }
    </>
  );
}

export default Modal;
const ModalBtnArea = styled.div`
  position: relative;
  text-align: right;
  margin-top: 90px;
`;
const ModalOuterBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalInnerBox = styled.div`
  background-color: #fff;
  padding: 20px;
  width: 30%;
  height: 25%;
  border-radius: 12px;
`;

const Btn = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 8px;
  background-color: #97919171;
  color: rgb(0, 0, 0);
  width: 80px;
  height: 40px;
  margin-right: 10px;
  &:hover {
    background-color: #979191f1;
    color: white;
    border: none;
  }
`;
