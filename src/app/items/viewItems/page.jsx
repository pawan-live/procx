"use client";

import { Button } from "@/app/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();
  const handleAddItem = (e) => {
    e.preventDefault();
    router.push("/items/addItems");
  };
  return (
    <div>
      <p>All Created Items List Here</p>
      <Button onClick={handleAddItem}>Add New Item</Button>
    </div>
  );
};

export default Page;
