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

  const handleCompletedReview = (e) => {
    e.preventDefault();
    router.push(
      "/dashboard/reviewOrders/procReview/completedOrders/viewCompletedOrder",
    );
  };

  return (
    <Tabs defaultValue="overview" className="space-y-4 p-5">
      <TabsContent value="overview" className="space-y-4">
        <div className="flex gap-6"></div>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Completed Orders</CardTitle>
            <CardDescription>Review completed orders</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableBody>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Order Date</TableHead>
                  <TableHead>Required Date</TableHead>
                  <TableHead>Received Date</TableHead>
                  <TableHead>Site Location</TableHead>
                  <TableHead>Budget</TableHead>
                  <TableHead>Budget Status</TableHead>
                  <TableHead>Catalogue Status</TableHead>
                </TableRow>
                <TableRow>
                  <TableCell>OID001</TableCell>
                  <TableCell>Jan 20, 2022</TableCell>
                  <TableCell>Jan 30, 2022</TableCell>
                  <TableCell>Jan 25, 2022</TableCell>
                  <TableCell>Colombo</TableCell>
                  <TableCell>200 000 LKR</TableCell>
                  <TableCell>Restricted</TableCell>
                  <TableCell>Restricted</TableCell>
                  <TableCell>
                    <Button
                      onClick={handleCompletedReview}
                      variant="destructive"
                    >
                      Review
                    </Button>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>OID002</TableCell>
                  <TableCell>Jan 30, 2022</TableCell>
                  <TableCell>Feb 10, 2022</TableCell>
                  <TableCell>Feb 05, 2022</TableCell>
                  <TableCell>Matara</TableCell>
                  <TableCell>10 000 LKR</TableCell>
                  <TableCell>Not Restricted</TableCell>
                  <TableCell>Restricted</TableCell>
                  <TableCell>
                    <Button
                      onClick={handleCompletedReview}
                      variant="destructive"
                    >
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
