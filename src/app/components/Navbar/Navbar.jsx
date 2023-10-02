"use client";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { LogOut, User } from "lucide-react";

const Navbar = (Props) => {
  console.log(Props.navbarItems);
  return (
    <nav className="flex flex-row justify-between items-center bg-yellow-400 text-black text-16px px-4 py-4" style={{borderRadius:"0 0 0 0"}}>
      <div className="flex gap-x-4">
        {Props.navbarItems.map((item) => {
          return (
            <Link key={item.id} href={item.url}>
              {item.text}
            </Link>
          );
        })}
        {/*  */}
      </div>
      <Popover>
        <PopoverTrigger asChild>
          <Button>Hello</Button>
        </PopoverTrigger>
        <PopoverContent className="w-50 p-2">
          <div className="grid grid-gap-2 gap-y-2">
            <Button variant="outline">
              <User className="mr-5 h-4 w-4" /> My Profile
            </Button>
            <Button variant="outline">
              <LogOut className="mr-5 h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </nav>
  );
};

export default Navbar;
