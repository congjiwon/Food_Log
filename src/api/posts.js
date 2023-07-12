import axios from "axios";

//조회
const getPosts = async () => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/posts`);
  return response.data;
};

//추가
const addPost = async (newPost) => {
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/posts`, newPost);
};

//삭제
const delPost = async (id) => {
  await axios.delete(`${process.env.REACT_APP_SERVER_URL}/posts/${id}`);
};

//수정
const editPost = async (newPost) => {
  await axios.patch(
    `${process.env.REACT_APP_SERVER_URL}/posts/${newPost.id}`,
    newPost
  );
};

export { getPosts, addPost, delPost, editPost };
