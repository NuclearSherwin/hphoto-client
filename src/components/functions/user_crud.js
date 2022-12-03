import axios from "axios";

// base url
const BASE_URL = "https://localhost:7178/api";

// get all Users
export const getAllUsers = async () => 
    await axios.get(`${BASE_URL}/users`);

// get User by ID
export const getUserById = async (UserId) => 
    await axios.get(`${BASE_URL}/users/${UserId}`);

// create User
export const createUser = async (Tag) => 
    await axios.post(`${BASE_URL}/users/register`, Tag);

// update a User
export const updateUser = async (UserId, Tag) => 
    await axios.put(`${BASE_URL}/users/${UserId}`, Tag);

// delete a User
export const deleteUser = async (UserId) => 
    await axios.delete(`${BASE_URL}/users/${UserId}`);