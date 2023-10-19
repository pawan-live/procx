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
import { API_URLS, BASE_URL } from "@/app/utils/constants";
import axios from "axios";
import { Eye } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import React from "react";

const Page = () => {
  const [pendingOrders, setPendingOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    getPendingOrders();
  });

  // function to send request to server
  const getPendingOrders = async () => {
    try {
      const res = await axios.get(`${BASE_URL}${API_URLS.ORDERS}`);
      console.log("SERVER response:", res);
      setIsLoading(false);
      setPendingOrders(res.data);
    } catch (error) {
      console.error("ERROR fetching data:", error);
    }
  };

  //filter ordersStatus pending
  const filterConditionPending = (order) => {
    for (let i = 0; i < order.items.length; i++) {
      console.log(order.orderStatus);
      if (order.orderStatus === "pending") {
        return true;
      }
    }
    return false;
  };

  return (
    <Tabs defaultValue="overview" className="space-y-4 p-5">
      <TabsContent value="overview" className="space-y-4">
        <div className="flex gap-6"></div>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Review Pending Orders</CardTitle>
            <CardDescription>
              Review orders added by site managers here.
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
                {pendingOrders.length > 0 &&
                  pendingOrders
                    .filter(filterConditionPending)
                    .map((pendingOrder) => (
                      <TableRow key={pendingOrder.id}>
                        <TableCell>{pendingOrder.id.toString()}</TableCell>
                        <TableCell>{pendingOrder.createdAt}</TableCell>
                        <TableCell>{pendingOrder.deliverDate}</TableCell>
                        <TableCell>{pendingOrder.site}</TableCell>
                        <TableCell>{pendingOrder.budget}</TableCell>
                        <TableCell>{pendingOrder.status}</TableCell>
                        <TableCell>{pendingOrder.catalogue}</TableCell>
                        <TableCell>
                          <Link
                            href={`/dashboard/reviewOrders/procReview/pendingOrders/${pendingOrder.id}`}
                          >
                            <Button variant="" className="flex items-center">
                              View
                              <Eye className="w-4 ml-2" />
                            </Button>
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default Page;
