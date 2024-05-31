import { IoIosNotificationsOutline } from 'react-icons/io';
import { MdOutlinePushPin } from 'react-icons/md';
import { BsPeople } from 'react-icons/bs';

import { CiSearch } from 'react-icons/ci';
import { IoSend } from 'react-icons/io5';
import { FaRegQuestionCircle } from 'react-icons/fa';

interface Props {
  channelName: string | null;
}

const ChatHeader = ({ channelName }: Props) => {
  return (
    <header className='flex items-center justify-between p-2'>
      <div className='chat-header-left'>
        <h3 className='chat-header-title'>
          <span className='chat-header-hash'>#</span>
          {channelName}
        </h3>
      </div>

      <div className='chat-header-right flex justify-end items-center gap-3 w-full'>
        <button aria-label='Notifications'>
          <IoIosNotificationsOutline />
        </button>
        <button aria-label='Pin'>
          <MdOutlinePushPin />
        </button>
        <button aria-label='Members'>
          <BsPeople />
        </button>

        <div className='search-container flex items-center gap-3'>
          <div className='search-box bg-gray-800 p-1 rounded flex items-center'>
            <input type='text' placeholder='Search...' className='search-input bg-transparent outline-none w-80' />
            <button aria-label='Search'>
              <CiSearch />
            </button>
          </div>
          <button aria-label='Send'>
            <IoSend />
          </button>
          <button aria-label='Help'>
            <FaRegQuestionCircle />
          </button>
        </div>
      </div>
    </header>
  );
};

export default ChatHeader;
