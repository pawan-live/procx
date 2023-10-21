"use client";

import BreadCrumbs from "@/app/components/Navbar/BreadCrumbs";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Checkbox } from "@/app/components/ui/checkbox";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
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
import { budgetCalOrder } from "@/app/helpers/budgetCal";
import { formatDate } from "@/app/helpers/formatDate";
import { API_URLS, BASE_LOCAL, BASE_URL } from "@/app/utils/constants";
import { ORDER_RESTRICTION, ORDER_STATUS } from "@/app/utils/constants";
import axios from "axios";
import { format, isValid, parseISO } from "date-fns";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import React from "react";
import { BarLoader } from "react-spinners";

const Page = ({ params }) => {
  console.log(params);

  const router = useRouter();
  const [order, setOrder] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  //format date
  const orderDate = formatDate(order && order.createdAt);
  const deliveryDate = formatDate(order && order.deliverDate);

  useEffect(() => {
    const getOrderByID = async () => {
      try {
        const res = await axios.get(
          `${BASE_URL}${API_URLS.ORDERS}/${params.orderID}`,
        );
        setIsLoading(false);
        console.log(res.data);
        setOrder(res.data);
      } catch (error) {
        console.error("Error fetching item:", error);
      }
    };

    getOrderByID();
  }, [params.orderID]);

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

  //get approval status if both false
  const getApprovalStatus = () => {
    console.log("Approval status response");
    if (
      getBudgetStatus(budgetCalOrder(order.items)) === true ||
      catalogueStatus(order.items) === ORDER_RESTRICTION.RESTRICTED
    ) {
      console.log("Approval status response: restricted");
      return true;
    } else {
      console.log("Approval status response: not restricted");
      return false;
    }
  };

  return (
    <Tabs defaultValue="overview" className="space-y-4 p-5">
      <TabsContent value="overview" className="space-y-4">
        <div className="flex gap-6"></div>
        {/* Review order */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Review Rejected Order</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading && (
              <div className="flex flex-col justify-center items-center w-full h-60">
                <BarLoader width={300} height={5} color="black" />
              </div>
            )}
            {!isLoading && (
              <form>
                <div className="flex flex-col md:flex-row gap-x-4 gap-y-4 w-full">
                  <div className="flex flex-col space-y-1.5 w-full lg:w-1/2">
                    <Label>Order ID</Label>
                    <Input
                      type="text"
                      defaultValue={order.orderNo}
                      disabled
                    ></Input>{" "}
                    <Label>Order Date</Label>
                    <Input
                      type="text"
                      defaultValue={orderDate}
                      disabled
                    ></Input>{" "}
                    <Label>Order raised by</Label>
                    <Input
                      type="text"
                      defaultValue={"Site Manager"}
                      disabled
                    ></Input>
                    {/* <Label>Description</Label>
                  <Input type="text" value="Fuck SLIIT" readOnly></Input> */}
                  </div>
                  <div className="flex flex-col space-y-1.5 lg:w-1/2">
                    <Label>Site Location</Label>
                    <Input
                      type="text"
                      defaultValue={"Colombo"}
                      disabled
                    ></Input>{" "}
                    <Label>Required Date</Label>
                    <Input
                      type="text"
                      defaultValue={deliveryDate}
                      disabled
                    ></Input>
                    <Label>Site Manager Phone</Label>
                    <Input
                      type="text"
                      defaultValue={"0712345234"}
                      disabled
                    ></Input>
                  </div>
                  <div className="flex flex-col space-y-1.5 w-full lg:w-1/2">
                    <Label>Supplier Name</Label>
                    <Input
                      type="text"
                      defaultValue={
                        order && order.supplier && order.supplier.name
                      }
                      disabled
                    ></Input>
                    <Label>Rejected Date</Label>
                    <Input
                      type="text"
                      defaultValue={"21/10/2023"}
                      disabled
                    ></Input>
                  </div>
                </div>
              </form>
            )}
          </CardContent>
          <CardFooter className="flex flex-col md:flex-row gap-x-28 gap-y-4 w-full">
            <Button className="w-44">View Supplier</Button>
          </CardFooter>
        </Card>

        {/* Approve Crieteria */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Approval Crieteria</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-x-4 gap-y-6 w-full">
              <div className="flex flex-col space-y-1.5 w-full lg:w-1/2">
                <Label>Total Budget</Label>
                <Input
                  type="text"
                  defaultValue={budgetCalOrder(order.items)}
                  disabled
                ></Input>{" "}
              </div>

              <div className="flex flex-col space-y-1.5 w-full lg:w-1/2">
                <Label>Budget Status</Label>
                <Input
                  type="text"
                  defaultValue={
                    getBudgetStatus(budgetCalOrder(order.items))
                      ? ORDER_RESTRICTION.RESTRICTED
                      : ORDER_RESTRICTION.NOTRESTRICED
                  }
                  disabled
                ></Input>
              </div>

              <div className="flex flex-col space-y-1.5 w-full lg:w-1/2">
                <Label>Catalogue Status</Label>
                <Input
                  type="text"
                  defaultValue={catalogueStatus(order.items)}
                  readOnly
                ></Input>
              </div>

              <div className="flex flex-col space-y-1.5 w-full lg:w-1/2">
                <Label>Approval Status</Label>
                <Input
                  type="text"
                  value={order.orderStatus}
                  className="bg-destructive"
                  readOnly
                ></Input>
                {/* <Input
                  type="text"
                  defaultValue={
                    getApprovalStatus()
                      ? ORDER_RESTRICTION.RESTRICTED
                      : ORDER_RESTRICTION.NOTRESTRICED
                  }
                  
                ></Input> */}
              </div>
            </div>
          </CardContent>
          <CardContent className="space-y-1.5">
            <CardTitle>Rejected Reason</CardTitle>
            <Input value="Rejected reason" disabled></Input>
          </CardContent>
        </Card>

        {/* Ordered Items */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Ordered Items</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableBody>
                <TableRow>
                  <TableHead>Item ID</TableHead>
                  <TableHead>Item Name</TableHead>
                  <TableHead>Unit Price</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Budget</TableHead>
                  <TableHead>Catalogue Status</TableHead>
                </TableRow>
                {order &&
                  order.items &&
                  order.items.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.id}</TableCell>
                      <TableCell>{item.itemName}</TableCell>
                      <TableCell>{item.price}</TableCell>
                      <TableCell>{item.qty}</TableCell>
                      <TableCell>{item.qty * item.price}</TableCell>
                      <TableCell>
                        {item.restricted ? "Restricted" : "Not Restricted"}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-2xl font-bold">
                  Total Budget
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm font-medium">30000 LKR</div>
              </CardContent>
            </Card>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default Page;
