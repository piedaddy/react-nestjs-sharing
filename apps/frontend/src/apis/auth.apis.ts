import axios from 'axios';
import { setUser } from '@/store/features/user/userSlice';
import { useAppDispatch } from '@/store/hooks';

import { LoginDto } from '../../../backend/src/auth/dtos/login.dto';
import { API_URL } from '@/utils/constants';

export const LOGIN = async (payload: LoginDto) => {
  // const dispatch = useAppDispatch();

  try {
    const { data } = await axios.post(`${API_URL}/auth/login`, payload);
    console.log('data', data);
    // dispatch(setUser(data));
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
