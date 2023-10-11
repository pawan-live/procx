"use client";

import { Button } from "@/app/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();
  const handleViewSupplier = (e) => {
    e.preventDefault();
    router.push("/suppliers/viewSupplier");
  };
  return (
    <div>
      <p>All Suppliers List Here</p>
      <Button onClick={handleViewSupplier}>View Supplier Individually</Button>
    </div>
  );
};

export default Page;
