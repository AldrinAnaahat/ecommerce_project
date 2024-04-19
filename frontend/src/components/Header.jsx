import React from 'react'
import logo from '../assest/banner/logo.jpg'
import { GrSearch } from "react-icons/gr";
import { FaRegUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='h-16 shadow-md bg-white'>
        <div className='container mx-auto h-full flex justify-between items-center px-1'>
            <div className=''>
                <Link to={'/'}>
                <img src={logo} alt="" className='w-[180px] h-[50px] object-cover'/>
                </Link>
            </div>

            <div className='hidden lg:flex item-center w-full justify-between max-w-sm border rounded-full focus-within:shadow-md'>
                <input type="text" placeholder='search product here..' className='w-full outline-none pl-4 rounded-l-full'/>
                <div className='text-lg min-w-[50px] bg-orange-600 h-8 flex items-center justify-center rounded-r-full text-white'>
                    <GrSearch />
                </div>
            </div>

            <div className='flex items-center gap-6'>
                <div className='text-3xl cursor-pointer'>
                    <FaRegUserCircle/>
                </div>

                <div className='text-2xl cursor-pointer relative'>
                    <span><FaShoppingCart/></span>
                    <div className='bg-orange-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
                        <p className='text-xs'>0</p>
                    </div>
                </div>

                <div>
                    <Link to={'login'} className='px-3 py-1 rounded-full bg-orange-600 text-white hover:bg-orange-800 text-md font-semibold'>Login</Link>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header;