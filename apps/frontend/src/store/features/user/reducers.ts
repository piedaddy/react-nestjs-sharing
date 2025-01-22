import type { PayloadAction } from '@reduxjs/toolkit';
import { UserState } from './userSlice';

export const reducers = {
  updateUserEmail(state: UserState, action: PayloadAction<string>) {
    state.email = action.payload;
    console.log('in updateUserEmail reducer', state, state.email, action);
  },

  updateUserFirstName(state: UserState, action: PayloadAction<string>) {
    state.firstName = action.payload;
  },
};
