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

  addItemToUser(state: UserState, action: PayloadAction<ItemType>) {
    state.items.push(action.payload);
  },

  editUserItem(state: UserState, action: PayloadAction<ItemType>) {
    state.items = state.items.map((item) => {
      if (item.id === action.payload.id) {
        return action.payload;
      }
      return item;
    });
  },

  deleteItemFromUser(state: UserState, action: PayloadAction<string>) {
    state.items = state.items.filter((item) => item.id !== action.payload);
  },
};
