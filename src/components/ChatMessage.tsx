import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.tsx';
import { useAppSelector } from '@/app/hooks.ts';

const ChatMessage = () => {
  return (
    <div className={'flex items-center gap-3'}>
      <div>
        <Avatar>
          <AvatarImage src='https://github.com/shadcn.png' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className={'flex-col'}>
        <div className={'flex flex-row'}>
          <p>tomoya</p>
          <time>2024/11/11</time>
        </div>
        <p>message</p>
      </div>
    </div>
  );
};

export default ChatMessage;
