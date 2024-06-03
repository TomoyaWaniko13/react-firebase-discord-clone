import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.tsx';
import { MdAdd, MdExpandMore } from 'react-icons/md';
import SidebarChannelList from '@/components/SidebarChannelList.tsx';
import { CiHeadphones, CiMicrophoneOn } from 'react-icons/ci';
import { GoGear } from 'react-icons/go';
import { auth, db } from '@/firebase.ts';
import { useAppSelector } from '@/app/hooks.ts';
import useFirebaseCollection from '@/hooks/useFirebaseCollection.tsx';
import { collection, addDoc } from 'firebase/firestore';

const Sidebar = () => {
  const user = useAppSelector((state) => state.user);
  const { documents: channels } = useFirebaseCollection('channels');

  const addChannel = async () => {
    const channelName: string | null = prompt('create new channel');
    if (channelName) {
      await addDoc(collection(db, 'channels'), {
        channelName,
      });
    }
  };

  return (
    <aside className={'flex h-screen'}>
      {/*left part of the sidebar*/}
      <nav className={'flex flex-col gap-3 bg-gray-950 p-2'}>
        <button>
          <Avatar>
            <AvatarImage src='https://github.com/shadcn.png' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </button>
        <button>
          <Avatar>
            <AvatarImage src='https://github.com/shadcn.png' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </button>
        <button>
          <Avatar>
            <AvatarImage src='https://github.com/shadcn.png' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </button>
      </nav>
      {/*right part of the sidebar*/}
      <section className={'flex flex-col gap-1 bg-gray-800 text-white w-full p-2'}>
        <header>
          <button className={'flex items-center justify-between w-full gap-2'}>
            <span>discord</span>
            <MdExpandMore />
          </button>
        </header>
        {/*channels in the right part of the sidebar*/}
        <article>
          <button className={'flex items-center justify-between w-full gap-2'}>
            <MdExpandMore />
            <h4>Programming </h4>
            <button onClick={() => addChannel()}>
              <MdAdd />
            </button>
          </button>
        </article>
        {/*channel list*/}
        <main>
          {channels.map((channel) => (
            <SidebarChannelList key={channel.id} id={channel.id} channel={channel} />
          ))}
        </main>
        {/*footer part of the sidebar*/}
        <footer className={'absolute bottom-2 flex flex-col items-center gap-2'}>
          <div>
            <button onClick={() => auth.signOut()} className={'flex items-center gap-2'}>
              <Avatar className={'size-8'}>
                <AvatarImage src={user?.photo} />
                <AvatarFallback>{user?.displayName}</AvatarFallback>
              </Avatar>
              <span className={'text-sm'}>{user?.displayName}</span>
            </button>
          </div>

          <div className={'flex gap-3'}>
            <button>
              <CiMicrophoneOn size={24} />
            </button>
            <button>
              <CiHeadphones size={24} />
            </button>
            <button>
              <GoGear size={24} />
            </button>
          </div>
        </footer>
      </section>
    </aside>
  );
};

export default Sidebar;
