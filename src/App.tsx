import Sidebar from '@/components/Sidebar.tsx';
import Chat from '@/components/Chat.tsx';

function App() {
  return (
    <div className={'flex w-screen '}>
      <div>
        <Sidebar />
      </div>
      <div className={'w-screen'}>
        <Chat />
      </div>
    </div>
  );
}

export default App;
