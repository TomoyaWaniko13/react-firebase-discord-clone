import { CiCirclePlus, CiFaceSmile, CiGift } from 'react-icons/ci';
import { MdOutlineGifBox } from 'react-icons/md';
import { useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '@/firebase.ts';
import { useAppSelector } from '@/app/hooks.ts';

const ChatInput = () => {
  const [inputText, setInputText] = useState<string>('');
  const channelId = useAppSelector((state) => state.channel.channelId);
  const user = useAppSelector((state) => state.user.user);

  const sendMessage = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    // for subcollections:
    // https://firebase.google.com/docs/firestore/data-model#subcollections
    const collectionReference = collection(db, 'channels', String(channelId), 'messages');
    const documentReference = await addDoc(collectionReference, {
      message: inputText,
      timestamp: serverTimestamp(),
      user: user,
    });

    console.log(documentReference);

    // for  addDoc() and serverTimeStamp():
    // https://firebase.google.com/docs/firestore/manage-data/add-data
  };

  return (
    <div className='chat-input-container p-1 rounded'>
      <form className='chat-input-form flex items-center gap-3 w-full bg-gray-900 p-1'>
        <button type='button' aria-label='Add'>
          <CiCirclePlus size={20} />
        </button>
        <div className='chat-input-wrapper flex items-center w-full p-1'>
          <input
            type='text'
            placeholder={`Message #example`}
            className='chat-input bg-transparent flex-grow outline-none'
            aria-label='Message input'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
              if (e.key === 'Enter') {
                sendMessage(e);
              }
            }}
          />
          <button
            type='submit'
            aria-label='Send'
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => sendMessage(e)}
          >
            Send
          </button>
        </div>
        <button type='button' aria-label='Send Gift'>
          <CiGift size={25} />
        </button>
        <button type='button' aria-label='Send GIF'>
          <MdOutlineGifBox size={25} />
        </button>
        <button type='button' aria-label='Emoji'>
          <CiFaceSmile size={25} />
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
