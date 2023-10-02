"use client";
import Link from "next/link";
import Image from "next/image";
import { React, useState } from "react";

const Sidebar = (Props) => {
  console.log(Props.sidebarItmes);
  const [open, setOpen] = useState(true);

  return (
    <div className="flex h-screen  ">
      <div
        className={` ${
          open ? "w-60" : "w-20 justify-space-between items-center "
        } pr-2 pt-8  relative duration-300  rounded-r-lg bg-blue-500  flex flex-col justify-center items-center`}
      >
        <div
          className={`absolute cursor-pointer    top-4 transform transition duration-200 ease-in-out 
             ${open ? "right-4" : "rotate-180"}`}
        >
          <Image
            src={"/sideBarOpener.svg"}
            width={40}
            height={40}
            alt=""
            className="cursor-pointer p-1 rounded transition duration-300 hover:bg-gray-400"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div
          className={`${
            !open && "hidden"
          } origin-left duration-200 flex flex-col gap-y-4 `}
        >
          {Props.sidebarItmes.map((item) => {
            return (
              <Link key={item.id} href={item.url}>
                <div className="flex flex-row items-center gap-x-2  bg-white rounded transition duration-300 hover:bg-gray-400 p-2">
                  <Image
                    src={item.icon}
                    width={30}
                    height={30}
                    alt=""
                    className="cursor-pointer p-1 "
                  />
                  <span className="text-black">{item.text}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      {/* Show Bredscrum
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold pl-2">Home Page</h1>
      </div> */}
    </div>
  );
};

export default Sidebar;
