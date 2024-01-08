import { IoRocket } from "react-icons/io5";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { IoMdGlobe } from "react-icons/io";
const Section_3 = () => {
    return ( 
        <div>
            <div  className=" container flex  justify-center text-2xl md:text-6xl items-center content-center mx-auto mt-5 text-gray-200 " id="sec-3-heading">
                More About Me
            </div>
            <section  className=" flex md:flex-row flex-col items-center content-center justify-between  m-3" id="sec-3">
                
                <div className="container flex flex-col items-center content-center flex-wrap text-3xl md:text-4xl text-left space-y-3 bg-white py-8 px-2 max-w-xl rounded-2xl m-3 hover:text-white hover:bg-gray-800 duration-500 ease-in-out " id="Sec-3-content">
                    <h3 className="text-3xl font-semibold gap-4 flex">
                    <IoRocket className="text-red-700" /> What Sets Me Apart:
                    </h3>
                    <ul className="space-y-3">
                        <li className="  text-lg max-w-lg flex"><FaArrowAltCircleRight className="w-32 text-red-700" /> Full Stack Expertise: Proficient in a diverse range of frontend and backend technologies, ensuring end-to-end development excellence.</li>
                        <li className="text-lg max-w-lg flex"><FaArrowAltCircleRight className="w-32 text-red-700" />User-Centric Approach: A keen eye for user experience design, delivering interfaces that are not only visually appealing but also highly functional.</li>
                        <li className="text-lg max-w-lg flex"><FaArrowAltCircleRight  className="w-32 text-red-700" />Problem Solver: Enthusiastic about tackling challenges head-on, with a track record of implementing creative solutions that exceed expectations.</li>
                    </ul>
                </div>
                <div className="container flex flex-col items-center content-center flex-wrap text-lg text-left space-y-3 bg-white  px-2 max-w-xl rounded-2xl m-3 p-5  hover:text-white hover:bg-gray-800 duration-500 ease-in-out  " id="Sec-3-content">
                <h3 className="text-3xl font-semibold gap-4 flex">
                    <IoRocket className="text-red-700" /> Explore my projects
                    </h3>
                    <ul className="space-y-3">
                        <li className="  text-lg max-w-lg flex"><FaArrowAltCircleRight className="w-32 text-red-700" />Explore My Work:  Visit my Github to delve deeper into my projects and get a feel for my development style.</li>
                        <li className="text-lg max-w-lg flex"><FaArrowAltCircleRight className="w-32 text-red-700" />Let's Connect: I am open to exciting opportunities and collaborations. feel free to reach out via Github or Email.</li>
                        <li className="text-lg max-w-lg flex"><FaArrowAltCircleRight className="w-32 text-red-700" />What's Next :  I am eager to contribute my skills and passion to your team. Let's create something extraordinary together! Get in Touch</li>
                       
                    </ul>
                  
                </div>
            </section>
        </div>
     );
}   
 
export default Section_3;   