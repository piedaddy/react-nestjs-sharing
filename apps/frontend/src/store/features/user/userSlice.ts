import { createSlice } from '@reduxjs/toolkit';
import { reducers } from './reducers';

export const USER_SLICE_NAME = 'user';

// Define the TS type for the counter slice's state
export interface UserState {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
}

// Define the initial value for the slice state
const initialState: UserState = {
  firstName: '',
  lastName: '',
  email: '',
};

const userSlice = createSlice({
  name: USER_SLICE_NAME,
  initialState,
  reducers,
});

export const { updateUserEmail, updateUserFirstName } = userSlice.actions;
export default userSlice.reducer;
