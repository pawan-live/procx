"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";
import { LogOut, User } from "lucide-react";
import Link from "next/link";
import React from "react";

import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

const Navbar = (Props) => {
  console.log(Props.navbarItems);
  return (
    <nav className="flex flex-row justify-between items-center bg-white shadow-md text-black text-16px px-6 py-4">
      <div className="flex gap-x-2">
        {Props.navbarItems.map((item) => {
          return (
            <Link
              className="px-4 py-1 rounded-md hover:bg-slate-100"
              key={item.id}
              href={item.url}
            >
              {item.text}
            </Link>
          );
        })}
      </div>

      <Popover>
        {/* Change Trigger*/}
        <PopoverTrigger asChild>
          <Avatar
            className="cursor-pointer outline-3 outline-slate-300 hover:outline"
            onClick={() => {}}
          >
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className="w-50 p-2 rounded-2xl mt-2 mr-5">
          <div className="grid grid-gap-2 gap-y-2">
            <Button variant="outline" className="rounded-xl">
              <User strokeWidth={3} className="mr-5 h-4 w-4" color="#2B4E36" />
              My Profile
            </Button>
            <Button variant="outline" className="rounded-xl">
              <LogOut
                strokeWidth={3}
                className="mr-5 h-4 w-4"
                color="#2B4E36"
              />
              Sign Out
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </nav>
  );
};

export default Navbar;
