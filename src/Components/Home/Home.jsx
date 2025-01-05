import React from "react";
import Typing from "../elements/TypeEffect";
import DateTime from "../elements/DateTime";
import Document from "../../assets/NithishKumar_Resume.pdf"
const Home = () =>{
    return(
        <>
           <div className="items-center lg:flex"> 
            <div className="w-full lg:w-1/2 pt-32 pb-12 lg:pt-36 mx-auto items-center lg:ml-4">
                <div className="mx-auto w-full justify-center float-center">
                    <div className="items-center ...">
                         <Typing />
                    </div>
                    <div className="items-center ...">
                        <div className="mt-8 mx-auto w-full items-center ... flex lg:block">  
                        <button  className="text-white mx-auto pt-2 pb-2 border-2 border-white pr-4 pl-4 bg-black whitespace-nowrap lg:font-[500] rounded-md hover:transition transform duration-105 hover:scale-105 shadow-lg shadow-green-500"><a href={Document}>Download Resume</a></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <div className="mx-auto w-full">
                <DateTime/>
                </div>
            </div>
            </div>
            <div className="w-full mt-8 px-6 lg:mt-0 lg:px-4 lg:w-12/12">
                <p className="text-white text-xs lg:text-lg text-justify">Born in the vibrant town of Kovilpatti, nestled in the heart of Thoothukudi, India, I am a passionate Software Developer and a proud BE CSE Graduate of 2024.

Fueled by curiosity and a love for technology, I specialize in crafting innovative solutions that bridge creativity and code. With a strong foundation in computer science and hands-on experience, I'm on a mission to design impactful digital experiences that make a difference.

💡 Let's build something amazing together!</p>
            </div>
        </>
    );
}
export default Home;