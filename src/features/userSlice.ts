import { createSlice } from '@reduxjs/toolkit';
import { InitialUserState } from '@/types.ts';

const initialState: InitialUserState = {
  user: null,
};

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

const userReducer = userSlice.reducer;
export default userReducer;
