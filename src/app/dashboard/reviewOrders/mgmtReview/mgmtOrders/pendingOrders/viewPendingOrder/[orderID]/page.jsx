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
import { API_URLS, BASE_LOCAL, BASE_URL } from "@/app/utils/constants";
import axios from "axios";
import { format, isValid, parseISO } from "date-fns";
import React, { useEffect } from "react";

const Page = ({ params }) => {
  console.log(params);
  const [order, setOrder] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    const getOrderByID = async () => {
      try {
        const res = await axios.get(
          `${BASE_LOCAL}${API_URLS.ORDERS}/${params.orderID}`,
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

  function formatDate(date) {
    return date && isValid(parseISO(date))
      ? format(parseISO(date), "dd/MM/yyyy")
      : null;
  }
  const orderDate = formatDate(order && order.createdAt);
  const deliveryDate = formatDate(order && order.deliverDate);
  return (
    <Tabs defaultValue="overview" className="space-y-4 p-5">
      <TabsContent value="overview" className="space-y-4">
        <div className="flex gap-6"></div>
        {/* Review order */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Review Pending Order</CardTitle>
            <CardDescription>
              Review pending order sent by site manager
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col md:flex-row gap-x-4 gap-y-4 w-full">
                <div className="flex flex-col space-y-1.5 w-full lg:w-1/2">
                  <Label>Order ID</Label>
                  <Input type="text" value={order.orderNo} readOnly></Input>
                  <Label>Order raised by</Label>
                  <Input type="text" value="Site Manager" readOnly></Input>
                  {/* <Label>Description</Label>
                  <Input type="text" value="Fuck SLIIT" readOnly></Input> */}
                </div>
                <div className="flex flex-col space-y-1.5 lg:w-1/2">
                  <Label>Site Location</Label>
                  <Input type="text" value="Colombo 05" readOnly></Input>
                  <Label>Site Manager Phone</Label>
                  <Input type="text" value="0712345234" readOnly></Input>
                </div>
                <div className="flex flex-col space-y-1.5 w-full lg:w-1/2">
                  <div className="flex flex-row  gap-x-4 justify-between">
                    <div className="flex flex-col space-y-1.5 justify-between">
                      <Label>Order Date</Label>
                      <Input type="text" value={orderDate} readOnly></Input>
                    </div>
                    <div className="flex flex-col space-y-1.5 justify-between">
                      <Label>Required Date</Label>
                      <Input type="text" value={deliveryDate} readOnly></Input>
                    </div>
                  </div>
                  <Label>Supplier Name</Label>
                  <Input
                    type="text"
                    value={order && order.supplier && order.supplier.name}
                    readOnly
                  ></Input>
                  <Label></Label>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col md:flex-row gap-x-28 gap-y-4 w-full">
            <Button className="w-44">View Site Manager</Button>
            <Button className="w-44">View Supplier</Button>
          </CardFooter>
        </Card>

        {/* Approve Crieteria */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Approval Crieteria</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-x-4 gap-y-4 w-full">
              <div className="flex flex-col space-y-1.5 w-full lg:w-1/2">
                <Label>Total Budget</Label>
                <Input type="text" value="200 000" readOnly></Input>
              </div>

              <div className="flex flex-col space-y-1.5 w-full lg:w-1/2">
                <Label>Budget Status</Label>
                <Input type="text" value="Restricted" readOnly></Input>
              </div>

              <div className="flex flex-col space-y-1.5 w-full lg:w-1/2">
                <Label>Catalogue Status</Label>
                <Input type="text" value="Not Restricted" readOnly></Input>
              </div>

              {/* <div className="flex flex-col space-y-1.5 w-full lg:w-1/2">
                <Label>Approval Status</Label>
                <Input type="text" value="Restricted" readOnly></Input>
              </div> */}
            </div>
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
                      <TableCell>{item.price} LKR</TableCell>
                      <TableCell>{item.qty}</TableCell>
                      <TableCell>{item.price * item.qty} LKR</TableCell>
                      <TableCell>
                        {item.restricted ? "Restricted" : "Not Restricted"}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="flex flex-col md:flex-row gap-x-40 gap-y-4 w-full">
            <div className="flex flex-col space-y-3">
              <div className="flex flex-row  gap-x-28">
                <Button className="w-44">Approve</Button>
                <Button className="w-44" variant="destructive">
                  Reject
                </Button>
              </div>
            </div>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default Page;