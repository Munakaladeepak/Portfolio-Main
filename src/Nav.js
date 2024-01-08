import logo from './img/logo_transparent.png';
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
    return (
        <div  id="Nav" className=' p-3 '>
            <nav className=" flex  md:flex-row  h-30 justify-between overflow-hidden">
                {/* logo here */}
                <div className="">
                    <h3 className="text-2xl md:text-3xl ml-4 p-3  rounded-xl cursor-pointer text-white">
                        Portfolio 
                    </h3>
                </div>
                {/* list sec */}
                <div className="container hidden md:flex items-center justify-center text-xl md:text-xl text-white text-semibold space-x-12 ">
                    <a href="#" className='hover:text-blue-200 duration-100'>Home</a>
                    <a href="#sec-2" className='hover:text-blue-200 duration-100'>About me</a>
                    <a href="#sec-4" className='hover:text-blue-200 duration-100'>Skills</a>
                    <a href="#sec-5" className='hover:text-blue-200 duration-100'>Contact</a>
                </div>

              {/* profile */}
                <div className="m-2">
                <div className="flex justify-center items-center hover:scale-125 duration-100 " id="info_profile_nav"></div>
                </div>


                

                {/* hidden menu */}
                {/* <div className="md:hidden">
          
            <button className="bg-white  py-2 px-5 m-4 text-black rounded-lg md:hidden"  id="menubtn" >
                       <GiHamburgerMenu />
            </button>
        </div> */}
            

            </nav>
            {/* <div id="menu" className=" flex w-screen absoulute flex-col items-center self-end  py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
                      <a href="#" className='hover:text-blue-200 duration-100'>Home</a>
                    <a href="#sec-2" className='hover:text-blue-200 duration-100'>About me</a>
                    <a href="#sec-4" className='hover:text-blue-200 duration-100'>Skills</a>
                    <a href="#sec-5" className='hover:text-blue-200 duration-100'>Contact</a>
            </div> */}
        </div>
     );
}
 
export default Nav;