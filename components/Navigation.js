import Link from "next/link"
import { useRouter } from 'next/router'
import React from "react"
import DarkMode from "./DarkMode";
import userData from "../constants/data";

const Navigation = () => {
  const router = useRouter();
  console.log(router.asPath);
  return (
    <div className="sticky top-0 z-20 py-2 bg-gray-50 md:py-6 md:mb-6 dark:bg-black">
      <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
        <div className="flex flex-col">
          <Link href="/">
          <a>
            <h1
              className={"text-xl font-semibold transition-colors text-gray-900 hover:text-blue-500 dark:text-white"}>
              {userData.name}
            </h1>
            <p className="text-sm font-light text-gray-500 dark:text-gray-300"> 
              {userData.designation}
            </p>
          </a>
          </Link>
        </div>
        <div className="space-x-8 hidden md:block">
          <Link href="/about">
            <a
              className={`text-base  ${
                router.asPath === "/about"
                  ? "text-gray-800 font-bold dark:text-gray-400"
                  : "text-gray-600 dark:text-gray-300 font-normal "
              }`}
            >
              About{" "}
              {router.asPath === "/about" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-down inline-block h-3 w-3"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                  />
                </svg>
              )}
            </a>
          </Link>
          </div>
        <DarkMode />
      </div>
    </div>
  );
}

export default Navigation;