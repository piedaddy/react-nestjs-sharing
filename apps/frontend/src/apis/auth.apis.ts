import axios from 'axios';
import { LoginDto } from '../../../backend/src/auth/dtos/login.dto';

//@todo - get this from config file once made
const API_URL = 'http://localhost:3000/api';

export const LOGIN = async (payload: LoginDto) => {
  try {
    return await axios.post(`${API_URL}/auth/login`, payload);
  } catch (error) {
    throw new Error(error);
  }
};
