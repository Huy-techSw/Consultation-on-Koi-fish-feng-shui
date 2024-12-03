import { Bell, Menu, Search, X } from 'lucide-react';
import { useState } from 'react';



const HeaderAdmin = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <header className="bg-white shadow-md z-20 justify-items-end">
            <div className="container w px-6 py-4 flex justify-between items-center">
            <div className="flex-1 flex items-center justify-center sm:justify-center">
                <div className="relative">
                <input
                    type="text"
                    placeholder="Search..."
                    className="bg-gray-100 text-gray-800 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <Search className="h-5 w-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
                </div>
            </div>
            <div className="flex items-center">
                <button className="text-gray-500 hover:text-gray-700 mr-4">
                <Bell className="h-6 w-6" />
                </button>
                <img 
                src="/placeholder.svg?height=40&width=40&text=Admin" 
                alt="Admin Avatar" 
                className="h-10 w-10 rounded-full border-2 border-red-500"
                />
            </div>
            </div>
        </header>
  )
}

export default HeaderAdmin