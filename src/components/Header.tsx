import logo from './assets/logo.png'
import { Link } from "react-router-dom";
    
    export const Header = () => {
      return (
        <div className='flex justify-around p-6 border-b-1 items-center fixed z-10 w-full bg-white'>
            <div className="">
                <img src={logo} width={200} />
            </div>
            <nav className="flex">
  <ul className="flex space-x-6 text-black">
    <li><a href="#" className="hover:text-gray-400">Home</a></li>
    <li><a href="#service" className="hover:text-gray-400">Service</a></li>
    <li><a href="#featured" className="hover:text-gray-400">Featured</a></li>
    <li><a href="#feedback" className="hover:text-gray-400">Feedback</a></li>
    <li><a href="#about" className="hover:text-gray-400">About</a></li>
  </ul> 
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   
            </nav>
            <Link to="/market" className="hover:underline">
            <span className='bg-blue-300 text-black   hover:bg-blue-600 px-6 py-1 rounded-[.5rem]'> Market </span>
            </Link>
        
            
       
        </div>
      )
    }
    