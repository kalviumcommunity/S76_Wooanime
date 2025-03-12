import { FaBars, FaHome, FaHeart, FaLink, FaStar } from "react-icons/fa";
import { useState } from "react";
const Navbar = () => {
  const [isopen,setIsOpen]=useState(false)
  return (
    <>
    <div className="fixed top-0 left-0 w-32 h-32 flex items-center  justify-center">
      {/* Arch Container */}
      <div className="relative w-28 h-28">
        {/* Menu Icon (Center) */}
        <button className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md cursor-pointer " onClick={()=>setIsOpen(!isopen)}>
          <FaBars className="text-purple-700 text-3xl" />
        </button>
 {isopen && (
 <>
        {/* Home Icon */}
        <button className="absolute -top-1 left-18 transform -translate-x-1/2 bg-white p-2 rounded-full shadow-md cursor-pointer hover:scale-110">
          <FaHome className="text-red-500 text-xl" />
        </button>

        {/* Heart Icon */}
        <button className="absolute top-12 left-12 transform -translate-x-1/2 bg-white p-2 rounded-full shadow-md cursor-pointer hover:scale-110">
          <FaHeart className="text-pink-500 text-xl" />
        </button>

        {/* Star Icon */}
        <button className="absolute top-20 left-2 transform -translate-x-1/2 bg-white p-2 rounded-full shadow-md cursor-pointer hover:scale-110">
          <FaStar className="text-yellow-500 text-xl" />
        </button>
 </>
)}
        {/* Link Icon */}
        {/* <button className="absolute top-14 left-2 transform -translate-x-1/2 bg-white p-2 rounded-full shadow-md">
          <FaLink className="text-blue-500 text-xl" />
          </button> */}
      </div>
    </div>
          </>
        
  );
};

export default Navbar;
