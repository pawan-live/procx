"use client";

import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { DateRangePicker } from "@/app/components/ui/dateRangePicker";
import { Label } from "@/app/components/ui/label";
import { Overview } from "@/app/components/ui/overview";
import { Tabs, TabsContent } from "@/app/components/ui/tabs";
import { useRouter } from "next/navigation";
import React from "react";

import { Input } from "../../components/ui/input";

const Page = () => {
  const router = useRouter();

  const handleOrders = (e) => {
    e.preventDefault();
    router.push("/dashboard/reviewOrders/procReview");
  };
  const handlePendingBills = (e) => {
    e.preventDefault();
    router.push("/dashboard/bills/viewBills/viewPendingBills");
  };
  const handlePaidBills = (e) => {
    e.preventDefault();
    router.push("/dashboard/bills/viewBills/viewApprovedBills");
  };
  const handleSuppliers = (e) => {
    e.preventDefault();
    router.push("/dashboard/suppliers");
  };
  const handleAddItem = (e) => {
    e.preventDefault();
    router.push("/dashboard/items/add");
  };
  const handleAddSupplier = (e) => {
    e.preventDefault();
    router.push("/dashboard/suppliers/add");
  };
  const handleAddBill = (e) => {
    e.preventDefault();
    router.push("/dashboard/bills/addBill");
  };

  return (
    <Tabs defaultValue="overview" className="space-y-4 p-5">
      <TabsContent value="overview" className="space-y-4">
        <div className="flex w-full justify-between">
          <Label className="text-2xl font-semibold leading-none tracking-tight">
            Procurement Department
          </Label>
          <DateRangePicker />
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card onClick={handleOrders}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Orders</CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <path d="M2 10h20" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">View Orders</div>
              <p className="text-xs text-muted-foreground">
                Click here to view
              </p>
            </CardContent>
          </Card>
          <Card onClick={handlePendingBills}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Pending Bills
              </CardTitle>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2v10l4 4" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12 no of pending bills</div>
              <p className="text-xs text-muted-foreground">
                Click here to view
              </p>
            </CardContent>
          </Card>
          <Card onClick={handlePaidBills}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Paid Bills</CardTitle>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12 no of paid bills</div>
              <p className="text-xs text-muted-foreground">
                Click here to view
              </p>
            </CardContent>
          </Card>
          <Card onClick={handleSuppliers}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Suppliers</CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>

              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg> */}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">100 no of suppliers</div>
              <p className="text-xs text-muted-foreground">
                Click here to view
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Button onClick={handleAddItem} className="w-full">
            Add New Item
          </Button>
          <Button onClick={handleAddSupplier} className="w-full">
            Add New Supplier
          </Button>
          <Button onClick={handleAddBill} className="w-full">
            Add New Bill
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent className="flex gap-4">
              <Card className="w-full">
                <CardHeader>
                  <CardTitle className="text-sm font-medium">
                    Completed Monthly Orders
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex">
                  <Overview />
                </CardContent>
              </Card>
              <div className="grid gap-y-4 w-full lg:grid-rows-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Review Orders</CardTitle>
                    <CardDescription>
                      Search a specific order here
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Input placeholder="Order ID"></Input>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button>Review</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Review Bills</CardTitle>
                    <CardDescription>
                      Search a specific bill here
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Input placeholder="Order ID"></Input>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button>Review</Button>
                  </CardFooter>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default Page;
