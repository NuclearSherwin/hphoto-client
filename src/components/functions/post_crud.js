import axios from "axios";

// base url
const BASE_URL = "https://localhost:7178/api";

// get all posts
export const getAllPosts = async () => 
    await axios.get(`${BASE_URL}/posts`);

// get post by ID
export const getPostById = async (postId) => 
    await axios.get(`${BASE_URL}/posts/${postId}`);

// create post
export const createPost = async (post) => 
    await axios.post(`${BASE_URL}/posts`, post);

// update a post
export const updatePost = async (postId, post) => 
    await axios.put(`${BASE_URL}/posts/${postId}`, post);

// delete a post
export const deletePost = async (postId) => 
    await axios.delete(`${BASE_URL}/posts/${postId}`);

