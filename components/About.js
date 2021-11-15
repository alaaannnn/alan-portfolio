import React from "react";
import ReactTooltip from "react-tooltip";
import userData from "../constants/data";
import { ChipIcon } from "@heroicons/react/solid";

export default function About() {
  return (
    <section className="bg-white dark:bg-gray-800">

    {/* Header & Current Project */}
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          About Me.
        </h1>
      </div>
      <div className="bg-[#ddeae9] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-2xl md:text-4xl font-semibold  mx-4"
            style={{ lineHeight: "3rem" }}
          >
            {userData.about.title}. Currently working on{" "}
            <a
              className="bg-blue-500 rounded-md px-2 py-1 text-white"
              href={userData.about.currentProjectUrl}
            >
              {userData.about.currentProject} 👨‍💻
            </a>
          </p>
        </div>
      </div>
      <div className="bg-[#ddeae9] dark:bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          
          {/* Email / Resume */}
          <div className="inline-flex flex-col">
            <div>
              <h1 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
                Contact
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                Please feel free to contact me through my{" "}
                <a
                  href={`mailto:${userData.email}`}
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  email
                </a>{" "}
                and I promise to say hi back.
              </p>
            </div>
            <div className="mt-8">
              <h1 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
                Job Opportunities
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                I'm looking for a job currently, If you see me as a good fit,
                check my{" "}
                <a
                  href={userData.resumeUrl}
                  target="__blank"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  CV
                </a>{" "}
                and I'd love to work for you.
              </p>
            </div>

            {/* Social Links */}
            <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
              Social Links
            </h1>
            <div className="mt-4 ml-4">
              <div className="flex flex-row justify-start items-center ">
                <a
                  href={userData.socialLinks.facebook}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    Facebook
                  </p>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.twitter}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    Twitter
                  </p>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.github}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    GitHub
                  </p>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.linkedin}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    LinkedIn
                  </p>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.twitter}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-28 group-hover:translate-x-0 transition duration-300"></div>
                    Instagram
                  </p>
                </a>
              </div>
            </div>
          </div>
          {/* Text area */}
          <div className="col-span-1 md:col-span-2">
            {userData.about.description?.map((desc, idx) => (
              <p
                key={idx}
                className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
              >
                {desc}
              </p>
            ))}
            
            
            {/* Skills & Tech Stack */}
            <h1 className="bg-blue-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
              Skills &amp; Technology <ChipIcon className="w-10 inline-block" />
            </h1>
            <div className="flex flex-row flex-wrap mt-8">
              <img
                data-tip
                data-for="javascript"
                src="images/javascript.svg"
                className="h-20 w-20 mx-4 my-4 transition duration-500 ease-in-out transform md:w-20 hover:scale-110"
              />
              <ReactTooltip id="javascript" place="bottom" effect="solid">
                <span className="text-lg">JavaScript</span>
              </ReactTooltip>
              <img
                data-tip
                data-for="typescript"
                src="images/typescript-icon.svg"
                className="h-20 w-20 mx-4 my-4 transition duration-500 ease-in-out transform md:w-20 hover:scale-110"
              />
              <ReactTooltip id="typescript" place="bottom" effect="solid">
                <span className="text-lg">TypeScript</span>
              </ReactTooltip>
              <img
                data-tip
                data-for="html-5"
                src="images/html-5.svg"
                className="h-20 w-20 mx-4 my-4 transition duration-500 ease-in-out transform md:w-20 hover:scale-110"
              />
              <ReactTooltip id="html-5" place="bottom" effect="solid">
                <span className="text-lg">HTML5</span>
              </ReactTooltip>
              <img
                data-tip
                data-for="css3"
                src="images/css-3.svg"
                className="h-20 w-20 mx-4 my-4 transition duration-500 ease-in-out transform md:w-20 hover:scale-110"
              />
              <ReactTooltip id="css3" place="bottom" effect="solid">
                <span className="text-lg">CSS3</span>
              </ReactTooltip>
              <img
                data-tip
                data-for="react"
                src="images/react.svg"
                className="h-20 w-20 mx-4 my-4 transition duration-500 ease-in-out transform md:w-20 hover:scale-110"
              />
              <ReactTooltip id="react" place="bottom" effect="solid">
                <span className="text-lg">React</span>
              </ReactTooltip>
              <img
                data-tip
                data-for="redux"
                src="images/redux.svg"
                className="h-20 w-20 mx-4 my-4 transition duration-500 ease-in-out transform md:w-20 hover:scale-110"
              />
              <ReactTooltip id="redux" place="bottom" effect="solid">
                <span className="text-lg">Redux</span>
              </ReactTooltip>
              <img
                data-tip
                data-for="vue"
                src="images/vue.svg"
                className="h-20 w-20 mx-4 my-4 transition duration-500 ease-in-out transform md:w-20 hover:scale-110"
              />
              <ReactTooltip id="vue" place="bottom" effect="solid">
                <span className="text-lg">Vue</span>
              </ReactTooltip>
              <img
                data-tip
                data-for="nodejs"
                src="images/nodejs-icon.svg"
                className="h-20 w-20 mx-4 my-4 transition duration-500 ease-in-out transform md:w-20 hover:scale-110"
              />
              <ReactTooltip id="nodejs" place="bottom" effect="solid">
                <span className="text-lg">Node.js</span>
              </ReactTooltip>
              <img
                data-tip
                data-for="nextjs"
                src="images/nextjs.svg"
                className="h-20 w-20 mx-4 my-4 transition duration-500 ease-in-out transform md:w-20 hover:scale-110"
              />
              <ReactTooltip id="nextjs" place="bottom" effect="solid">
                <span className="text-lg">Next.js</span>
              </ReactTooltip>
              <img
                data-tip
                data-for="tailwind"
                src="images/tailwindcss-icon.svg"
                className="h-20 w-20 mx-4 my-4 transition duration-500 ease-in-out transform md:w-20 hover:scale-110"
              />
              <ReactTooltip id="tailwind" place="bottom" effect="solid">
                <span className="text-lg">Tailwind CSS</span>
              </ReactTooltip>
              <img
                data-tip
                data-for="postgresql"
                src="images/postgresql.svg"
                className="h-20 w-20 mx-4 my-4 transition duration-500 ease-in-out transform md:w-20 hover:scale-110"
              />
              <ReactTooltip id="postgresql" place="bottom" effect="solid">
                <span className="text-lg">PostgreSQL</span>
              </ReactTooltip>
              <img
                data-tip
                data-for="mongodb"
                src="images/mongodb.svg"
                className="h-20 w-20 mx-4 my-4 transition duration-500 ease-in-out transform md:w-20 hover:scale-110"
              />
              <ReactTooltip id="mongodb" place="bottom" effect="solid">
                <span className="text-lg">MongoDB</span>
              </ReactTooltip>
            </div>
            
            <div className="flex flex-row space-x-4">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                class="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor">
                <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              <p className="font-mono"> and plenty more! Check the resume!</p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}