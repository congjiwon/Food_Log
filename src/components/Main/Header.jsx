import React from "react";
import { styled } from "styled-components";
import 헤더2 from "../../assets/헤더2.jpeg";

function Header() {
  return (
    <HeaderLayout>
      <TitleBox>
        <MainMessage>
          솔직한 리뷰, 믿을 수 있는 평점! 나만의 맛집 공유하기
        </MainMessage>
        <br />
        <Title>Our FoodLog 🍽</Title>
      </TitleBox>
    </HeaderLayout>
  );
}

export default Header;
const Title = styled.p`
  font-size: 30px;
`;

const MainMessage = styled.p`
  font-size: 23px;
`;
const TitleBox = styled.div`
  padding: 10px;
  background-color: grey;
  background: rgb(0, 0, 0, 0.65);
  color: white;
  text-align: center;
  width: 800px;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeaderLayout = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #f2ead3;
  width: 100%;
  height: 300px;
  background-image: url("${헤더2}");
`;
