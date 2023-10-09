"use client";

import { usePathname } from "next/navigation";
import React from "react";

const BreadCrumbs = () => {
  const pathname = usePathname();
  const pages = pathname.split("/").filter((page) => page !== "");

  return (
    <div>
      {pages.map((page, index) => (
        <span className="capitalize" key={index}>
          {page}
          {index !== pages.length - 1 && " > "}
        </span>
      ))}
    </div>
  );
};

export default BreadCrumbs;
