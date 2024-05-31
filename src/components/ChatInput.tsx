import { CiCirclePlus, CiFaceSmile, CiGift } from 'react-icons/ci';
import { MdOutlineGifBox } from 'react-icons/md';

const ChatInput = () => {
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
          />
          <button type='submit' aria-label='Send'>
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
