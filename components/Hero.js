import React from "react"
import Image from "next/image"
import profile from "../public/assets/profile.jpg"

const Hero = () => {
  return (
    <div className="container px-4 mx-auto">
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:mx-4 flex flex-col-reverse text-center lg:text-left">
        <div className="lg:px-4 lg:mt-12 ">
          <h2 className="text-4xl font-bold text-gray-900 lg:text-5xl dark:text-white">
            Hey! I'm
          </h2>
          <h1 className="text-7xl font-bold text-blue-800 lg:text-8xl dark:text-white">
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
          width={250}
          height={250}
          placeholder="blur"
        />
      </div>
    </div>
  </div>
  );
};

export default Hero;