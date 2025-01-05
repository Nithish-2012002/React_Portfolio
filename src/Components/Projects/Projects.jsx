import React from "react";
import Bot from "../../assets/beatbot.png";
import Calculator from "../../assets/calculator.png";
import Student from "../../assets/student.png";
const Projects = () =>{
    return(
        <>
        <div className="lg:w-full px-4">
            <div className="mt-32">
                <p className="text-white text-4xl text-center font-[500]">Projects</p>
                <div className="mt-8 grid gap-16 justify-center lg:flex gap-16">
                <div className="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark w-72">
                    <div
                        className="relative overflow-hidden  bg-no-repeat"
                        data-twe-ripple-init
                        data-twe-ripple-color="light">
                        <img
                        className="rounded-t-lg  h-48 w-full object-cover"
                        src={Bot}
                        alt="" />
                        <a href="#!">
                        <div
                            className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                        </a>
                    </div>
                    <div className="p-6 text-surface dark:text-white w-full items-center">
                        <h5 className="mb-2 text-xl font-medium leading-tight text-center">Ping Pong Game</h5>
                        <p className="mb-4 text-sm text-base text-black text-justify">
                        Beat the bot is a ping pong game developed using HTML, CSS and JavaScript. The game is developed using the concept of DOM manipulation and event listeners.
                        </p>
                        <div className="w-full flex justify-center">
                        <a href="https://github.com/Nithish-2012002/Javascript-based-ping_pong-game">
                    <button className="bg-blue-500 text-xs text-white pt-2 pb-2 pl-2 pr-2 rounded-md">
                        Git Hub Link
                    </button>
                    </a>
                    <a href="https://beat-the-bot-bf460.web.app/">
                    <button className="bg-red-500 text-white pt-2 ml-2 text-xs pb-2 pl-1 pr-1 rounded-md">
                        Play in Desktop
                    </button>
                    </a>
                    </div>

                    </div>
                    </div>


                    <div className="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark w-72">
                    <div
                        className="relative overflow-hidden  bg-no-repeat"
                        data-twe-ripple-init
                        data-twe-ripple-color="light">
                        <img
                        className="rounded-t-lg  h-48 w-full object-cover"
                        src={Calculator}
                        alt="" />
                        <a href="#!">
                        <div
                            className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                        </a>
                    </div>
                    <div className="p-6 text-surface dark:text-white w-full items-center">
                        <h5 className="mb-2 text-xl font-medium leading-tight text-center">Simple Calculator</h5>
                        <p className="mb-4 text-sm text-base text-black text-justify">
                        Build Using HTML, CSS and JavaScript. This is an basic calculator which can perform basic arithmetic operations. Simple and handy Project check it on github
                        </p>
                        <div className="w-full flex justify-center">
                        <a href="https://github.com/Nithish-2012002/simple_calculator-html_css_js-">
                    <button className="bg-blue-500 text-white pt-2 pb-2 pl-4 pr-4 text-xs rounded-md">
                        Git Hub Link
                    </button>
                    </a>
                    </div>

                    </div>
                    </div>


                    <div className="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark w-72">
                    <div
                        className="relative overflow-hidden  bg-no-repeat"
                        data-twe-ripple-init
                        data-twe-ripple-color="light">
                        <img
                        className="rounded-t-lg  h-48 w-full object-cover"
                        src={Student}
                        alt="" />
                        <a href="#!">
                        <div
                            className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                        </a>
                    </div>
                    <div className="p-6 text-surface dark:text-white w-full items-center">
                        <h5 className="mb-2 text-xl font-medium leading-tight text-center">Student Management</h5>
                        <p className="mb-4 text-sm text-base text-black text-justify">
                        Built using Node.js, Express.js. This is a simple CRUD application which can perform basic operations like Create, Read, Update and Delete. Check it on github
                        </p>
                        <div className="w-full flex justify-center">
                        <a href="https://github.com/Nithish-2012002/node-crud">
                    <button className="bg-blue-500 text-white text-xs pt-2 pb-2 pl-4 pr-4 rounded-md">
                        Git Hub Link
                    </button>
                    </a>
                    </div>

                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Projects;