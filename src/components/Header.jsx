import { useState, useEffect } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsAdminLoggedIn(!!localStorage.getItem("CCAdminToken"));
  }, []);


  const handleOnClick = (to) => {
    setIsVisible(!isVisible);
    navigate(to);
  };
  return (
    <div className="header-container flex h-20 xl:h-28 items-center px-6 xl:px-14">
      <img
        src="/logo.png"
        className="w-40  mr-auto cursor-pointer"
        alt="logo"
        onClick={() => navigate("/")}
      ></img>
      <button className="md:hidden" onClick={() => setIsVisible(!isVisible)}>
        <IoMenu size={30} />
      </button>
      <div className="hidden md:flex text-xs md:gap-4 lg:text-base lg:gap-6 xl:gap-11 transition-all">
        <Link to="/" className="relative  group cursor-pointer">
          Home
          <span className="absolute bottom-2 left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </Link>
      
        <Link to="/events" className="relative  group cursor-pointer">
          Events
          <span className="absolute bottom-2 left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </Link>

        <Link to="/execom" className="relative  group cursor-pointer">
          Execom
          <span className="absolute bottom-2 left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </Link>

        <Link to="/contacts" className="relative  group cursor-pointer">
          Contact
          <span className="absolute bottom-2 left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </Link>

        <button
        className="bg-gradient-to-r from-blue-600 to-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:from-blue-700 hover:to-red-600 transition-colors duration-200 -mt-1"
        onClick={(e) => {
          e.preventDefault();
          navigate(isAdminLoggedIn ? "/admin-dashboard" : "/Login");
        }}
      >
        Login
      </button>

      </div>

      <div
        className={`md:hidden fixed top-0 flex flex-col h-screen w-screen justify-between items-center p-10 text-xs md:gap-4 lg:text-base lg:gap-6 xl:gap-11 transition-all bg-black z-[1000] ${
          isVisible ? "right-0" : "-right-[150%]"
        }`}
      >
        <div className="flex w-full justify-end">
          <button
            className="md:hidden"
            onClick={() => setIsVisible(!isVisible)}
          >
            <IoClose size={30} />
          </button>
        </div>
        <div className="flex flex-col gap-5 justify-evenly items-center h-full">
          <div
            to="/"
            className="relative  group cursor-pointer"
            onClick={() => handleOnClick("/")}
          >
            Home
            <span className="absolute bottom-2 left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
          </div>
        
          <button
            className="relative  group cursor-pointer"
            onClick={() => handleOnClick("/events")}
          >
            Events
            <span className="absolute bottom-2 left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
          </button>

          <button
            className="relative  group cursor-pointer"
            onClick={() => handleOnClick("/execom")}
          >
            Execom
            <span className="absolute bottom-2 left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
          </button>

          <button
            className="relative  group cursor-pointer"
            onClick={() => handleOnClick("/contacts")}
          >
            Contact
            <span className="absolute bottom-2 left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
          </button>

          <button
            className="bg-gradient-to-r from-blue-600 to-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:from-blue-700 hover:to-red-600 transition-colors duration-200 -mt-1"
            onClick={(e) => {
              e.preventDefault();
              navigate(isAdminLoggedIn ? "/admin-dashboard" : "/admin-login");
            }}
          >
            {isAdminLoggedIn ? "Admin-in" : "Admin-Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
