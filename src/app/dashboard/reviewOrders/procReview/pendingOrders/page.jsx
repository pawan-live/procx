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
import { filterOrders } from "@/app/helpers/ProcStaff/filter";
import { budgetCalOrders } from "@/app/helpers/budgetCal";
import { getBudgetStatus } from "@/app/helpers/budgetStatus";
import { formatDate } from "@/app/helpers/formatDate";
import {
  API_URLS,
  BASE_LOCAL,
  BASE_URL,
  ORDER_RESTRICTION,
} from "@/app/utils/constants";
import { ORDER_STATUS } from "@/app/utils/constants";
import axios from "axios";
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
            {isLoading ? (
              <div className="flex flex-col justify-center items-center w-full h-60">
                <BarLoader width={300} height={5} color="black" />
              </div>
            ) : (
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
                  {orders.length > 0 &&
                    filterOrders(orders, ORDER_STATUS.PENDING, (order) => (
                      <TableRow key={order.id}>
                        <TableCell>{order.id.toString()}</TableCell>
                        <TableCell>{formatDate(order.createdAt)}</TableCell>
                        <TableCell>{formatDate(order.deliverDate)}</TableCell>
                        <TableCell>Colombo</TableCell>
                        <TableCell>{budgetCalOrders(order)}</TableCell>
                        <TableCell>
                          {getBudgetStatus(budgetCalOrders(order))
                            ? ORDER_RESTRICTION.RESTRICTED
                            : ORDER_RESTRICTION.NOTRESTRICED}
                        </TableCell>
                        <TableCell>{catalogueStatus(order.items)}</TableCell>
                        <TableCell>
                          <Link
                            href={`/dashboard/reviewOrders/procReview/pendingOrders/${order.id}`}
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
