"use client";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { LogOut, User } from "lucide-react";

const Navbar = (Props) => {
  console.log(Props.navbarItems);
  return (
    <nav className="flex flex-row justify-between items-center bg-yellow-400 text-black text-16px px-4 py-4">
      <div className="flex gap-x-4">
        {Props.navbarItems.map((item) => {
          return (
            <Link key={item.id} href={item.url}>
              {item.text}
            </Link>
          );
        })}
      </div>
      <Popover>
        {/* Change Trigger*/}
        <PopoverTrigger asChild>
          <Button>Hello</Button>
        </PopoverTrigger>
        <PopoverContent className="w-50 p-2 rounded-2xl">
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
