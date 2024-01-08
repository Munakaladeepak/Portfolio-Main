import { IoMdContact } from "react-icons/io";
import img from './img/md_deepak_4323-20240104-0002.jpg'
const Section_2 = () => {
    return ( 
        <div>
            <section id="sec-2" className=" flex flex-col items-center content-center ">
                {/* About me sec */}
                {/* pic */} 
             
                <div className=" hidden md:flex justify-center items-center -mt-20" id="info_profile"> </div>
                {/* pic sec end */}

                <div className="container justify-around items-center flex mt-10 flex-wrap rounded-lg p-8  duration-500 m-3">
                    <div className="flex items-center content-center m-1" id="About_ME_IMG">
                        <img src={img} alt="" className="max-w-sm rounded-lg" />
                    </div>
                    <div className=" flex flex-col justify-center text-left mt-10 m-2 md:ml-40 text-3xl md:text-4xl  space-y-3 drop-shadow-2xl">
                    <h3 className="text-red-700 font-semibold">
                        About Me =>
                    </h3>
                    <h3 className="text-black text-3xl flex">
                     I'am<span className="text-red-800 ml-2"> M.Deepak</span>
                    </h3>
                    <div className="text-sm text-left max-w-sm text-black font-semibold space-x-10">
                    Greetings! I am M.Deepak, a passionate and versatile Full Stack Developer with a strong foundation in both frontend and backend technologies. I specialize in creating dynamic and responsive web applications, bringing ideas to life through my expertise in multiple frontend frameworks and a solid understanding of backend and database management.
                    </div>
                    <div className="flex flex-row space-x-3">
                        <a href="https://github.com/Munakaladeepak" target="blank">
                    <button className="bg-red-700 py-2 px-5 text-slate-300  leading-tight rounded-lg w-32 text-sm hover:bg-slate-300 duration-200 hover:text-red-700 hover:drop-shadow-2xl">
                        Github
                    </button>
                        </a>
                   
                    {/* <button className="bg-red-700 py-2 px-5 text-slate-300  leading-tight rounded-lg w-32 text-sm">
                        Github
                    </button> */}
                    </div>
                    
                   
                    </div>
                   
                </div>
            </section>
        </div>
     );
}
 
export default Section_2;