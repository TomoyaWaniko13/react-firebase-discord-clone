import { DocumentData } from 'firebase/firestore';

type Props = {
  id: string;
  channel: DocumentData;
};

const SidebarChannelList = ({ id, channel }: Props) => {
  const channelName: string = channel.channel.channelName;
  return (
    <button className={'flex gap-1 p-1 text-gray-300'}>
      <span>#</span>
      <span>{channelName}</span>
    </button>
  );
};

export default SidebarChannelList;
