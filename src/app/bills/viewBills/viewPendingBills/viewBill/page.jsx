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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import MinusCircle from "@/app/components/ui/minus-circle";
import PlusCircle from "@/app/components/ui/plus-circle";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";
import { Tabs, TabsContent } from "@/app/components/ui/tabs";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";

const Page = () => {
  const router = useRouter();

  const handleApprove = (e) => {
    e.preventDefault();
    router.push("/bills/viewBills/viewApprovedBills/viewBill");
  };

  return (
    <Tabs defaultValue="overview" className="space-y-4 p-5">
      <TabsContent value="overview" className="space-y-6">
        <div className="flex w-full justify-between">
          <Label className="text-2xl font-semibold leading-none tracking-tight">
            View Pending Bill
          </Label>
          <DateRangePicker />
        </div>

        <Card className="col-span-4">
          <CardHeader className="space-y-2">
            <div className="flex-col space-y-3">
              <CardTitle>Invoice No. </CardTitle>
              <Input value="0001089238" className="w-40 " />
            </div>
            <form>
              <div className="flex flex-col md:flex-row gap-x-4 gap-y-4 w-full">
                <div className="flex flex-col space-y-1.5 w-full lg:w-1/2">
                  <Label>Supplier ID</Label>
                  <Input type="text" readOnly></Input>
                  <Label>Site Manager ID</Label>
                  <Input type="text" readOnly></Input>
                </div>

                <div className="flex flex-col space-y-1.5 w-full lg:w-1/2">
                  <Label>Supplier Name</Label>
                  <Input type="text" readOnly></Input>
                  <Label>Site</Label>
                  <Input type="text" readOnly></Input>
                </div>
              </div>
            </form>
          </CardHeader>
          <CardContent>
            <Table>
              <TableBody>
                <TableRow>
                  <TableHead>Item ID</TableHead>
                  <TableHead>Item Name</TableHead>
                  <TableHead>Unit Price</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead></TableHead>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <Input id="itemId" value="sc" readonly />
                  </TableCell>
                  <TableCell>
                    <Input id="itemName" value="sc" readonly />
                  </TableCell>
                  <TableCell>
                    <Input id="unitPrice" value="sc" readonly />
                  </TableCell>
                  <TableCell>
                    <Input id="qty" value="sc" readonly />
                  </TableCell>
                  <TableCell>
                    <Input id="amount" value="sc" readonly />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="grid  lg:grid-cols-1">
          <Card>
            <CardHeader>
              <CardTitle>Checking Process</CardTitle>
              <CardDescription>Procurement Department Review</CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="flex flex-col md:flex-row gap-x-4 gap-y-4 w-full">
                  <div className="flex flex-col space-y-1.5 w-full lg:w-1/2">
                    <Label>Checked By</Label>
                    <Input value="staffID" readOnly></Input>
                  </div>

                  <div className="flex flex-col space-y-1.5 w-full lg:w-1/2">
                    <Label>Quantity Status</Label>
                    <Input value="qty" readOnly></Input>
                  </div>
                  <div className="flex flex-col space-y-1.5 w-full lg:w-1/2">
                    <Label>Quality Status</Label>
                    <Input value="qlt" readOnly></Input>
                  </div>
                </div>
                <Label>Comments</Label>
                <Input value="cmnt" readOnly></Input>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col md:flex-row gap-x-40 gap-y-4 w-full">
              <div className="flex flex-col space-y-3">
                <div className="flex flex-row  gap-x-28">
                  <Button onClick={handleApprove} className="w-44">
                    Approve
                  </Button>
                  <Button className="w-44" variant="destructive">
                    Reject
                  </Button>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default Page;
