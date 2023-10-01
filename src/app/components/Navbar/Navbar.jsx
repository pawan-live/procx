"use client";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

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
        {/*  */}
      </div>
      <Button>Hello</Button>
    </nav>
  );
};

export default Navbar;
