import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.tsx';
import { MdAdd, MdExpandMore } from 'react-icons/md';
import SidebarChannelList from '@/components/SidebarChannelList.tsx';
import { CiHeadphones, CiMicrophoneOn } from 'react-icons/ci';
import { GoGear } from 'react-icons/go';

const Sidebar = () => {
  return (
    <aside className={'flex h-screen'}>
      {/*left part of the sidebar*/}
      <nav className={'flex flex-col gap-3 bg-gray-950 p-2'}>
        <Avatar>
          <AvatarImage src='https://github.com/shadcn.png' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src='https://github.com/shadcn.png' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src='https://github.com/shadcn.png' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
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
            <button>
              <MdAdd />
            </button>
          </button>
        </article>
        {/*channel list*/}
        <main>
          <SidebarChannelList />
          <SidebarChannelList />
          <SidebarChannelList />
          <SidebarChannelList />
        </main>
        {/*footer part of the sidebar*/}
        <footer className={'absolute bottom-2 flex items-center gap-2'}>
          <Avatar className={'size-8'}>
            <AvatarImage src='https://github.com/shadcn.png' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <CiMicrophoneOn size={24} />
          <CiHeadphones size={24} />
          <GoGear size={24} />
        </footer>
      </section>
    </aside>
  );
};

export default Sidebar;
