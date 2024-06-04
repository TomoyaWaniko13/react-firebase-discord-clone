import ChatHeader from '@/components/ChatHeader.tsx';
import ChatInput from '@/components/ChatInput.tsx';
import ChatMessage from '@/components/ChatMessage.tsx';
import { useAppSelector } from '@/app/hooks.ts';
import { useEffect, useState } from 'react';
import { db } from '@/firebase.ts';
import { collection, onSnapshot, Timestamp } from 'firebase/firestore';

interface Messages {
  timestamp: Timestamp;
  message: string;
  user: {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
  };
}

const Chat = () => {
  const [inputeText, setInputText] = useState<string>('');
  const [messages, setMessages] = useState<Messages[]>([]);
  const channelName = useAppSelector((state) => state.channel.channelName);
  const channelId = useAppSelector((state) => state.channel.channelId);
  const user = useAppSelector((state) => state.user.user);

  useEffect(() => {
    let collectionReference = collection(db, 'channels', String(channelId), 'messages');

    const unsubscribe = onSnapshot(collectionReference, (snapshot) => {
      const results = [];
      snapshot.docs.forEach((doc) => {
        results.push({
          timestamp: doc.data().timestamp,
          message: doc.data().message,
          user: doc.data().user,
        });
      });
      setMessages(results);
    });
    console.log(messages);
    return () => unsubscribe();
  }, [channelId]);

  return (
    <div className={'bg-gray-600 text-white h-screen flex flex-col'}>
      {/* header part of the chat section  at the top */}
      <ChatHeader channelName={channelName} />

      {/* chat messages in the middle */}
      <div className={'flex-grow flex flex-col gap-5 h-screen overflow-scroll'}>
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message.message} timestamp={message.timestamp} user={message.user} />
        ))}
        {/*<ChatMessage />*/}
        {/*<ChatMessage />*/}
      </div>

      {/* input field in the chat section at the bottom */}
      <ChatInput />
    </div>
  );
};

export default Chat;
