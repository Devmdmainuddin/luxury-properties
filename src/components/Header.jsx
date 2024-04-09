import { Link, NavLink } from "react-router-dom";
import { RiMenu2Line } from "react-icons/ri";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { BsCartCheck } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
// import { IoPersonOutline } from "react-icons/io5";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import '../App.css'
const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const handlelogOut = () => {
        logOut()
            .then(() => console.log('user logged successfully'))
            .catch(error => console.error(error))
    }
    return (
        
        <div className='px-4 py-5  max-w-[1170px] mx-auto md:px-24 lg:px-8'>
            <div className='relative flex items-center justify-between'>
                <Link
                    to='/'
                    aria-label='HeroGadget'
                    title='HeroGadget'
                    className='inline-flex items-center'
                >

                    <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 '>
                        Luxury <span>Properties</span>
                    </span>
                </Link>
                <ul className='items-center hidden gap-x-6 lg:flex'>
                    <li>
                        <NavLink
                            to='/'
                            aria-label='Home'
                            title='Home'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/contact'
                            aria-label='contact'
                            title='contact'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        >
                            Contact
                        </NavLink>
                    </li>
                   
                    <li>
                        <NavLink
                            to='/about'
                            aria-label='About Us'
                            title='About Us'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        >
                            About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/updateProfile'
                            aria-label='Update Profile'
                            title='Update Profile'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        >
                            UpdateProfile
                        </NavLink>
                    </li>
                    

                </ul>
                <div className=" hidden  lg:flex items-center gap-x-3">
                <CiHeart className="text-2xl hover:text-cyan-700"></CiHeart>
                <BsCartCheck className="text-2xl hover:text-cyan-700"></BsCartCheck>
                    {
                        user? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img aria-label='About Us'
                            title={`${user.displayName}`} className="z-[1111]" src={user?.photoURL || "https://i.ibb.co/n3pxCKM/profile.png" } />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1111] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm  btn-ghost">{user?.displayName||'user name not found'}</button>

                                </li>
                                <li>
                                    <button
                                        onClick={handlelogOut}
                                        className="btn btn-sm  btn-ghost">Logout</button>

                                </li>
                            </ul>
                        </div>
                            : <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="">
                                <div className="w-10 ">
                                   <p>profile</p>
                            
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1111] p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to='/login'>
                                <button className="btn btn-sm  btn-ghost">login</button>
                            </Link>
            
                            </ul>


                            </div>
                            
                    }
                    
                </div>


                <div className='lg:hidden'>
                    <button
                        aria-label='Open Menu'
                        title='Open Menu'
                        className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <RiMenu2Line></RiMenu2Line>
                    </button>
                    {isMenuOpen && (
                        <div className='absolute z-10 top-0 left-0 w-full'>
                            <div className='p-5 bg-white border rounded shadow-sm'>
                                <div className='flex items-center justify-between mb-4'>
                                    <div>
                                        <Link
                                            to='/'
                                            aria-label='Luxury Properties'
                                            title='Luxury Properties'
                                            className='inline-flex items-center'
                                        >

                                            <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                                                Luxury <span>Properties</span>
                                            </span>
                                        </Link>
                                    </div>
                                    <div>
                                        <button
                                            aria-label='Close Menu'
                                            title='Close Menu'
                                            className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <IoMdCloseCircleOutline></IoMdCloseCircleOutline>
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className='space-y-4'>
                                        <li>
                                            <Link
                                                to='/contact'
                                                aria-label='contact'
                                                title='contact'
                                                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                            >
                                                contact us
                                            </Link>
                                        </li>
                                       
                                        <li>
                                            <Link
                                                to='/about'
                                                aria-label='About Us'
                                                title='About Us'
                                                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                            >
                                                About Us
                                            </Link>
                                        </li>
                                    </ul>
                                    {
                        user? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img aria-label='About Us'
                            title={`${user.displayName}`} className="z-[1111]" src={user?.photoURL || "https://i.ibb.co/y0yrnYQ/1681283571946.jpg" } />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1111] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm  btn-ghost">{user?.displayName||'user name not found'}</button>

                                </li>
                                <li>
                                    <button
                                        onClick={handlelogOut}
                                        className="btn btn-sm  btn-ghost">Logout</button>

                                </li>
                            </ul>
                        </div>
                            : <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="">
                                <div className="w-10 ">
                                   <p>profile</p>
                            
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1111] p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to='/login'>
                                <button className="btn btn-sm  btn-ghost">login</button>
                            </Link>
            
                            </ul>


                            </div>
                            
                    }
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;