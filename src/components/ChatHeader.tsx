import { IoIosNotificationsOutline } from 'react-icons/io';
import { MdOutlinePushPin } from 'react-icons/md';
import { BsPeople } from 'react-icons/bs';
import { Input } from '@/components/ui/input.tsx';

import { CiSearch } from 'react-icons/ci';
import { IoSend } from 'react-icons/io5';
import { FaRegQuestionCircle } from 'react-icons/fa';

interface Props {
  channelName: string | null;
}

const ChatHeader = ({ channelName }: Props) => {
  return (
    <div className='flex items-center justify-between p-2'>
      {/*left part of the header in the chat section.*/}
      <div className='chatHeaderLeft'>
        <h3>
          <span className='chatHeaderHash'>#</span>
          {channelName}
        </h3>
      </div>
      {/*right part of the header in the chat section.*/}
      <div className='flex justify-end items-center gap-3 w-full'>
        <button>
          <IoIosNotificationsOutline />
        </button>
        <button>
          <MdOutlinePushPin />
        </button>
        <button>
          <BsPeople />
        </button>
        <div className='flex items-center gap-3'>
          <div className={'bg-gray-800 p-1 rounded'}>
            <input type='text' placeholder='search...' className='bg-transparent outline-none w-80' />
            <button>
              <CiSearch />
            </button>
          </div>
          <IoSend />
          <FaRegQuestionCircle />
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
