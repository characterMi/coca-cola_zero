import { useState } from "react"
import { icon, menu, close } from "../assets"
import { navLinks } from "../constants"

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='flex justify-between items-center shadow-xl w-[100%] bg-[#111b27]'>
      <img
        src={icon}
        alt="Logo"
        className="w-[50px] h-[50px] md:w-[80px] md:h-[80px]"
      />
      <ul className="cursor-pointer hidden sm:flex gap-5 z-50">
        {navLinks.map((link, index) => (
          <li key={index} className="hover:text-white">{link.name}</li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={toggle ? close : menu} alt="menu" className="w-[25px] h-[25px] object-contain" onClick={() => setToggle((prev) => !prev)} />
        <div className={`${toggle ? "flex" : "hidden"} p-6 bg-[#111b27] absolute top-16 right-0 mx-4 my-1 min-w-[140px] rounded-xl z-50`}>
          <ul className="list-none cursor-pointer flex flex-col justify-end items-center flex-1">
            {navLinks.map((link, index) => (
              <li key={index} className="hover:text-white">{link.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar