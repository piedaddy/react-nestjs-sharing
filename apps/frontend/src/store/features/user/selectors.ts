// import { RootState } from '../../store';
import { UserState } from './userSlice';

//selector is like getters!
export const selectUserEmail = (state: UserState) => state.email;
export const selectUserFirstName = (state: UserState) => state.firstName;
