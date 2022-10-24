import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div className='mx-auto ml-20'>
            <div className="navbar bg-transparent fixed w-[85%]">
            <div className="flex-1">
                <img className='w-32 text-white' src={logo} alt="" />
                {/* <Link to='/home' className="btn btn-ghost normal-case text-xl">Travel Guru</Link> */}
            </div>
            <div className="flex-none gap-2 ">
                <div className="form-control">
                <input type="text" placeholder="Search your destination" className="input input-bordered" />
                </div>
                <div className="dropdown dropdown-end">
      
     <div >
        <ul className='flex ml-10 items-center text-white'>
            <Link to='/news'> <li className='mr-16'>News</li></Link>
            <Link to='/destination'> <li className='mr-16'>Destination</li></Link>
            <Link to='/blogs'> <li className='mr-16'>Blogs</li></Link>
            <Link to='/contact'> <li className='mr-16'>Contact</li></Link>
              
            <button className="btn btn-warning">Login</button>

        </ul>
      </div>
    </div>
  </div>
            </div>
        </div> 
    );
};

export default Header;