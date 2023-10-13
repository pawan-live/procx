"use client";

import { Button } from "@/app/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();
  const handleAddSupplier = (e) => {
    e.preventDefault();
    router.push("/suppliers/addSupplier");
  };
  return (
    <div>
      <p>All Suppliers List Here</p>
      <Button onClick={handleAddSupplier}>Add New Supplier</Button>
    </div>
  );
};

export default Page;
