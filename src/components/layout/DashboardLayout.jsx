import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Header from '../Header';
import RightSidebar from '../RightSidebar';

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex font-sans">
      <Sidebar />
      
      <main className="flex-1 ml-64 mr-80 min-h-screen flex flex-col">
        <Header />
        
        <div className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-6xl mx-auto">
            <Outlet />
          </div>
        </div>
      </main>

      <RightSidebar />
    </div>
  );
};

export default DashboardLayout;
