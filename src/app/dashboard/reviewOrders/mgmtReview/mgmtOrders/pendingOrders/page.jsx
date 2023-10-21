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
import { budgetStatusOrders } from "@/app/helpers/Manager/budgetStatus";
import { catalogueStatusOrders } from "@/app/helpers/Manager/catalogueStatus";
import { managerPendingFilter } from "@/app/helpers/Manager/managerFilters";
import { API_URLS, BASE_URL, ORDER_STATUS } from "@/app/utils/constants";
import axios from "axios";
import { format, set } from "date-fns";
import { Eye } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { BarLoader } from "react-spinners";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  const router = useRouter();
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const getItems = async () => {
    try {
      const res = await axios.get(`${BASE_URL}${API_URLS.ORDERS}`);
      setOrders(res.data);
      setIsLoading(false);
      console.log(res.data); // You can log the entire response data here if needed
    } catch (error) {
      // Handle any potential errors here
      console.error("Error fetching data:", error);
    }
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
            <CardTitle>Review Pending Orders</CardTitle>
            <CardDescription>
              Review pending orders sent by procurement department here.
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
                    <TableHead>Site Location</TableHead>
                    <TableHead>Budget</TableHead>
                    <TableHead>Budget Status</TableHead>
                    <TableHead>Catalogue Status</TableHead>
                  </TableRow>
                  {managerPendingFilter(orders).length > 0 ? (
                    managerPendingFilter(orders).map((order) => (
                      <TableRow key={order.id}>
                        <TableCell>#{order.id}</TableCell>
                        <TableCell>
                          {format(new Date(order.createdAt), "dd/MM/yyyy")}
                        </TableCell>
                        <TableCell>
                          {format(new Date(order.deliverDate), "dd/MM/yyyy")}
                        </TableCell>
                        <TableCell>Colombo</TableCell>
                        <TableCell>{budgetCalOrders(order)}</TableCell>
                        <TableCell>{budgetStatusOrders(order)}</TableCell>
                        <TableCell>{catalogueStatusOrders(order)}</TableCell>
                        <TableCell>
                          <Link
                            href={`/dashboard/reviewOrders/mgmtReview/mgmtOrders/pendingOrders/viewPendingOrder/${order.id}`}
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
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={8}>No Pending Orders</TableCell>
                    </TableRow>
                  )}
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
