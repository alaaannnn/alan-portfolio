import React from "react"
import Image from "next/image"
import profile from "../public/images/profile.jpg"

const Hero = () => {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="px-4 mx-auto bg-white dark:bg-gray-900">
        <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:mx-4 flex flex-col-reverse text-center lg:text-left">
          <div className="lg:px-4 lg:mt-12 ">
            <h2 className="text-5xl font-bold text-gray-900 lg:text-7xl dark:text-white">
              Hey! I'm
            </h2>
            <h1 className="text-9xl font-bold text-blue-800 lg:text-9xl dark:text-white">
              Alan
            </h1>
            <div className="mt-6 text-gray-800 dark:text-white">
              <p className="mb-4">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a
                  type specimen book.
              </p>
            </div>
          </div>
        <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
          <Image
            src={profile}
            alt="Profile"
            priority={true}
            className="rounded-full"
            width={300}
            height={300}
            placeholder="blur"
          />

          <div className="flex flex-row justify-center space-x-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-90deg-up"
              viewBox="0 0 16 16"
              >
              <path
                fillRule="evenodd"
                d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
                />
            </svg>
            <p className="font-mono">That's me!</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Hero;