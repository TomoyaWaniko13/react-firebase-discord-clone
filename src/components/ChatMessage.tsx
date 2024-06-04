import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.tsx';
import { Timestamp } from 'firebase/firestore';

interface Props {
  timestamp: Timestamp | null;
  message: string;
  user: {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
  };
}

const ChatMessage = ({ message, timestamp, user }: Props) => {
  const formattedDate = timestamp ? new Date(timestamp.toDate()).toLocaleString() : 'Invalid date';

  return (
    <div className={'flex items-center gap-3'}>
      <div>
        <Avatar>
          <AvatarImage src={user?.photo} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className={'flex-col'}>
        <div className={'flex flex-row'}>
          <p>{user?.displayName}</p>
          <time>{formattedDate}</time>
        </div>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
