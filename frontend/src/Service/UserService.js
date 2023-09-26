import axios from 'axios'

const API_BASE_URL = 'https://reqres.in/api';

export const signUp = async (email,phonenumber,password,confirmpassword) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/signup`, {
      email,
      phonenumber,
      password,
      confirmpassword,
    });
    return response.data;
  } catch (error) {
    throw error.response.data.error;
  }
};

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response.data.error;
  }
};