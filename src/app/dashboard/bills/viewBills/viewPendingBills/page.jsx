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

const Page = () => {
  const router = useRouter();

  const handleReview = (e) => {
    e.preventDefault();
    router.push("/bills/viewBills/viewPendingBills/viewBill");
  };

  return (
    <Tabs defaultValue="overview" className="space-y-4 p-5">
      <TabsContent value="overview" className="space-y-4">
        <div className="flex gap-6"></div>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Review Pending Bills</CardTitle>
            <CardDescription>
              Review pending bills added by procurement department here.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableBody>
                <TableRow>
                  <TableHead>Invoice No.</TableHead>
                  <TableHead>Supplier Name</TableHead>
                  <TableHead>Site Location</TableHead>
                  <TableHead>Bill Date</TableHead>
                </TableRow>
                <TableRow>
                  <TableCell>Invoice001</TableCell>
                  <TableCell>Sri Suppliers</TableCell>
                  <TableCell>Colombo</TableCell>
                  <TableCell>Jan 30, 2022</TableCell>
                  <TableCell>
                    <Button onClick={handleReview} variant="destructive">
                      Review
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default Page;
