import Sidebar from '@/components/Sidebar.tsx';
import Chat from '@/components/Chat.tsx';
import Login from '@/components/Login.tsx';
import { RootState } from '@/app/store.ts';
import { useEffect } from 'react';
import { auth } from '@/firebase.ts';
import { useAppDispatch, useAppSelector } from '@/app/hooks.ts';
import { login, logout } from '@/features/userSlice.ts';

function App() {
  const user = useAppSelector((state: RootState) => state.user.user);
  const dispatch = useAppDispatch();

  // check this documentation:
  // https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth#onauthstatechanged
  useEffect(() => {
    auth.onAuthStateChanged((loginUser) => {
      if (loginUser) {
        dispatch(
          login({
            uid: loginUser.uid,
            photo: loginUser.photoURL,
            email: loginUser.email,
            displayName: loginUser.displayName,
          }),
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div>
      {user ? (
        <div className={'flex w-screen'}>
          <div>
            <Sidebar />
          </div>
          <div className={'flex-grow'}>
            <Chat />
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
