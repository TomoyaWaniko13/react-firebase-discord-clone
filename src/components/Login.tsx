import { FaDiscord } from 'react-icons/fa';
import { Button } from '@/components/ui/button.tsx';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth, provider } from '@/firebase.ts';

const Login = () => {
  const signIn = () => {
    signInWithPopup(auth, provider).catch((error) => {
      alert(error.message);
    });
  };

  return (
    <div className={'h-screen flex flex-col justify-center items-center'}>
      <FaDiscord size={150} />
      <Button variant={'default'} size={'lg'} onClick={signIn}>
        login
      </Button>
    </div>
  );
};

export default Login;
