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
import { API_URLS, BASE_LOCAL, BASE_URL } from "@/app/utils/constants";
import axios from "axios";
import { format } from "date-fns";
import { Eye } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import React from "react";
import { BarLoader } from "react-spinners";

const Page = () => {
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    getOrders();
  }, []);

  // function to send request to server
  const getOrders = async () => {
    try {
      const res = await axios.get(`${BASE_URL}${API_URLS.ORDERS}`);
      console.log("SERVER response:", res);
      setIsLoading(false);
      setOrders(res.data);
    } catch (error) {
      console.error("ERROR fetching data:", error);
    }
  };

  //filter condition
  const filterConditionPending = (order) => {
    for (let i = 0; i < orders.length; i++) {
      console.log(order.orderStatus);
      if (order.orderStatus === "Rejected") {
        return true;
      }
    }
    return false;
  };

  //budget calculation
  let totals = 0;
  const budgetCal = (order) => {
    let total = 0;
    for (let i = 0; i < order.items.length; i++) {
      total += order.items[i].price * order.items[i].qty;
    }
    total = totals;
    totals = order.items.reduce((acc, item) => acc + item.price * item.qty, 0);
    return totals;
  };

  //get Catalogue status
  const getCatalogueStatus = (order) => {
    return order.items.some((item) => item.restricted === true);
  };

  //get budget status
  const getBudgetStatus = (budget) => {
    if (budget > 100000) {
      console.log("Budget status response: true");
      return true;
    } else {
      console.log("Budget status response: false");
      return false;
    }
  };

  const handleRejectedReview = (e) => {
    e.preventDefault();
    router.push(
      "/dashboard/reviewOrders/procReview/rejectedOrders/viewRejectedOrder",
    );
  };

  return (
    <Tabs defaultValue="overview" className="space-y-4 p-5">
      <TabsContent value="overview" className="space-y-4">
        <div className="flex gap-6"></div>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Rejected Orders</CardTitle>
            <CardDescription>Review previously rejected orders</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableBody>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Order Date</TableHead>
                  <TableHead>Rejected Date</TableHead>
                  <TableHead>Site Location</TableHead>
                  <TableHead>Budget</TableHead>
                  <TableHead>Budget Status</TableHead>
                  <TableHead>Catalogue Status</TableHead>
                </TableRow>
                {orders.length > 0 &&
                  orders.filter(filterConditionPending).map((order) => (
                    <TableRow key={order.id}>
                      <TableCell>{order.orderNo.toString()}</TableCell>
                      <TableCell>
                        {" "}
                        {format(new Date(order.createdAt), "dd/MM/yyyy")}
                      </TableCell>
                      <TableCell>
                        {format(new Date(order.deliverDate), "dd/MM/yyyy")}
                      </TableCell>
                      <TableCell>Colombo</TableCell>
                      <TableCell>{budgetCal(order)}</TableCell>
                      <TableCell>
                        {" "}
                        {getBudgetStatus(budgetCal(order))
                          ? "Restricted"
                          : "Not Restricted"}
                      </TableCell>
                      <TableCell>
                        {" "}
                        {getCatalogueStatus(order)
                          ? "Restricted"
                          : "Not Restricted"}
                      </TableCell>
                      <TableCell>
                        <Link
                          href={`/dashboard/reviewOrders/procReview/rejectedOrders/${order.id}`}
                        >
                          <Button variant="" className="flex items-center">
                            View
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
