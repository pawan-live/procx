"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const BreadCrumbs = () => {
  const pathname = usePathname();
  const pages = pathname.split("/").filter((page) => page !== "");

  return (
    // <div>
    //   {pages.map((page, index) => (
    //     <span className={`capitalize ${page===pages[pages.length-1]?"font-bold":""}`} key={index}>
    //       {page}
    //       {index !== pages.length - 1 && " > "}
    //     </span>
    //   ))}
    // </div>

    <div>
      {pages.map((page, index) => (
        <span key={index}>
          {index !== 0 && " > "}
          {index === pages.length - 1 ? (
            <span className="capitalize font-bold">{page}</span>
          ) : (
            <span className="capitalize">{page}</span>
          )}
        </span>
      ))}
    </div>
  );
};

export default BreadCrumbs;
