"use client";

import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { React, useState } from "react";

const Sidebar = (Props) => {
  console.log(Props.sidebarItmes);
  const [open, setOpen] = useState(true);

  return (
    <div className="relative left-0 flex h-screen">
      <div
        className={`${
          open ? "w-60" : "w-20 justify-space-between items-center"
        } pr-2 pt-8 relative duration-300  flex flex-col justify-center items-center rounded-r-3xl`}
        style={{ backgroundColor: "#E9E9E9" }}
      >
        <div
          className={`absolute cursor-pointer    top-4 transform transition duration-200 ease-in-out 
             ${open ? "right-4" : "rotate-180"}`}
        >
          <ChevronLeft
            className="w-10 h-10 cursor-pointer p-1 rounded transition duration-300 hover:bg-gray-400"
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
                <div
                  className="flex flex-row items-center gap-x-2  bg-white rounded transition duration-300 hover:bg-darkGreen p-2 w-40 group"
                  style={{ borderRadius: "16px" }}
                >
                  <Image
                    src={item.icon}
                    width={30}
                    height={30}
                    alt=""
                    className="cursor-pointer p-1 group-hover:bg-white rounded transition duration-300"
                  />
                  <span className="text-black group-hover:text-white">
                    {item.text}
                  </span>
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
