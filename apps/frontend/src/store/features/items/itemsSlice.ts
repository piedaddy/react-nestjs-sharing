import { createSlice } from '@reduxjs/toolkit';

export const ITEMS_SLICE_NAME = 'items';

export interface UserState {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  neighborhoodId?: string;
  items?: any;
}

const initialState: UserState = {
  firstName: '',
  lastName: '',
  email: '',
};

const itemsSlice = createSlice({
  name: ITEMS_SLICE_NAME,
  initialState,
  reducers: {},
});

export default itemsSlice.reducer;
