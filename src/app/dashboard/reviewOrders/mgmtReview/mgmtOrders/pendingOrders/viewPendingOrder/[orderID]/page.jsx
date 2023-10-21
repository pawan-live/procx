"use client";

import BreadCrumbs from "@/app/components/Navbar/BreadCrumbs";
import { Badge } from "@/app/components/ui/badge";
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
import { budgetCalOrder } from "@/app/helpers/Manager/budgetCal";
import { budgetStatus } from "@/app/helpers/Manager/budgetStatus";
import { catalogueStatus } from "@/app/helpers/Manager/catalogueStatus";
import { formatDate } from "@/app/helpers/Manager/formatDate";
import {
  API_URLS,
  BASE_URL,
  ORDER_RESTRICION,
  ORDER_STATUS,
} from "@/app/utils/constants";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { BarLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = ({ params }) => {
  const router = useRouter();
  //console.log(params);
  const [order, setOrder] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    const getOrderByID = async () => {
      try {
        const res = await axios.get(
          `${BASE_URL}${API_URLS.ORDERS}/${params.orderID}`,
        );
        setIsLoading(false);
        //console.log(res.data);
        setOrder(res.data);
      } catch (error) {
        console.error("Error fetching item:", error);
      }
    };

    getOrderByID();
  }, [params.orderID]);

  const orderDate = formatDate(order && order.createdAt);
  const deliveryDate = formatDate(order && order.deliverDate);

  const handleApprove = (id) => {
    const updateOrder = async () => {
      try {
        const res = await axios.put(`${BASE_URL}${API_URLS.ORDERS}/${id}`, {
          managerstatus: ORDER_STATUS.APPROVED,
          orderStatus: ORDER_STATUS.APPROVED,
        });
        toast.success("Order Approved successfully!", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
        router.push("/dashboard/management");
        //console.log(res.data);
      } catch (error) {
        console.error("Error approving order:", error);
        toast.error("Error approving order", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      }
    };

    updateOrder();
  };

  const handleReject = (id) => {
    const updateOrder = async () => {
      try {
        const res = await axios.put(`${BASE_URL}${API_URLS.ORDERS}/${id}`, {
          managerstatus: ORDER_STATUS.REJECTED,
          orderStatus: ORDER_STATUS.REJECTED,
        });
        // router.push({
        //   pathname: "/dashboard/management",
        //   query: { success: "Order rejected successfully!" },
        // });
        // Display a success toast message
        toast.success("Order rejected successfully!", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
        router.push("/dashboard/management");

        //console.log(res.data);
      } catch (error) {
        console.error("Error rejecting order:", error);
        toast.error("Error rejecting order", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      }
    };

    updateOrder();
  };

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
            {isLoading && (
              <div className="flex flex-col justify-center items-center w-full h-60">
                <BarLoader width={300} height={5} color="black" />
              </div>
            )}
            {!isLoading && (
              <form>
                <div className="flex flex-col md:flex-row gap-x-4 gap-y-4 w-full">
                  <div className="flex flex-col space-y-1.5 w-full lg:w-1/2">
                    <Label>Order Name</Label>
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
                        <Input
                          type="text"
                          value={deliveryDate}
                          readOnly
                        ></Input>
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
            )}
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
            {isLoading && (
              <div className="flex flex-col justify-center items-center w-full h-60">
                <BarLoader width={300} height={5} color="black" />
              </div>
            )}
            {!isLoading && (
              <div className="flex flex-col md:flex-row gap-x-4 gap-y-4 w-full">
                <div className="flex flex-col space-y-1.5 w-full lg:w-1/2">
                  <Label>Total Budget</Label>
                  <Input
                    type="text"
                    value={budgetCalOrder(order.items)}
                    readOnly
                  ></Input>
                </div>

                <div className="flex flex-col space-y-1.5 w-full lg:w-1/2">
                  <Label>Budget Status</Label>
                  <Input
                    type="text"
                    value={budgetStatus(order.items)}
                    readOnly
                  ></Input>
                </div>

                <div className="flex flex-col space-y-1.5 w-full lg:w-1/2">
                  <Label>Catalogue Status</Label>
                  <Input
                    type="text"
                    value={catalogueStatus(order.items)}
                    readOnly
                  ></Input>
                </div>

                {/* <div className="flex flex-col space-y-1.5 w-full lg:w-1/2">
                <Label>Approval Status</Label>
                <Input type="text" value="Restricted" readOnly></Input>
              </div> */}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Ordered Items */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Ordered Items</CardTitle>
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
                          {item.restricted ? (
                            <Badge variant="destructive">
                              {ORDER_RESTRICION.RESTRICTED}
                            </Badge>
                          ) : (
                            <Badge variant="outline">
                              {ORDER_RESTRICION.NOTRESTRICED}
                            </Badge>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
          <CardFooter className="flex flex-col md:flex-row gap-x-40 gap-y-4 w-full">
            <div className="flex flex-col space-y-3">
              <div className="flex flex-row  gap-x-28">
                <Button
                  className="w-44"
                  onClick={() => handleApprove(order.id)}
                >
                  Approve
                </Button>
                <Button
                  className="w-44"
                  variant="destructive"
                  onClick={() => handleReject(order.id)}
                >
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
