import { createSlice } from '@reduxjs/toolkit';
import { reducers } from './reducers';
import { ItemType } from '@/@types';

export const USER_SLICE_NAME = 'user';

export interface UserState {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  neighborhoodId?: string;
  items: ItemType[];
}

const initialState: UserState = {
  firstName: '',
  lastName: '',
  email: '',
  items: [],
};

const userSlice = createSlice({
  name: USER_SLICE_NAME,
  initialState,
  reducers,
});

export const { setUser, addItemToUser, deleteItemFromUser, editUserItem } =
  userSlice.actions;
export default userSlice.reducer;
