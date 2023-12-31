import React, { useRef, useState } from "react";
import { styled } from "styled-components";
import useInput from "../../hooks/useInput";
import { useNavigate, useParams } from "react-router-dom";
import { editPost, getPosts } from "../../api/posts";
import { useMutation, useQuery, useQueryClient } from "react-query";
import Select from "../PostWrite/Select";
import Button from "../Button";
import Modal from "../../components/Modal";

function Edit() {
  const params = useParams();
  const { data } = useQuery("posts", getPosts);
  const [isOpen, setIsOpen] = useState(false);

  const foundPost = data.find((post) => {
    return post.id === params.id;
  });
  const navigate = useNavigate();

  const [writer, setWriterHandle] = useInput(foundPost.writer);
  const [title, setTitleHandle] = useInput(foundPost.title);
  const [content, setContentHandle] = useInput(foundPost.content);
  const [dishGrade, setDishGrade] = useState(foundPost.dishGrade);
  const [serviceGrade, setServiceGrade] = useState(foundPost.serviceGrade);
  const [priceGrade, setPriceGrade] = useState(foundPost.priceGrade);
  const [selectedFile, setSelectedFile] = useState();
  const [restaurantName, setRestaurantNameHandle] = useInput(
    foundPost.restaurantName
  );
  const [restaurantLocation, setRestaurantLocationHandle] = useInput(
    foundPost.restaurantLocation
  );

  const openModalHandle = () => {
    setIsOpen(true);
  };

  const closeModalHandle = () => {
    setIsOpen(false);
    // deleteMutation.mutate(foundPost.id);
    // navigate("/");
  };

  const [imgUrl, setImgUrl] = useState(foundPost.imgUrl);
  const testRef = useRef();

  const fileOnLoad = (e) => {
    setSelectedFile(e.target.files[0]);
    console.log(e.target.files[0]);
    saveImgFile();
  };
  const canelHandle = () => {
    navigate("/");
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
  const mutation = useMutation(editPost, {
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
    },
  });

  const EditBtnHandle = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", selectedFile);

    const EditPost = {
      writer,
      title,
      content,
      id: foundPost.id,
      dishGrade,
      serviceGrade,
      imgUrl,
      priceGrade,
      restaurantName,
      restaurantLocation,
    };

    mutation.mutate(EditPost);

    navigate("/");
  };

  return (
    <WriteLayout>
      <form onSubmit={EditBtnHandle}>
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
            value={dishGrade}
            topic="음식"
            onChange={(event) => {
              setDishGrade(event.target.value);
            }}
          ></Select>
          <Select
            value={serviceGrade}
            topic="서비스"
            onChange={(event) => {
              setServiceGrade(event.target.value);
            }}
          ></Select>
          <Select
            value={priceGrade}
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
        <BottomBox>
          <SelectImgBox>
            {imgUrl && <Img src={imgUrl}></Img>}
            <FileLabel htmlFor="fileImg">
              이미지 바꾸기
              <ImgAddInput
                type="file"
                id="fileImg"
                accept="image/*"
                name="img"
                onChange={fileOnLoad}
                style={{ display: "none" }}
                ref={testRef}
              />
            </FileLabel>
          </SelectImgBox>
          <BtnArea>
            <Button name={"수정하기"}></Button>
            <Button onClick={canelHandle} name={"취소하기"}></Button>
          </BtnArea>
        </BottomBox>
      </form>
    </WriteLayout>
  );
}

export default Edit;
const SelectImgBox = styled.div`
  display: flex;
  flex-direction: row;
`;
const BottomBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const FileLabel = styled.label`
  cursor: pointer;
  display: inline-block;
  text-align: center;
  margin-top: 10px;
  padding-top: 8px;
  width: 120px;
  border-radius: 5px;
  height: 40px;
  border: none;
  background-color: #97919171;
  &:hover {
    background-color: #979191f1;
    color: white;
  }
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
  margin: 10px;
  object-fit: cover;
`;
const ImgAddInput = styled.input`
  width: 50%;
  outline: none;
  border: 0.5px solid #dcdcdc;
  margin-top: 10px;
  height: 40px;
`;
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
  gap: 20px;
  height: 50px;
  border: 0.5px solid #dcdcdc;
  font-size: 18px;
`;
const BtnArea = styled.div`
  position: relative;
  bottom: 0;
  right: 0;
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
