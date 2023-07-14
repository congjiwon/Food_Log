import React from "react";
import { styled } from "styled-components";
import useInput from "../hooks/useInput";
import { useNavigate } from "react-router-dom";

function Modal(props) {
  const { closeModal, cancel, children, correctPassword } = props;
  const [password, setPasswordHandle] = useInput();
  const navigate = useNavigate();

  const checkPasswordHandle = () => {
    if (password == correctPassword) {
      closeModal();
    } else {
      alert("비밀번호가 틀립니다");
    }
  };
  return (
    <>
      {
        <ModalOuterBox>
          <ModalInnerBox>
            <p>{children} 비밀번호를 입력해주세요</p>
            <PasswordInput
              type="password"
              value={password}
              onChange={setPasswordHandle}
              placeholder="비밀번호 입력"
            ></PasswordInput>
            <ModalBtnArea>
              <Btn onClick={checkPasswordHandle}> 입력 </Btn>
              <Btn onClick={cancel}>취소</Btn>
            </ModalBtnArea>
          </ModalInnerBox>
        </ModalOuterBox>
      }
    </>
  );
}

export default Modal;

const PasswordInput = styled.input`
  width: 230px;
  height: 50px;
  padding: 10px;
  border: 0.5px solid #dcdcdc;
  font-size: 18px;
  outline: none;
  margin-top: 30px;
`;

const ModalBtnArea = styled.div`
  position: relative;
  text-align: right;
  margin-top: 50px;
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
  min-width: 30%;
  min-height: 28%;
  max-width: 30%;
  max-height: 25%;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
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
