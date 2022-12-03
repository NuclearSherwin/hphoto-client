import axios from "axios";

// base url
const BASE_URL = "https://localhost:7178/api";

// get all Tags
export const getAllTags = async () => 
    await axios.get(`${BASE_URL}/tags`);

// get Tag by ID
export const getTagById = async (TagId) => 
    await axios.get(`${BASE_URL}/Tags/${TagId}`);

// create Tag
export const createTag = async (Tag) => 
    await axios.post(`${BASE_URL}/Tags`, Tag);

// update a Tag
export const updateTag = async (TagId, Tag) => 
    await axios.put(`${BASE_URL}/Tags/${TagId}`, Tag);

// delete a Tag
export const deleteTag = async (TagId) => 
    await axios.delete(`${BASE_URL}/Tags/${TagId}`);