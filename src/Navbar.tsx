import './nav.css'
import { FaCaretDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
    
    <div className="flex flex-row justify-between px-16  py-3 sticky top-0 bg-white bg- drop-shadow-2xl z-10">
        <div>
            <img className="h-[40px]" src="./Images/vani-logo-text.svg" alt="" />
        </div>
        <div className='flex items-center gap-8'>
        <div className="group relative">
            <a className="hover:text-blue-800 text-gray-600 flex items-center gap-1  " href="">Product <FaCaretDown /></a>
            <div className='w-40 bg-slate-50 drop-shadow-2xl rounded-md flex justify-center p-4 absolute  dropdown-content transition-all ease-in duration-200 '>
              <a className='flex flex-col  text-black hover:bg-slate-100 p-2 text-sm ' href="">Feature Tour</a>
              <a className='flex flex-col  text-black hover:bg-slate-100 p-2 text-sm' href="">Catchups</a>
            </div>
            </div>
            <div className="group relative">
            <a className="hover:text-blue-800 text-gray-600 flex items-center gap-1  " href="">Solutions <FaCaretDown /></a>
            <div className='w-52 bg-slate-50 drop-shadow-2xl rounded-md flex flex-col p-4 absolute z-10  right-2   dropdown-content'>
            <p className=' mb-2 font-medium'>By Usecase</p>
            <a className='flex flex-col  text-black  hover:bg-slate-100 p-2 text-sm' href="">Brainstroming</a>
            <a className='flex flex-col  text-black  hover:bg-slate-100  p-2 text-sm' href="">Whiteboarding</a>
            <p className='font-medium mb-2'>By Team</p>
            <a className='flex flex-col  text-black  hover:bg-slate-100  p-2 text-sm' href="">Marketting</a>
            <a className='flex flex-col  text-black  hover:bg-slate-100 p-2 text-sm' href="">Product Management</a>
            </div>
            </div>
            <a className="hover:text-blue-800 text-gray-600" href="">Templates</a>
            <a className="hover:text-blue-800 text-gray-600" href="">Pricing</a>
            <a className="hover:text-blue-800 text-gray-600" href="">Help</a>
            <a className="hover:text-blue-800 text-gray-600" href="">Sign in</a>
            
            <a className=" border h-[35px] transition duration-300 ring ring-pink-500 ring-offset-0 ease-in bg-white rounded-full text-gray-600 hover:text-white hover:bg-instagram-gradient px-4 py-1" href="">Sign up</a>
            </div>
            
           {/* <button className="flex items-center border border-y-green-500 h-[35px] rounded-2xl px-4 py-1">Sign up</button> */}
        </div>
      
   

    </>
   
  )
}

export default Navbar