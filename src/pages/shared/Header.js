import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import logo from '../../images/logo.png'

const Header = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then(()=>{})
        .catch(error => console.error(error))
        toast.success("you are successfully logged out.")
    }
    // console.log(user.photoURL);
    return (
        <div className='mx-auto ml-20'>
            <div className="navbar bg-transparent fixed w-[85%]">
            <div className="flex-1">
               <Link to='/'><img className='w-32 text-white' src={logo} alt="" /></Link> 
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
              
              <>
              { user?.uid?
                <>
                <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={`${user.photoURL}`} alt=''/>
                  </div>
                </label>
                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-white rounded-box w-52 text-black">
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li><a>Settings</a></li>
                  <li onClick={handleLogOut}><a>Logout</a></li>
                </ul>
              </div>
              </>
               :
              <>
           <Link to='/login'><button className="btn btn-warning">Login</button>
              </Link> 
              </>
              }
              </>
        </ul>
      </div>
    </div>
  </div>
            </div>
        </div> 
    );
};

export default Header;