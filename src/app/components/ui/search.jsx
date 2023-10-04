import React from 'react'
import { Input } from "@/app/components/ui/input";

export function search() {
    return (
      <div>
        <Input
          type="search"
          placeholder="Search..."
          className="md:w-[100px] lg:w-[300px]"
        />
      </div>
    )
  }