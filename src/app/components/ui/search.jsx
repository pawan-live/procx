import { Input } from "@/app/components/ui/input";
import React from "react";

export function search() {
  return (
    <div>
      <Input
        type="search"
        placeholder="Search..."
        className="md:w-[100px] lg:w-[300px]"
      />
    </div>
  );
}
