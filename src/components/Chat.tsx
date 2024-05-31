import ChatHeader from '@/components/ChatHeader.tsx';
import ChatInput from '@/components/ChatInput.tsx';
import ChatMessage from '@/components/ChatMessage.tsx';

const Chat = () => {
  return (
    <div className={'bg-gray-600 text-white h-screen flex flex-col'}>
      {/* header part of the chat section  at the top */}
      <ChatHeader channelName={'example'} />

      {/* chat messages in the middle */}
      <div className={'flex-grow flex flex-col gap-5'}>
        <ChatMessage />
        <ChatMessage />
      </div>

      {/* input field in the chat section at the bottom */}
      <ChatInput />
    </div>
  );
};

export default Chat;
