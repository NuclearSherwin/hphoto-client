import axios from "axios";

// base url
const BASE_URL = "https://localhost:7178/api";

// get all Users
export const getAllUsers = async () => await axios.get(`${BASE_URL}/users`);

// get User by ID
export const getUserById = async (userId) =>
  await axios.get(`${BASE_URL}/users/${userId}`);

// create User
export const createUser = async (user) =>
  await axios.post(`${BASE_URL}/users/register`, user);

// update a User
export const updateUser = async (userId, user) =>
  await axios.put(`${BASE_URL}/users/${userId}`, user);

// delete a User
export const deleteUser = async (userId) =>
  await axios.delete(`${BASE_URL}/users/${userId}`);

// login
export const login = async (user) =>
  await axios.post(`${BASE_URL}/users/login`, user);
