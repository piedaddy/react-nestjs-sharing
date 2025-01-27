import type { PayloadAction } from '@reduxjs/toolkit';
import { UserState } from './userSlice';
import { ItemType, User } from '@/@types';

export const reducers = {
  setUser(state: UserState, action: PayloadAction<User>) {
    state.firstName = action.payload.firstName;
    state.lastName = action.payload.lastName;
    state.id = action.payload.id;
    state.email = action.payload.email;
    state.items = action.payload.items;
    console.log('state', state, 'action', action);
  },

  setUserItems(state: UserState, action: PayloadAction<ItemType[]>) {
    state.items = action.payload;
  },
};
