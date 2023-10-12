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
    router.push("/reviewOrders/procReview/approveOrder");
  };

  return (
    <Tabs defaultValue="overview" className="space-y-4 p-5">
      <TabsContent value="overview" className="space-y-4">
        <div className="flex gap-6"></div>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Review Orders</CardTitle>
            <CardDescription>
              Review orders sent by site managers here.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableBody>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Order Date</TableHead>
                  <TableHead>Required Date</TableHead>
                  <TableHead>Site Location</TableHead>
                  <TableHead>Budget</TableHead>
                  <TableHead>Budget Status</TableHead>
                  <TableHead>Catalogue Status</TableHead>
                </TableRow>
                <TableRow>
                  <TableCell>OID001</TableCell>
                  <TableCell>Jan 20, 2022</TableCell>
                  <TableCell>Jan 30, 2022</TableCell>
                  <TableCell>Colombo</TableCell>
                  <TableCell>200 000 LKR</TableCell>
                  <TableCell>Restricted</TableCell>
                  <TableCell>Restricted</TableCell>
                  <TableCell>
                    <Button onClick={handleReview} variant="destructive">
                      Review
                    </Button>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>OID002</TableCell>
                  <TableCell>Jan 30, 2022</TableCell>
                  <TableCell>Feb 10, 2022</TableCell>
                  <TableCell>Matara</TableCell>
                  <TableCell>10 000 LKR</TableCell>
                  <TableCell>Not Restricted</TableCell>
                  <TableCell>Restricted</TableCell>
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
