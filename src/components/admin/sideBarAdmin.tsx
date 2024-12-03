import { Calendar, FileText, LogOut, Menu, Settings, Users, X } from "lucide-react";
import { useState } from "react";
import FengShuiLogo from "../../assets/pikaso_texttoimage_Koi-Feng-Shui-Logo.png";

const SidebarLink = ({ icon: Icon, text, isActive }:any) => (
    <a href="#" className={`flex items-center py-3 px-6 text-white hover:bg-red-700 rounded-lg transition-colors duration-200 ${isActive ? 'bg-red-700' : ''}`}>
      <Icon className="h-5 w-5 mr-3" />
      <span>{text}</span>
    </a>
  );

const SideBarAdmin = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  console.log(toggleSidebar)
  return (
    <div>
        <aside className={`bg-gradient-to-b from-red-800 to-red-600 text-white h-screen w-64 fixed left-0 top-0 transition-transform duration-300 ease-in-out transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 z-30`}>
        <button className="lg:hidden text-gray-600" onClick={toggleSidebar}>
                {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            <div className="p-5">
            <div className="flex items-center mb-8">
            <a className="flex items-center justify-center" href="#">
            <img src={FengShuiLogo} height={40} width={50} alt="FengShuiLogo" />
            <span className="ml-2 text-lg font-bold text-white">Feng Shui Koi</span>
            </a>
            </div>
            <nav className="space-y-2">
                <SidebarLink icon={Users} text="Customers" isActive={true} />
                <SidebarLink icon={FileText} text="Consultations" isActive={false} />
                <SidebarLink icon={Calendar} text="Appointments" isActive={false} />
                <SidebarLink icon={Settings} text="Settings" isActive={false} />
            </nav>
            </div>
            <div className="absolute bottom-0 w-full p-5">
            <button className="flex items-center text-white hover:text-red-200 transition-colors duration-200">
                <LogOut className="h-5 w-5 mr-2" />
                <span>Logout</span>
            </button>
            </div>
        </aside>
        
    </div>
  )
}

export default SideBarAdmin