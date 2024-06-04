import { configureStore } from '@reduxjs/toolkit';
import userReducer from '@/features/userSlice.ts';
import channelReducer from '@/features/channelSlice.ts';

export const store = configureStore({
  reducer: {
    user: userReducer,
    channel: channelReducer,
  },
});

// https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-dispatch-type
export type AppDispatch = typeof store.dispatch;
// https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-state-type
// 'RootState' is equivalent to 'InitialUserState' in types.ts.
export type RootState = ReturnType<typeof store.getState>;
