import { useState } from 'react';
import { Link ,animateScroll as scroll} from 'react-scroll';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbarState,setNavState]=useState('who');
  const handleNavbar = (value) =>{
    setNavState(value);
  }
  return (
    <div>
    <div className="bg-gradient-to-r from-pink-500 to-indigo-500 w-full fixed top-0 z-50">
      <div className="flex items-center justify-between p-4">
        <div className="w-6/12 sm:w-4/12 lg:w-3/12">
          <p className="text-white text-xl sm:text-xl md:text-xl lg:text-2xl custom-text">
            Nithish's Portfolio
          </p>
        </div>
        <div className="lg:hidden">
          <button
            className="text-white text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
        <div className="hidden lg:flex w-full">
          <div className="flex gap-6 mx-auto lg:w-6/12">
            <Link className={`text-white font-[500] hover:cursor-pointer pr-2 pl-2 pt-1 pb-1 rounded-full  ${navbarState=="who"?"text-green-500":""}`} onClick={()=>handleNavbar("who")} to="section1" smooth={true} duration={500}>Who am I</Link>
            <Link className={`text-white font-[500] hover:cursor-pointer pr-2 pl-2 pt-1 pb-1 rounded-full  ${navbarState=="skills"?"text-green-500":""}`} onClick={()=>handleNavbar("skills")} to="section2" smooth={true} offset={-100} duration={500}>Skills</Link>
            <Link className={`text-white font-[500] hover:cursor-pointer pr-2 pl-2 pt-1 pb-1 rounded-full  ${navbarState=="projects"?"text-green-500":""}`} onClick={()=>handleNavbar("projects")} to="section3" smooth={true} offset={-100} duration={500}>Projects</Link>
            <Link className={`text-white font-[500] hover:cursor-pointer pr-2 pl-2 pt-1 pb-1 rounded-full  ${navbarState=="contact"?"text-green-500":""}`} onClick={()=>handleNavbar("contact")} to="section4" smooth={true} offset={-100} duration={500}>Contact Me</Link>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-gradient-to-r from-pink-500 to-indigo-500 p-4">
          <div className="flex flex-col gap-4">
            <p className="text-white font-[500] hover:cursor-pointer"><Link to="section1" smooth={true} offset={-100} duration={500}>Who am I</Link></p>
            <p className="text-white font-[500] hover:cursor-pointer"><Link to="section2" smooth={true} offset={-100} duration={500}>Skills</Link></p>
            <p className="text-white font-[500] hover:cursor-pointer"><Link to="section3" smooth={true} offset={-100} duration={500}>Projects</Link></p>
            <p className="text-white font-[500] hover:cursor-pointer"><Link to="section4" smooth={true} offset={-100} duration={500}>Contact Me</Link></p>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}
