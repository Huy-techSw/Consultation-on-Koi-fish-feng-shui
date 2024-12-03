import { LogOut, Settings, User } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FengShuiLogo from "../assets/pikaso_texttoimage_Koi-Feng-Shui-Logo.png";
import { Button } from "./ui/button";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Initially dropdown is closed
  const navigate = useNavigate();

  const toggleDropdown = () => setIsDropdownOpen(prev => !prev); // Toggle dropdown state

  const handleProfileClick = () => {
    // Profile click action (e.g., navigate to profile page)
    navigate("/profile");
    console.log("Profile clicked");
  };

  const handleSettingsClick = () => {
    // Settings click action
    console.log("Settings clicked");
  };

  const handleLogoutClick = () => {
    
    // Log out action
    console.log("Logged out");
    localStorage.removeItem("role");
    navigate("/");
    window.location.reload();
  };

  return (
    <header className="px-4 lg:px-6 h-16 flex items-center justify-between bg-gradient-to-r from-red-800 to-red-600 text-white">
      <Link className="flex items-center" to="/">
        <img src={FengShuiLogo} height={40} width={50} alt="FengShuiLogo" />
        <span className="ml-2 text-lg font-bold text-white">Feng Shui Koi</span>
      </Link>

      <nav className="flex-grow flex justify-center gap-6 sm:gap-7">
        <Link className="text-sm font-medium hover:underline underline-offset-4" to="/">
          Home
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" to="/category">
          Category
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" to="/consulting">
          Consultation
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" to="/blog">
          Blog
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" to="/contact">
          Contact
        </Link>
      </nav>

      <div className="flex items-center space-x-4">
        {localStorage.getItem("role") === "Admin" || localStorage.getItem("role") === "Customer" ? (
          <div className="ml-3 relative">
            <Button
              variant="ghost"
              className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              onClick={toggleDropdown}
            >
              {/* User avatar */}
              <img
                src="https://github.com/shadcn.png"
                alt="User Avatar"
                className="w-8 h-8 rounded-full"
              />
            </Button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-48 z-10">
                <div onClick={handleProfileClick} className="flex items-center p-2 cursor-pointer hover:bg-gray-100 text-black">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </div>
                <div onClick={handleSettingsClick} className="flex items-center p-2 cursor-pointer hover:bg-gray-100 text-black">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </div>
                <div onClick={handleLogoutClick} className="flex items-center p-2 cursor-pointer hover:bg-gray-100 text-black">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </div>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link to="/signUp">
              <Button variant="ghost" className="bg-white text-black hover:text-red-600">
                Sign up
              </Button>
            </Link>
            <Link to="/signIn">
              <Button variant="ghost" className="bg-white text-black hover:text-red-600">
                Sign in
              </Button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
