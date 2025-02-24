import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Footer = () => {
  const footer =useRef(null)
  function handleclick(url) {
   
        window.open(url, "_blank");
     

  }
  return (
    <div
      className="bg-[url(/footer1.png)] bg-cover bg-center lg:h-[250px] h-[50px] lg:border-t-4 border-t-2 border-white"
      ref={footer}
    >
      <h2 className="font-bold text-[20px] text-white  cursor-pointer ml-10">
        About
        <motion.div
          className="relative left-0 bottom-0 w-20 h-[2px] bg-white"
          initial={{ scaleX: 0 }}
          // animate={{ scaleX: 1 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        ></motion.div>
      </h2>
      <h3 className="text-white font-medium lg:text-[16px] mt-5 w-96 ml-10">
        "Anime can be epic, emotional… and sometimes just downright bizarre! We
        dive deep into the weirdest, wildest, and most mind-bending anime out
        there. From surreal storytelling to unexpected plot twists, we celebrate
        the shows that make you say, ‘What did I just watch?!’ Vote, explore,
        and embrace the weirdness!"
      </h3>
      <div className=" font-bold text-[20px] text-white cursor-pointer absolute lg:right-100 lg:-bottom-250">
        Contact
        <motion.div
          className="relative left-0 bottom-0 w-20 h-[2px] bg-white"
          initial={{ scaleX: 0 }}
          // animate={{ scaleX: 1 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        ></motion.div>
        <div className="flex mt-6 absolute -bottom-15 lg:gap-3">
          <motion.img
            initial={{ scale: 1 }}
            whileTap={{ scale: 0.7 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            src="/linkedin.png"
            className="lg:h-10 lg:w-10 hover:scale-120 "
            alt="facebook"
            onClick={() => {
              handleclick(
                "https://www.facebook.com/profile.php?id=100092567302481"
              );
            }}
          />

          <motion.img
            initial={{ scale: 1 }}
            whileTap={{ scale: 0.7 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            src="/github.png"
            className="lg:h-10 lg:w-10 hover:scale-120 "
            alt="github"
            onClick={() => {
              handleclick("https://github.com/Vigneshwaran-star");
            }}
          />

          <motion.img
            initial={{ scale: 1 }}
            whileTap={{ scale: 0.7 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            src="/twitter.png"
            className="lg:h-9 lg:w-9 hover:scale-120  "
            alt="twitter"
            onClick={() => {
              handleclick("https://twitter.com/Vigneshwaran_");
            }}
          />
        </div>
      </div>
      <hr className="bg-white h-0.5" />
      <h4 className="text-white flex justify-center">
        Copyright © 2023 The WooAnime
      </h4>
    </div>
  );
};

export default Footer;
