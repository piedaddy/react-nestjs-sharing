import axios from 'axios';
import { CreateUserDto } from '../../../backend/src/users/dtos/create-user.dto';
import { UpdateUserDto } from '../../../backend/src/users/dtos/update-user.dto';

//@todo - get this from config file once made
const API_URL = 'http://localhost:3000/api';

export const SIGN_UP = async (payload: CreateUserDto) => {
  try {
    return await axios.post(`${API_URL}/users`, payload);
  } catch (error) {
    throw new Error(error);
  }
};

export const UPDATE = async (payload: UpdateUserDto) => {
  try {
    return await axios.patch(`${API_URL}/users`, payload);
  } catch (error) {
    throw new Error(error);
  }
};
