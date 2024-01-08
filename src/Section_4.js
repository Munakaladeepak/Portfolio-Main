import { FaHtml5 } from "react-icons/fa6";
const Section_4 = () => {
    return ( 
        <div>
          <div  className=" container flex  justify-center text-2xl md:text-6xl my-3 items-center content-center mx-auto mt-5 text-gray-100 " id="sec-3-heading">
          Digital Prowess: My Technological Skills
            </div>
            <section  className=" flex flex-col py-3 content-center items-center  justify-between" id="sec-4">
                <h3 className="text-5xl text-red-700 underline  text-center">
                    Languages learned
                </h3>
                {/*progress bar sec */}
                <div className="flex flex-col w-screen m-4 p-5 ">
                <h3 className="text-4xl text-black text-left my-3">
                    Front-end:
                </h3>
                        <div className="flex justify-between mb-1">
                            <span className="text-base font-medium text-blue-800 dark:text-white ">Html</span>
                            <span className="text-sm font-medium text-blue-800 dark:text-white">95%</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-2.5 dark:bg-gray-700">
                            <div className="bg-blue-800 h-2.5 rounded-full" id="progress-bar"></div>
                        </div>
                        <div className="flex justify-between mb-1 mt-7">
                            <span className="text-base font-medium text-blue-800 dark:text-white">Css</span>
                            <span className="text-sm font-medium text-blue-800 dark:text-white">87%</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-2.5 dark:bg-gray-700">
                            <div className="bg-blue-800 h-2.5 rounded-full" id="progress-bar-css"></div>
                        </div>
                        <div className="flex justify-between mb-1 mt-7">
                            <span className="text-base font-medium text-blue-800 dark:text-white">Java Script</span>
                            <span className="text-sm font-medium text-blue-800 dark:text-white">65%</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-2.5 dark:bg-gray-700">
                            <div className="bg-blue-800 h-2.5 rounded-full" id="progress-bar-js"></div>
                        </div>
                        <div className="flex justify-between mb-1 mt-7">
                            <span className="text-base font-medium text-blue-800 dark:text-white">BootStrap</span>
                            <span className="text-sm font-medium text-blue-800 dark:text-white">85%</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-2.5 dark:bg-gray-700">
                            <div className="bg-blue-800 h-2.5 rounded-full" id="progress-bar-frame-work"></div>
                        </div>
                        <div className="flex justify-between mb-1 mt-7">
                            <span className="text-base font-medium text-blue-800 dark:text-white">Tailwind css</span>
                            <span className="text-sm font-medium text-blue-800 dark:text-white">85%</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-2.5 dark:bg-gray-700">
                            <div className="bg-blue-800 h-2.5 rounded-full" id="progress-bar-frame-work"></div>
                        </div>
                <h3 className="text-4xl text-black text-left  mt-20">
                    Database:
                </h3>
                <div className="flex justify-between mb-1 mt-5">
                            <span className="text-base font-medium text-blue-800 dark:text-white">My SQL</span>
                            <span className="text-sm font-medium text-blue-800 dark:text-white">60%</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-2.5 dark:bg-gray-700">
                            <div className="bg-blue-800 h-2.5 rounded-full" id="progress-bar-DB"></div>
                </div>
                <h3 className="text-4xl text-black text-left my-3 mt-10">
                    Back-end:
                </h3>
                <div className="flex justify-between mb-1 mt-5">
                            <span className="text-base font-medium text-blue-800 dark:text-white">PHP</span>
                            <span className="text-sm font-medium text-blue-800 dark:text-white">75%</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-2.5 dark:bg-gray-700">
                            <div className="bg-blue-800 h-2.5 rounded-full" id="progress-bar-PHP"></div>
                </div>


                <h3 className="text-4xl text-black text-left my-3 mt-10">
                    TOOLS:
                </h3>
                <div className="flex justify-between mb-1 ">
                            <span className="text-base font-medium text-blue-800 dark:text-white">Git</span>
                            <span className="text-sm font-medium text-blue-800 dark:text-white">85%</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-2.5 dark:bg-gray-700">
                            <div className="bg-blue-800 h-2.5 rounded-full" id="progress-bar-github"></div>
                </div>
                <div className="flex justify-between mb-1 mt-5">
                            <span className="text-base font-medium text-blue-800 dark:text-white">Github</span>
                            <span className="text-sm font-medium text-blue-800 dark:text-white">85%</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-2.5 dark:bg-gray-700">
                            <div className="bg-blue-800 h-2.5 rounded-full" id="progress-bar-github"></div>
                </div>
                <div className="flex justify-between mb-1 mt-5">
                            <span className="text-base font-medium text-blue-800 dark:text-white">Netlify</span>
                            <span className="text-sm font-medium text-blue-800 dark:text-white">75%</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-2.5 dark:bg-gray-700">
                            <div className="bg-blue-800 h-2.5 rounded-full" id="progress-bar-netlify"></div>
                </div>


                </div>
                

            </section>
        </div>
     );
}
 
export default Section_4;