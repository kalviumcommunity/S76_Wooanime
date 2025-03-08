import React from 'react'

const Card = () => {
  return (
    <>
      <div className="bg-linear-to-b from-[#7B01FD] to-[#FF0000]">
        <div className="flex justify-start items-center h-screen gap-0 ">
        <div className='absolute  bottom-160 left-1'>

        <span className='text-4xl text-white font-bold'>OCT 1999</span>
        <h1 className='text-9xl text-white font-black'>20</h1>
        </div>
          <div className="bg-[url(luffy.jpeg)] bg-contain h-[341px] w-[403px] border-4 border-white rounded-xl z-20"></div>
          <div className="h-[471px] w-[471px] skew-x-[19deg]  rounded-2xl bg-linear-to-b from-[#FFCC00] to-[#00FF99] ">
            <div className="skew-x-[-19deg]  text-white  text-center">
              <h1 className="text-3xl font-bold font-bebas ">One Piece</h1>
              <div className="flex flex-col justify-center mt-8">
                <h2 className="font-semibold ">Japanese: ONE PIECE</h2>
                <h2 className="font-semibold">Synonyms: OP</h2>
                <h2 className="font-semibold">Aired: Oct 20, 1999 to ?</h2>
                <h2 className="font-semibold">Premiered: Fall 1999</h2>
                <h2 className="font-semibold">Duration: 24m</h2>
                <h2 className="font-semibold">Status: Currently Airing</h2>
                <h2 className="font-semibold">MAL Score: 8.62</h2>
              </div>
              <hr className=" bg-white" />
              <div className="ml-8">
                <p className="">
                  Genres: Action, Adventure, Comedy, Drama, Fantasy , Shounen,
                  Super Power
                </p>
              </div>
              <hr className=" bg-white ml-9.5" />
              <div className="ml-8">
                <h2>Studios: Toei Animation</h2>
                <h2>
                  Producers: Fuji TV, TAP, Shueisha, Toei Animation, Funimation,
                  4Kids Entertainment
                </h2>
              </div>
            </div>
          </div>
          <div className=" h-[251px] flex justify-center items-center z-30 absolute mt-[600px] bg-white  rounded-xl w-full">
            <p className="text-[16px] w-[1300px] font-Abril ">
              Gold Roger was known as the "Pirate King," the strongest and most
              infamous being to have sailed the Grand Line. The capture and
              execution of Roger by the World Government brought a change
              throughout the world. His last words before his death revealed the
              existence of the greatest treasure in the world, One Piece. It was
              this revelation that brought about the Grand Age of Pirates, men
              who dreamed of finding One Piece—which promises an unlimited
              amount of riches and fame—and quite possibly the pinnacle of glory
              and the title of the Pirate King. Enter Monkey Luffy, a
              17-year-old boy who defies your standard definition of a pirate.
              Rather than the popular persona of a wicked, hardened, toothless
              pirate ransacking villages for fun, Luffy's reason for being a
              pirate is one of pure wonder: the thought of an exciting adventure
              that leads him to intriguing people and ultimately, the promised
              treasure. Following in the footsteps of his childhood hero, Luffy
              and his crew travel across the Grand Line, experiencing crazy
              adventures, unveiling dark mysteries and battling strong enemies,
              all in order to reach the most coveted of all fortunes—One Piece.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card
