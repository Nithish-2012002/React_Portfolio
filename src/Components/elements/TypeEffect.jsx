import React, { useEffect, useState } from "react";
import {useTypewriter,Cursor} from 'react-simple-typewriter'

const Typing = () => {
  const [text] = useTypewriter({
    words:['Web Developer','Designer','Problem Solver'],
    loop:{},
  })
  const [nameDisplay] = useTypewriter({
    words:['Nithish Kumar R'],
    
  })
  return(
    <>
        <div className="mx-auto w-full text-center lg:block lg:text-left">
        <p className="text-white text-xl">Hey There I'm</p>
        <span className="text-white text-[200%] lg:text-[480%] font-[600]">
        {nameDisplay}
        <Cursor/>
      </span>
      </div>
      <div className="mx-auto w-full text-center lg:block lg:text-left">
          <p className="text-white text-xl">A Passionate</p>
          <span className="bg-gradient-to-r from-pink-500 to-indigo-500 text-[300%] lg:text-[480%] font-[600] ... inline-block ... text-transparent ... bg-clip-text">
        {text}
        <Cursor/>
      </span>
      </div>
    </>
  )
  };

export default Typing;
