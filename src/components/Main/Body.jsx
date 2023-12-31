import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { getPosts } from "../../api/posts";
import { useQuery } from "react-query";
import Button from "../Button";
import noimage from "../../assets/noimage.jpg";

function Body() {
  const navigate = useNavigate();
  const { data } = useQuery("posts", getPosts);
  const writePostHandle = () => {
    navigate(`/postWrite`);
  };

  return (
    <Layout>
      <BtnArea>
        <Button onClick={writePostHandle} name={"리뷰하기"}></Button>
      </BtnArea>
      <ContentsLayout>
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
                  <ContentImg
                    src={post.imgUrl ? post.imgUrl : noimage}
                  ></ContentImg>
                </ContentImgBox>
                <ContentInfoBox>
                  <Writer>{post.writer}</Writer>
                  <Title>{post.title}</Title>
                </ContentInfoBox>
              </ContentContainer>
            );
          })}
      </ContentsLayout>
    </Layout>
  );
}

export default Body;
const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: row;
  justify-content: center;
`;

const BtnArea = styled.div`
  text-align: right;
  margin: 20px 10% 0 0;
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
  justify-content: center;
  margin: 0 auto;
  padding-top: 30px;
  display: flex;
  flex-direction: row;
  gap: 55px;
  flex-wrap: wrap;
  max-width: 1500px;
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
  width: 370px;
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
