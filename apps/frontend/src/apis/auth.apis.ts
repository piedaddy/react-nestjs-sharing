import axios from 'axios';

import { LoginDto } from '../../../backend/src/auth/dtos/login.dto';
import { API_URL } from '@/utils/constants';

export const LOGIN = async (payload: LoginDto) => {
  try {
    const { data } = await axios.post(`${API_URL}/auth/login`, payload);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
