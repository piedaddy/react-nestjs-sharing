import axios from 'axios';

import { API_URL } from '@/utils/constants';

import { CreateUserDto } from '../../../backend/src/users/dtos/create-user.dto';
import { UpdateUserDto } from '../../../backend/src/users/dtos/update-user.dto';

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
