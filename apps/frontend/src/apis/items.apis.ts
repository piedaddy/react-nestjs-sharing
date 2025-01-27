import axios from 'axios';

import { User } from '@/@types';
import { API_URL } from '@/utils/constants';

export const ADD_NEW_ITEM = async (payload: any) => {
  try {
    return await axios.post(`${API_URL}/items`, payload);
  } catch (error) {
    throw new Error(error);
  }
};

export const GET_ITEMS_BY_USER_ID = async (payload: User) => {
  try {
    return await axios.get(`${API_URL}/items/${payload.id}`);
  } catch (error) {
    throw new Error(error);
  }
};

export const DELETE_ITEM = async (itemId: number) => {
  try {
    return await axios.delete(`${API_URL}/items?id=${itemId}`);
  } catch (error) {
    throw new Error(error);
  }
};
