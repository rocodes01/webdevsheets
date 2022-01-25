import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import { FaBars, FaGithub, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import SideNavBar from "../Components/SideNavBar/SideNavBar";
import TopNavBar from "../Components/TopNavBar/TopNavBar";

const Home: NextPage = () => {
  const [enableDarkMode, setEnableDarkMode] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <div className={`${enableDarkMode ? "dark" : ""}`}>
      <Head>
        <title>Web Dev Sheets</title>
        <meta name="description" content="web development cheat sheets" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-white dark:bg-dark dark:text-white min-h-screen min-w-full">
        <div className="flex items-center justify-between h-16 px-3 lg:px-28">
          <h3 className="font-bold text-lg">Web Dev Sheets</h3>

          <TopNavBar />
          <div className="flex items-center">
            <span
              className="mx-4 shadow-xl"
              onClick={() => {
                setEnableDarkMode((prev) => !prev);
              }}
            >
              {enableDarkMode ? <FaSun /> : <FaMoon />}
            </span>

            <button className="hidden lg:flex items-center gap-2 bg-purple-500 text-white px-3 py-2 rounded font-bold">
              <FaGithub /> Contribute
            </button>
            <button
              className="lg:hidden px-3 py-2 rounded "
              onClick={() => setShowMenu((prev) => !prev)}
            >
              {showMenu ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
        <main className="container min-h-screen relative">
          <div className="px-5 lg:px-28 py-10 grid grid-cols-1 lg:grid-cols-2 grid-rows-1 gap-4">
            <div className=" grid grid-cols-1 lg:grid-cols-2 p-2 bg-neu shadow-xl  dark:bg-tertiary h-full rounded-xl ">
              <h3 className="pl-6 py-2  text-2xl font-bold">CSS Cheat Sheet</h3>
              <p className="p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                culpa deserunt aut similique odio nihil rem nostrum omnis veniam
                quis cumque voluptatem consequuntur doloremque maxime
                blanditiis, modi voluptatum repellendus atque. Qui, illo aperiam
                quasi cumque excepturi a tempora! Exercitationem enim cumque
                officiis ipsa dolores sequi
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 p-2 bg-neu shadow-xl dark:bg-tertiary h-full rounded-xl ">
              <h3 className="pl-6 py-2  text-2xl font-bold">Tailwind CSS</h3>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                culpa deserunt aut similique odio nihil rem nostrum omnis veniam
                quis cumque voluptatem consequuntur doloremque maxime
                blanditiis, modi voluptatum repellendus atque. Qui, illo aperiam
                quasi cumque excepturi a tempora! Exercitationem enim cumque
                officiis ipsa dolores sequi quos facere architecto incidunt
                distinctio.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 p-2 bg-neu shadow-xl dark:bg-tertiary h-full rounded-xl ">
              <h3 className="pl-6 py-2 text-2xl font-bold">Blogs</h3>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                culpa deserunt aut similique odio nihil rem nostrum omnis veniam
                quis cumque voluptatem consequuntur doloremque maxime
                blanditiis, modi voluptatum repellendus atque. Qui, illo aperiam
                quasi cumque excepturi a tempora! Exercitationem enim cumque
                officiis ipsa dolores sequi quos facere architecto incidunt
                distinctio.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 p-2 bg-neu shadow-xl dark:bg-tertiary h-full rounded-xl ">
              <h3 className="pl-6 py-2  text-2xl font-bold">Contribute</h3>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                culpa deserunt aut similique odio nihil rem nostrum omnis veniam
                quis cumque voluptatem consequuntur doloremque maxime
                blanditiis, modi voluptatum repellendus atque. Qui, illo aperiam
                quasi cumque excepturi a tempora! Exercitationem enim cumque
                officiis ipsa dolores sequi quos facere architecto incidunt
                distinctio.
              </p>
            </div>
          </div>
          {/* <SideNavBar /> */}
        </main>
      </div>
    </div>
  );
};

export default Home;
