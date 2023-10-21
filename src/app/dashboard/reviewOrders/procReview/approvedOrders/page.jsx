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
import { catalogueStatus } from "@/app/helpers/Manager/catalogueStatus";
import { API_URLS, BASE_LOCAL, BASE_URL } from "@/app/utils/constants";
import { ORDER_STATUS } from "@/app/utils/constants";
import axios from "axios";
import { format } from "date-fns";
import { Eye } from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";
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

  const filterConditionApproved = (order) => {
    for (let i = 0; i < order.items.length; i++) {
      if (
        order.orderStatus === ORDER_STATUS.APPROVED ||
        order.orderStatus === ORDER_STATUS.PARTIALLY_APPROVED
      ) {
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

  return (
    <Tabs defaultValue="overview" className="space-y-4 p-5">
      <TabsContent value="overview" className="space-y-4">
        <div className="flex gap-6"></div>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Approved Orders</CardTitle>
            <CardDescription>Review previously approved orders</CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading && (
              <div className="flex flex-col justify-center items-center w-full h-60">
                <BarLoader width={300} height={5} color="black" />
              </div>
            )}
            {!isLoading && (
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Order Date</TableHead>
                    <TableHead>Required Date</TableHead>
                    <TableHead>Approved Date</TableHead>
                    <TableHead>Site Location</TableHead>
                    <TableHead>Budget</TableHead>
                    <TableHead>Order Status</TableHead>
                    {/* <TableHead>Budget Status</TableHead>
                    <TableHead>Catalogue Status</TableHead> */}
                  </TableRow>
                  {orders.length > 0 &&
                    orders.filter(filterConditionApproved).map((order) => (
                      <TableRow key={order.id}>
                        <TableCell>{order.id.toString()}</TableCell>
                        <TableCell>
                          {format(new Date(order.createdAt), "dd/MM/yyyy")}
                        </TableCell>
                        <TableCell>
                          {format(new Date(order.deliverDate), "dd/MM/yyyy")}
                        </TableCell>
                        <TableCell>{"21/10/2023"}</TableCell>
                        <TableCell>{}</TableCell>
                        <TableCell>{budgetCal(order)}</TableCell>
                        <TableCell>{order.orderStatus}</TableCell>

                        <TableCell>
                          <Link
                            href={`/dashboard/reviewOrders/procReview/approvedOrders/${order.id}`}
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
            )}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default Page;
