import React from 'react'

const Card = ({title,genre,year,description,studio}) => {
  return (
    <>
     
      {/* <div className="bg-linear-to-b from-[#7B01FD] to-[#FF0000]"> */}
        <div className="flex justify-start items-center h-screen gap-0 ">
        <div className='absolute  bottom-160 left-1'>

        {/* <h1 className='text-4xl text-white font-bold'>OCT 1999</h1>
        <h1 className='text-9xl text-white font-black'>20</h1> */}
        </div>
          <div className="bg-[url(luffy.jpeg)] bg-contain h-[341px] w-[403px] border-4 border-white rounded-xl z-20"></div>
          <div className="h-[471px] w-[471px] skew-x-[19deg]  rounded-2xl bg-linear-to-b from-[#FFCC00] to-[#00FF99] ">
            <div className="skew-x-[-19deg]  text-white  text-center">
              <h1 className="text-3xl font-bold font-bebas ">{title}</h1>
              <div className="flex flex-col justify-center mt-8">
                <h2 className="font-semibold ">Japanese: {title}</h2>
                <h2 className="font-semibold">Synonyms: OP</h2>
                <h2 className="font-semibold">Aired: Oct 20, {year} to ?</h2>
                <h2 className="font-semibold">Premiered: Fall 1999</h2>
                <h2 className="font-semibold">Duration: 24m</h2>
                <h2 className="font-semibold">Status: Currently Airing</h2>
                <h2 className="font-semibold">MAL Score: 8.62</h2>
              </div>
              <hr className=" bg-white" />
              <div className="ml-8">
                <p className="">
                  Genres:{genre}
                </p>
              </div>
              <hr className=" bg-white ml-9.5" />
              <div className="ml-8">
                <h2>Studios: {studio}</h2>
                <h2>
                  Producers: Fuji TV, TAP, Shueisha, Toei Animation, Funimation,
                  4Kids Entertainment
                </h2>
              </div>
            </div>
          </div>
          <div className=" h-[251px] flex justify-center items-center z-30 absolute mt-[600px] bg-white  rounded-xl w-full">
            <p className="text-[16px] w-[1300px] font-Abril ">
              {description}
      
              
            </p>
          </div>
        </div>
      {/* </div> */}
    </>
  );
}

export default Card
