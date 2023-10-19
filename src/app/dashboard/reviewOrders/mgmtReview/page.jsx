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
import { ToastContainer } from "react-toastify";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  const router = useRouter();

  const handlePendingMgmtOrders = (e) => {
    e.preventDefault();
    router.push("/dashboard/reviewOrders/mgmtReview/mgmtOrders/pendingOrders");
  };
  const handleApprovedMgmtOrders = (e) => {
    e.preventDefault();
    router.push("/dashboard/reviewOrders/mgmtReview/mgmtOrders/approvedOrders");
  };
  const handleRejecetedMgmtOrders = (e) => {
    e.preventDefault();
    router.push("/dashboard/reviewOrders/mgmtReview/mgmtOrders/rejectedOrders");
  };
  const handleCompletedMgmtOrders = (e) => {
    e.preventDefault();
    router.push(
      "/dashboard/reviewOrders/mgmtReview/mgmtOrders/completedOrders",
    );
  };
  const handlePendingProcOrders = (e) => {
    e.preventDefault();
    router.push("/dashboard/reviewOrders/procReview/pendingOrders");
  };
  const handleApprovedProcOrders = (e) => {
    e.preventDefault();
    router.push("/dashboard/reviewOrders/procReview/approvedOrders");
  };
  const handleRejectedProcOrders = (e) => {
    e.preventDefault();
    router.push("/dashboard/reviewOrders/procReview/rejectedOrders");
  };
  const handleCompletedProcOrders = (e) => {
    e.preventDefault();
    router.push("/dashboard/reviewOrders/procReview/completedOrders");
  };

  return (
    <Tabs defaultValue="overview" className="space-y-4 p-5">
      <ToastContainer />
      <TabsContent value="overview" className="space-y-6">
        <div className="flex w-full justify-between">
          <Label className="text-2xl font-semibold leading-none tracking-tight">
            Review Orders
          </Label>
          <DateRangePicker />
        </div>

        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Management Orders</CardTitle>
            <CardDescription>Orders managed by the management</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card onClick={handlePendingMgmtOrders}>
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
                  <div className="text-sm font-medium">
                    Orders to be approved
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Click here to view
                  </p>
                </CardContent>
              </Card>
              <Card onClick={handleApprovedMgmtOrders}>
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
                  <div className="text-sm font-medium">
                    Orders to be completed
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Click here to view
                  </p>
                </CardContent>
              </Card>
              <Card onClick={handleRejecetedMgmtOrders}>
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
              <Card onClick={handleCompletedMgmtOrders}>
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
          </CardContent>
        </Card>

        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Procurement Department Orders</CardTitle>
            <CardDescription>
              View orders managed by the procurement department
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card onClick={handlePendingProcOrders}>
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
                  <div className="text-sm font-medium">
                    Orders to be approved
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Click here to view
                  </p>
                </CardContent>
              </Card>
              <Card onClick={handleApprovedProcOrders}>
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
                  <div className="text-sm font-medium">
                    Orders to be completed
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Click here to view
                  </p>
                </CardContent>
              </Card>
              <Card onClick={handleRejectedProcOrders}>
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
              <Card onClick={handleCompletedProcOrders}>
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
          </CardContent>
        </Card>

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
      </TabsContent>
    </Tabs>
  );
};

export default Page;
