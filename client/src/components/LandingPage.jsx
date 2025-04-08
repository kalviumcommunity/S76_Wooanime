import React, { useRef, useEffect } from "react";
import NavBar from "./NavBar";
import Features from "./Features";
import Footer from "./Footer";

const LandingPage = () => {
  const featuresRef = useRef(null);
  const footerRef = useRef(null);

  return (
    <>
      <audio autoPlay className=" absolute  z-20 top-0 left-0">
        <source src="/solo_leveling_arise.mp3" type="audio/mp3" />
      </audio>
      <div className="relative h-screen bg-fixed">
        <video
          className="absolute z-10 top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="/sung-jin-woo-darkness-solo-leveling-moewalls-com.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

        <div className="relative  h-full">
          <img
            src="/logo.png"
            alt=""
            className="absolute top-10 z-20 left-10 lg:relative lg:top-10 lg:left-10"
          />
          <h1 className="text-md text-white font-bold absolute top-50 z-11 w-90 ml-30">
            "Welcome to WooAnime – Where Weirdness Rules!" Anime can be epic,
            emotional… and sometimes just downright bizarre! At WooAnime, we
            dive deep into the weirdest, wildest, and most mind-bending anime
            ever created. From surreal storytelling to plot twists that make you
            say, “What did I just watch?!”—this is the place to vote, explore,
            and embrace the weirdness! Rate the weirdest anime Discover hidden
            gems Join the ultimate anime oddities showdown! Are you ready to
            step into the world of unexpected and unexplained?"
          </h1>
          <img
            src="Arise-removebg-preview.png"
            className=" absolute top-0 z-20 right-50 h-140 w-100 animate-pulse"
            alt=""
          />
          <div className="flex justify-center absolute bottom-5 w-full z-11">
            <NavBar featuresRef={featuresRef} footerRef={footerRef} />
          </div>
        </div>
      </div>

      <div ref={featuresRef}>
        <Features />
      </div>

      <div ref={footerRef}>
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
