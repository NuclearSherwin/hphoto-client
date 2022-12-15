import axios from "axios";

// base url
const BASE_URL = "https://localhost:7178/api";

// get all post2
export const getAllPost2 = async () => 
    await axios.get(`${BASE_URL}/post2`);

// get post by ID
export const getPostById = async (postId) => 
    await axios.get(`${BASE_URL}/post2/${postId}`);

// create post
export const createPost = async (post) => 
    await axios.post(`${BASE_URL}/post2`, post);

// update a post
export const updatePost = async (postId, post) => 
    await axios.put(`${BASE_URL}/post2/${postId}`, post);

// delete a post
export const deletePost = async (postId) => 
    await axios.delete(`${BASE_URL}/post2/${postId}`);

