import React from 'react'

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen gap-0 ">
        <span className="text-9xl font-bold text-black inline-block absolute ">Loading</span>
      <img
        src="gojo.gif"
        alt="loading..."
        className="w-82 h-90  scale-x-[-1] "
      />
    </div>
  );
}

export default Loading
