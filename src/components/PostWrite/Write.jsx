import React, { useRef, useState } from "react";
import useInput from "../../hooks/useInput";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { addPost } from "../../api/posts";
import { useMutation, useQueryClient } from "react-query";
import shortid from "shortid";
import currentTime from "../feature/CurrentTime";
import Select from "../PostWrite/Select";
function Write() {
  const navigate = useNavigate();
  const [writer, setWriterHandle] = useInput();
  const [title, setTitleHandle] = useInput();
  const [content, setContentHandle] = useInput();
  const [selectedFile, setSelectedFile] = useState();
  const [dishGrade, setDishGrade] = useState();
  const [serviceGrade, setServiceGrade] = useState();
  const [priceGrade, setPriceGrade] = useState();
  const [restaurantName, setRestaurantNameHandle] = useInput();
  const [restaurantLocation, setRestaurantLocationHandle] = useInput();

  const [imgUrl, setImgUrl] = useState("");
  const testRef = useRef();

  const fileOnLoad = (e) => {
    setSelectedFile(e.target.files[0]);
    console.log(e.target.files[0]);
    saveImgFile();
  };

  const saveImgFile = () => {
    const file = testRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgUrl(reader.result);
    };
  };

  //리액트 쿼리 관련 코드
  const queryClient = useQueryClient();
  const mutation = useMutation(addPost, {
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
    },
  });

  const SubmitBtnHandle = (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("image", selectedFile);

    const newPost = {
      writer,
      title,
      content,
      id: shortid.generate(),
      imgUrl,
      date: currentTime(),
      dishGrade,
      serviceGrade,
      priceGrade,
      restaurantName,
      restaurantLocation,
    };

    mutation.mutate(newPost);

    navigate("/");
  };

  return (
    <WriteLayout>
      <form onSubmit={SubmitBtnHandle}>
        <div>
          <InputName
            required
            value={writer}
            onChange={setWriterHandle}
            placeholder="닉네임"
          ></InputName>
          <InputTitle
            required
            value={title}
            onChange={setTitleHandle}
            placeholder="제목"
          ></InputTitle>
        </div>
        <div>
          <RestaurantNameInput
            required
            value={restaurantName}
            onChange={setRestaurantNameHandle}
            placeholder="식당 이름"
          ></RestaurantNameInput>
          <RestaurantLocationInput
            required
            value={restaurantLocation}
            onChange={setRestaurantLocationHandle}
            placeholder="식당 위치"
          ></RestaurantLocationInput>
        </div>
        <SelectBox>
          <Select
            topic="음식"
            onChange={(event) => {
              setDishGrade(event.target.value);
            }}
          ></Select>
          <Select
            topic="서비스"
            onChange={(event) => {
              setServiceGrade(event.target.value);
            }}
          ></Select>
          <Select
            topic="가격"
            onChange={(event) => {
              setPriceGrade(event.target.value);
            }}
          ></Select>
        </SelectBox>
        <ContentsTextArea
          required
          value={content}
          onChange={setContentHandle}
        />
        <ImgAddInput
          type="file"
          accept="image/*"
          name="img"
          onChange={fileOnLoad}
          ref={testRef}
        />
        <BtnArea>
          <Btn type="submit">작성하기</Btn>
          <Btn
            type="submit"
            onClick={() => {
              navigate("/");
            }}
          >
            취소하기
          </Btn>
        </BtnArea>
      </form>
    </WriteLayout>
  );
}

export default Write;
const RestaurantLocationInput = styled.input`
  width: 50%;
  height: 50px;
  padding: 20px;
  border: 0.5px solid #dcdcdc;
  font-size: 18px;
  outline: none;
`;
const RestaurantNameInput = styled.input`
  width: 50%;
  height: 50px;
  padding: 20px;
  border: 0.5px solid #dcdcdc;
  font-size: 18px;
  outline: none;
`;
const SelectBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
  height: 50px;
  /* padding: 20px; */
  border: 0.5px solid #dcdcdc;
  font-size: 18px;
  /* outline: none; */
`;
const BtnArea = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;
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

const WriteLayout = styled.div`
  margin: 50px 0 50px 0;
`;

const InputName = styled.input`
  width: 200px;
  height: 50px;
  padding: 20px;
  border: 0.5px solid #dcdcdc;
  font-size: 18px;
  outline: none;
`;

const InputTitle = styled.input`
  width: calc(100% - 200px);
  height: 50px;
  padding: 20px;
  border: 0.5px solid #dcdcdc;
  font-size: 18px;
  outline: none;
`;

const ContentsTextArea = styled.textarea`
  resize: none;
  width: 100%;
  height: 500px;
  padding: 20px;
  font-size: 18px;
  outline: none;
  border: 0.5px solid #dcdcdc;
`;

const ImgAddInput = styled.input`
  width: 50%;
  outline: none;
  border: 0.5px solid #dcdcdc;
  margin-top: 10px;
  height: 40px;
`;