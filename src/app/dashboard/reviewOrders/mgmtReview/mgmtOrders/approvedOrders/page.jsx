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
import { budgetCalOrders } from "@/app/helpers/Manager/budgetCal";
import { managerApprovedFilter } from "@/app/helpers/Manager/managerFilters";
import { API_URLS, BASE_LOCAL, BASE_URL } from "@/app/utils/constants";
import axios from "axios";
import { format, set } from "date-fns";
import { Eye } from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";
import { BarLoader } from "react-spinners";

const Page = () => {
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const getItems = async () => {
    const res = await axios.get(`${BASE_URL}${API_URLS.ORDERS}`);
    setIsLoading(false);
    //console.log(res.data);
    // console.log(res.data[0]);
    // console.log(res.data[1]);

    setOrders(res.data);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <Tabs defaultValue="overview" className="space-y-4 p-5">
      <TabsContent value="overview" className="space-y-4">
        <div className="flex gap-6"></div>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Approved Orders</CardTitle>
            <CardDescription>
              Review approved orders sent by procurement department
            </CardDescription>
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
                    <TableHead>Budget Status</TableHead>
                    <TableHead>Catalogue Status</TableHead>
                  </TableRow>
                  {managerApprovedFilter(orders).length > 0 &&
                    managerApprovedFilter(orders).map((order) => (
                      <TableRow key={order.id}>
                        <TableCell>{order.id}</TableCell>
                        <TableCell>
                          {format(new Date(order.createdAt), "dd/MM/yyyy")}
                        </TableCell>
                        <TableCell>
                          {format(new Date(order.deliverDate), "dd/MM/yyyy")}
                        </TableCell>
                        <TableCell>21/20/2023</TableCell>
                        <TableCell>Colombo</TableCell>
                        <TableCell>{budgetCalOrders(order)}</TableCell>
                        <TableCell>Restricted</TableCell>
                        <TableCell>Restricted</TableCell>
                        <TableCell>
                          <Link
                            href={`/dashboard/reviewOrders/mgmtReview/mgmtOrders/approvedOrders/viewApprovedOrder/${order.id}`}
                          >
                            <Button
                              variant="destructive"
                              className="flex items-center"
                            >
                              Review
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
