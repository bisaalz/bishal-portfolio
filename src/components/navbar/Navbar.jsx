import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <div className="relative">
        <div className="heroBackground bg-gradient-to-r from-[#0B1062] to-[#710834] bg-no-repear bg-center bg-cover">
          <div className="bg-[#F0F6FD] z-40 2xl:h-[68px] h-[68px] boxShadow sticky top-0 text-white">
            <div className="container">
              <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a
                  href="https://bishalghimire007.netlify.app/"
                  class="flex items-center"
                >
                  <span class="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-[#ffffff] to-[#ffffff]">
                    Bis<span className="text-[#DC2626]">hal</span>
                  </span>
                </a>
                <div class="flex md:order-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ transform: "none", transformOrigin: "12px 12px" }}
                    class="h-6 w-6 mt-2 md:mt-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      transform-origin="12px 12px"
                    ></path>
                  </svg>
                  <button
                    data-collapse-toggle="navbar-sticky"
                    type="button"
                    class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-sticky"
                    aria-expanded="false"
                  >
                    <span class="sr-only">Open main menu</span>
                    <svg
                      class="w-5 h-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 17 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15"
                      />
                    </svg>
                  </button>
                </div>
                <div
                  class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                  id="navbar-sticky"
                >
                  <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700">
                    <li>
                      <a
                        href="#"
                        class="block py-2 pl-3 pr-4 text-white  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#F55F29] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        HOME
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block py-2 pl-3 pr-4 text-white  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#F55F29] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        ABOUT
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block py-2 pl-3 pr-4 text-white  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#F55F29] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        MY PROJECT
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block py-2 pl-3 pr-4 text-white  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#F55F29] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        CONTACT
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[40%] left-[12%] container">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="space-y-2">
              <h6 className="text-[#ffffff] font-medium">
                HELLO THERE, WELCOME TO MY SITE
              </h6>
              <span className="text-[#ffffff] font-medium text-4xl">
                I'am Bishal Ghimire
              </span>
              <h2
                class="font-medium text-4xl md:text-5xl xl:text-7xl !leading-[114%] text-[#ffffff] "
                style={{ opacity: "1", transform: "none" }}
              >
                <span className="text-[#DC2626]">A Frontend</span> &amp; UI/UX
                Designer
              </h2>
            </div>

            <div>1</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
