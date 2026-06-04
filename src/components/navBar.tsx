"use client"
import Link from "next/link"
import { useState } from "react"
import { FcMenu } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import { navLinks } from "./allData"
import { NavBarProps } from "./types"

const NavBar = ({ searchQuery, setSearchQuery }: NavBarProps) => {
    const [check, setCheck] = useState(false);
    
    const open = () => {
        console.log("clicked")
        setCheck(true);
    }
    const close = () => {
        console.log("clicked")
        setCheck(false);
    }

  return (
    <>
        <section className='w-full flex items-center py-3 justify-between sm:pr-20 px-10 bg-white/90 fixed top-0 left-0 shadow-sm backdrop-blur-sm z-50'>
            <button onClick={open} className='lg:hidden flex items-center gap-2 text-sm font-semibold cursor-pointer'>
                <FcMenu className="text-xl"/>
                <span>Menu</span>
            </button>
            <div className="hidden lg:flex gap-1 items-center ">
                {navLinks.map((links, idx) => (
                    <Link key={idx} className="px-4 py-2 transition-all duration-400 ease-in-out hover:bg-gray-200 text-sm font-semibold rounded-md" href='/'>{links.title}</Link>
                ))}
            </div>
            {check && <div className=" lg:hidden top-16 left-0 text-white rounded-b-md z-100 shadow-lg p-4 sm:w-1/2 w-full absolute bg-black">
                {navLinks.map((links, idx) => (
                    <div  key={idx}>
                        <div className="px-10 pt-5 transition-all duration-300 ease-in-out hover:bg-slate-100/30 text-sm font-semibold rounded-md cursor-pointer">
                            <Link className="flex items-center gap-2 " href='/'>
                                <span className="text-xl">{links.icon}</span>
                                <span>{links.title}</span>
                            </Link> <br/>
                        </div>
                        <hr className='opacity-60'/>
                    </div>
                ))}
                <button onClick={close}  className="px-10 py-3 text-black transition-all duration-400 hover:text-white ease-in-out hover:bg-slate-900/30 bg-gray-200 text-md font-semibold rounded-md cursor-pointer w-full">Close</button>
            </div>}

            <div className="flex items-center gap-3">
                {/* Search Bar matching query patterns dynamically */}
                <div className='border-r border-gray-900/50 my-2 h-5 hidden sm:flex flex-col items-center justify-center pr-6'>
                    <input 
                        className="px-4 py-1.5 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-slate-500/20 focus:border-transparent text-black text-sm"
                        placeholder="Search dashboard..."
                        type="text" 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="border-r border-gray-900/50 my-2 h-5 flex items-center justify-center pr-6 items-center gap-1 text-sm font-semibold px-3">
                    <FaGithub className='text-lg'/>
                    <span>115k</span>
                </div>
                <div>
                    <button className="px-4 py-1 bg-black text-white rounded-md cursor-pointer text-sm">Get Code</button>
                </div>
            </div>
        </section>
    </>
  )
}

export default NavBar
