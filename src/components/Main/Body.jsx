import React, { useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { getPosts } from "../../api/posts";
import { useQuery } from "react-query";
import TopButton from "../feature/TopButton";
import Button from "../Button";

function Body() {
  const navigate = useNavigate();
  const { data } = useQuery("posts", getPosts);
  const writePostHandle = () => {
    navigate(`/postWrite`);
  };
  return (
    <>
      <ContentsLayout>
        <BtnArea>
          <Button onClick={writePostHandle} name={"리뷰하기"}></Button>
          {/* <PostWriteBtn
            onClick={() => {
              navigate(`/postWrite`);
            }}
          
            리뷰하러가기🍴
          </PostWriteBtn> */}
        </BtnArea>
        {data &&
          data.map((post) => {
            return (
              <ContentContainer
                key={post.id}
                onClick={() => {
                  navigate(`/detail/${post.id}`);
                }}
              >
                <ContentImgBox>
                  <ContentImg src={post.imgUrl}></ContentImg>
                </ContentImgBox>
                <ContentInfoBox>
                  <Writer>{post.writer}</Writer>
                  <Title>{post.title}</Title>
                </ContentInfoBox>
              </ContentContainer>
            );
          })}
      </ContentsLayout>
      {/* <TopButton /> */}
    </>
  );
}

export default Body;
const BtnArea = styled.div`
  width: 100%;
  text-align: right;
`;

const PostWriteBtn = styled.button`
  margin-top: 40px;
  margin-left: 1060px;
  background-color: #c3a27e;
  color: white;
  width: 130px;
  height: 40px;
  border-radius: 5px;
  &:hover {
    background-color: #61462b;
    cursor: pointer;
  }
`;
const Writer = styled.p`
  color: white;
  font-size: 18px;
  font-weight: 350;
`;

const Title = styled.p`
  color: white;
  font-size: 22px;
  font-weight: 400;
`;

const ContentInfoBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 20px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  opacity: 0;
  transition: 0.4s ease-in-out;
`;

const ContentsLayout = styled.section`
  margin: 40px 0 80px;
  display: flex;
  flex-direction: row;
  gap: 55px;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const ContentImgBox = styled.div`
  width: 100%;
  height: 100%;
`;

const ContentImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ContentContainer = styled.div`
  width: calc(30%);
  aspect-ratio: 6 / 5;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 15px;
  &::after {
    content: "";
    display: block;
    background: rgb(0, 0, 0, 0.3);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    opacity: 0;
    transition: 0.4s ease-in-out;
  }

  &:hover::after {
    opacity: 1;
  }

  ${ContentInfoBox} {
    &:hover {
      opacity: 1;
      transform: translateY(0);
    }
  }

  ${ContentImg} {
    &:hover {
      transform: scale(1.1);
      filter: blur(3px);
    }
  }
`;
