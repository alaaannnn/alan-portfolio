import React from "react";

const Footer = () => {
    return (
    <div className="mt-12 lg:mt-18 sm:pb-36 sm:py-12 py-6">
      <div className="max-w-4xl px-4 mx-auto text-gray-800 dark:text-white">
        <div className="pb-8 mb-2 border-t-2 border-gray-300 dark:border-white-300"></div>
        <div className="flex flex-col justify-between lg:flex-row items-center">
          <p>Built with Next.js & TailwindCSS</p>
          <p>
              Developed by
              <div className="inline-block transform hover:scale-110 hover:-rotate-2 transition duration-300">
                <a
                  className="hover:bg-blue-800 rounded-md px-2 py-1  hover:text-gray-50"
                  href="mailto:alye13@gmail.com"
                >
                Alan Ye
                </a>
              </div>
            </p>
          <div className="flex flex-wrap pt-2 sm:space-x-4 space-x-2 font-medium lg:pt-0">
            <a
              href="https://www.linkedin.com/in/alan-ye-008/"
              className={"transition-colors hover:text-blue-500"}
              target="_blank"
              rel="noreferrer"
              >
                LinkedIn
            </a>
            <a
              href="https://github.com/alaaannnn"
              className={"transition-colors hover:text-blue-500"}
              target="_blank"
              rel="noreferrer"
              >
                GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;