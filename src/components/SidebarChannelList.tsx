import { DocumentData } from 'firebase/firestore';
import { useAppDispatch } from '@/app/hooks.ts';
import { setChannelInfo } from '@/features/channelSlice.ts';

type Props = {
  id: string;
  channel: DocumentData;
};

const SidebarChannelList = ({ id, channel }: Props) => {
  const dispatch = useAppDispatch();
  const channelName: string = channel.channel.channelName;
  const onClickAddChannel = () => dispatch(setChannelInfo({ channelId: id, channelName: channelName }));
  return (
    <button className={'flex gap-1 p-1 text-gray-300'} onClick={onClickAddChannel}>
      <span>#</span>
      <span>{channelName}</span>
    </button>
  );
};

export default SidebarChannelList;
