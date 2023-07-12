import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { getPosts, delPost } from "../../api/posts";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../Button";

function DetailPage() {
  const navigate = useNavigate();
  const params = useParams();
  const { data } = useQuery("posts", getPosts);

  const queryClient = useQueryClient();
  const deleteMutation = useMutation(delPost, {
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
    },
  });

  const foundPost = data.find((post) => {
    return post.id === params.id;
  });

  const dishGrade = "⭐️".repeat(foundPost.dishGrade);
  const serviceGrade = "⭐️".repeat(foundPost.serviceGrade);
  const priceGrade = "⭐️".repeat(foundPost.priceGrade);

  const deletePost = () => {
    window.confirm("삭제하시겠습니까?");
    deleteMutation.mutate(foundPost.id);
    navigate("/");
  };

  const modifyPost = () => {
    navigate(`/editpage/${foundPost.id}`);
  };
  return (
    <DetailLayout>
      <DetailPostBox>
        <WriteInfoBox>
          <Writer>{foundPost.writer}</Writer>
          <Title>{foundPost.title}</Title>
          <Time>{foundPost.date}</Time>
        </WriteInfoBox>
        <ContentsBox>
          <Img src={foundPost.imgUrl}></Img>
          <Content>
            <RestaurantInfoBox>
              {foundPost.restaurantName} - {foundPost.restaurantLocation}
            </RestaurantInfoBox>
            <GradeBox>
              <span>음식 - {dishGrade}</span>
              <span>서비스 - {serviceGrade}</span>
              <span>가격 - {priceGrade}</span>
            </GradeBox>
            {foundPost.content}
          </Content>
          <DeleteBtnBox>
            <Button onClick={deletePost} name={"삭제하기"}></Button>
          </DeleteBtnBox>
          <EditBtnBox>
            <Button onClick={modifyPost} name={"수정하기"}></Button>
          </EditBtnBox>
        </ContentsBox>
      </DetailPostBox>
    </DetailLayout>
  );
}

export default DetailPage;

const RestaurantInfoBox = styled.span`
  background-color: #9791912f;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: 500;
`;
const GradeBox = styled.div`
  background-color: #9791912f;
  height: 35px;
  width: 525px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  padding: 5px 0 0 20px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const Time = styled.span`
  font-size: 15px;
  color: grey;
  position: absolute;
  right: 10px;
`;

const EditBtnBox = styled.div`
  position: absolute;
  bottom: 0;
  right: 0px;
  margin: 10px;
`;

const DeleteBtnBox = styled.div`
  position: absolute;
  bottom: 0;
  right: 90px;
  margin: 10px;
`;

const Content = styled.div`
  padding: 10px;
`;

const Img = styled.img`
  width: 330px;
  height: 330px;
  margin: 10px;
  object-fit: cover;
`;

const ContentsBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const Writer = styled.span`
  border-right: 0.5px solid #dcdcdc;
  padding: 15px;
`;

const Title = styled.span`
  padding: 10px;
`;

const WriteInfoBox = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 0.5px solid #dcdcdc;
  outline: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const DetailLayout = styled.div`
  margin: 50px 0 50px 0;
`;

const DetailPostBox = styled.section`
  width: 100%;
  height: 400px;
  border: 0.5px solid #dcdcdc;
  outline: none;
`;
