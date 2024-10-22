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
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Tabs, TabsContent } from "@/app/components/ui/tabs";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();

  const handlePendingOrders = (e) => {
    e.preventDefault();
    router.push("/dashboard/reviewOrders/procReview/pendingOrders");
  };
  const handleApprovedOrders = (e) => {
    e.preventDefault();
    router.push("/dashboard/reviewOrders/procReview/approvedOrders");
  };
  const handleRejectedOrders = (e) => {
    e.preventDefault();
    router.push("/dashboard/reviewOrders/procReview/rejectedOrders");
  };
  const handleCompletedOrders = (e) => {
    e.preventDefault();
    router.push("/dashboard/reviewOrders/procReview/completedOrders");
  };

  return (
    <Tabs defaultValue="overview" className="space-y-4 p-5">
      <TabsContent value="overview" className="space-y-4">
        <div className="flex w-full justify-between">
          <Label className="text-2xl font-semibold leading-none tracking-tight">
            Review Orders
          </Label>
          <DateRangePicker />
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card onClick={handlePendingOrders}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-2xl font-bold">
                Pending Orders
              </CardTitle>
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
              <div className="text-sm font-medium">Orders to be approved</div>
              <p className="text-xs text-muted-foreground">
                Click here to view
              </p>
            </CardContent>
          </Card>
          <Card onClick={handleApprovedOrders}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-2xl font-bold">
                Approved Orders
              </CardTitle>
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
              <div className="text-sm font-medium">Orders to be completed</div>
              <p className="text-xs text-muted-foreground">
                Click here to view
              </p>
            </CardContent>
          </Card>
          <Card onClick={handleRejectedOrders}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-2xl font-bold">
                Rejected Orders
              </CardTitle>
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
              <div className="text-sm font-medium">Problamatic orders</div>
              <p className="text-xs text-muted-foreground">
                Click here to view
              </p>
            </CardContent>
          </Card>
          <Card onClick={handleCompletedOrders}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-2xl font-bold">
                Completed Orders
              </CardTitle>
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
              <div className="text-sm font-medium">Resolved orders</div>
              <p className="text-xs text-muted-foreground">
                Click here to view
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid  lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Search Orders</CardTitle>
              <CardDescription>Search a specific order here</CardDescription>
            </CardHeader>
            <CardContent>
              <Input placeholder="Order ID"></Input>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button>Review</Button>
            </CardFooter>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <overview />
            </CardContent>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default Page;
