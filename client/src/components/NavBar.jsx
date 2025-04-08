import React from 'react'
import { Link } from "react-router-dom";
const NavBar = ({featuresRef,footerRef}) => {
   const scrollToSection = (ref) => {
     ref.current?.scrollIntoView({ behavior: "smooth" });
   };
  return (
    <>
    <nav className='flex w-72 text-[10px] h-5 lg:w-[1200px] lg:h-[40px] rounded-3xl justify-center text-black bg-white opacity-75 animate-bounce hover:animate-none cursor-pointer absolute bottom-10 gap-1 lg:text-[16px] lg:gap-10'>
<Link to={"/login"}>

      <h1 className='cursor-pointer hover:text-blue-600 lg:mt-2 font-bold' >LOGIN</h1>
</Link>


      <h1 className='lg:text-3xl font-black'>|</h1>
      <Link to={"/signup"}>
      <h1 className='cursor-pointer hover:text-blue-600 lg:mt-2 font-bold' >SIGNUP</h1>
</Link>
      <h1 className='lg:text-3xl font-black'>|</h1>
      <h1 className='cursor-pointer hover:text-blue-600 lg:mt-2 font-bold'onClick={()=>{
        scrollToSection(featuresRef)
      }}>FEATURES</h1>
      <h1 className='lg:text-3xl font-black'>|</h1>
      <h1 className='cursor-pointer hover:text-blue-600 lg:mt-2 font-bold' onClick={()=>{
        scrollToSection(footerRef)
      }}>CONTACT</h1>
    </nav>
      </>
  )
}

export default NavBar
