import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.tsx';
import { MdAdd, MdExpandMore } from 'react-icons/md';
import SidebarChannelList from '@/components/SidebarChannelList.tsx';

const Sidebar = () => {
  return (
    <aside className={'flex h-screen'}>
      {/*left part of the sidebar*/}
      <nav className={'flex flex-col gap-3 bg-gray-800 p-2'}>
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
      <section className={'p-2 flex flex-col gap-1 bg-gray-700 text-white'}>
        <div>
          <button className={'flex items-center justify-between w-full gap-2'}>
            <span>discord</span>
            <MdExpandMore />
          </button>
        </div>
        {/*channels in the right part of the sidebar*/}
        <div>
          <button className={'flex items-center justify-between w-full gap-2'}>
            <MdExpandMore />
            <h4>Programming </h4>
            <button>
              <MdAdd />
            </button>
          </button>
        </div>
        <div>
          <SidebarChannelList />
          <SidebarChannelList />
          <SidebarChannelList />
          <SidebarChannelList />
        </div>
      </section>
    </aside>
  );
};

export default Sidebar;
