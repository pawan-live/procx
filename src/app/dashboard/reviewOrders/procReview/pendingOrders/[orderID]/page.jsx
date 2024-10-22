"use client";

import BreadCrumbs from "@/app/components/Navbar/BreadCrumbs";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/app/components/ui/alert-dialog";
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
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
import { getApprovalStatus } from "@/app/helpers/ProcStaff/approvalStatus";
import { budgetCalOrder } from "@/app/helpers/budgetCal";
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
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import React from "react";
import { BarLoader } from "react-spinners";

// pass in params as props to access URL params
const Page = ({ params }) => {
  console.log(params);

  const router = useRouter();
  const [order, setOrder] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isMgrDialogOpen, setIsMgrDialogOpen] = useState(false);

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

  //btn APPROVE
  const handleBtnApprove = (id) => {
    if (
      budgetCalOrder(order.items) < 100000 &&
      catalogueStatus(order.items) === ORDER_RESTRICTION.NOTRESTRICED
    ) {
      console.log("Order approve response: not restricted");
      setIsDialogOpen(false);

      const updateOrder = async () => {
        try {
          const res = await axios.put(`${BASE_URL}${API_URLS.ORDERS}/${id}`, {
            orderStatus: ORDER_STATUS.APPROVED,
          });
          router.push("/dashboard/reviewOrders/procReview/pendingOrders");
          console.log(res.data);
        } catch (error) {
          console.error("Error fetching item:", error);
        }
      };
      updateOrder();
    } else {
      console.log("Order approve response: restricted");
      setIsDialogOpen(true);
    }
  };

  //SEND TO MANAGEMENT
  const handleBtnManagement = () => {
    if (
      budgetCalOrder(order.items) > 100000 ||
      catalogueStatus(order.items) === ORDER_RESTRICTION.RESTRICTED
    ) {
      setIsMgrDialogOpen(true);
      console.log("Order send response: true");
    } else {
      setIsMgrDialogOpen(false);
      console.log("Order send response: false");
    }
  };
  const handleMgrSend = (id) => {
    const updateOrder = async () => {
      try {
        const res = await axios.put(`${BASE_URL}${API_URLS.ORDERS}/${id}`, {
          orderStatus: ORDER_STATUS.PARTIALLY_APPROVED,
        });
        router.push("/dashboard/reviewOrders/procReview/pendingOrders");
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching item:", error);
      }
    };
    updateOrder();
  };

  //btn REJECT
  const handleBtnReject = (id) => {
    const updateOrder = async () => {
      try {
        const res = await axios.put(`${BASE_URL}${API_URLS.ORDERS}/${id}`, {
          orderStatus: ORDER_STATUS.REJECTED,
        });
        router.push("/dashboard/reviewOrders/procReview/pendingOrders");
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching item:", error);
      }
    };
    updateOrder();
  };

  const handleViewSupplier = (e) => {
    e.preventDefault();
    router.push("dashboard/suppliers/view");
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
              Review pending orders sent by site manager
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
                    <Label>Order ID</Label>
                    <Input
                      type="text"
                      defaultValue={order.orderNo}
                      disabled
                    ></Input>
                    <Label>Order raised by</Label>
                    <Input
                      type="text"
                      defaultValue={"Site Manager"}
                      disabled
                    ></Input>
                    {/* <Label>Description</Label>
                  <Input type="text" value="SLIIT" readOnly></Input> */}
                  </div>
                  <div className="flex flex-col space-y-1.5 lg:w-1/2">
                    <Label>Supplier Name</Label>
                    <Input
                      type="text"
                      defaultValue={
                        order && order.supplier && order.supplier.name
                      }
                      disabled
                    ></Input>
                    {/* <Label>Site Manager Phone</Label>
                  <Input type="text" defaultValue={orderId} disabled></Input> */}
                    <Label>Site Location</Label>
                    <Input
                      type="text"
                      defaultValue={"Colombo"}
                      disabled
                    ></Input>
                  </div>
                  <div className="flex flex-col space-y-1.5 w-full lg:w-1/2">
                    <div className="flex flex-row  gap-x-4 justify-between">
                      <div className="flex flex-col space-y-1.5 justify-between">
                        <Label>Order Date</Label>
                        <Input
                          type="text"
                          defaultValue={orderDate}
                          disabled
                        ></Input>
                      </div>
                      <div className="flex flex-col space-y-1.5 justify-between">
                        <Label>Required Date</Label>
                        <Input
                          type="text"
                          defaultValue={deliveryDate}
                          disabled
                        ></Input>
                      </div>
                    </div>
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
            <CardDescription>
              You cannot approve order with budget greater than 100000LKR <br />
              You cannot approve orders with restricted items
            </CardDescription>
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
                    defaultValue={budgetCalOrder(order.items)}
                    disabled
                  ></Input>
                </div>

                <div className="flex flex-col space-y-1.5 w-full lg:w-1/2">
                  <Label>Budget Status</Label>
                  <Input
                    type="text"
                    defaultValue={
                      getBudgetStatus(budgetCalOrder)
                        ? "Restricted"
                        : "Not Restricted"
                    }
                    disabled
                  ></Input>
                </div>

                <div className="flex flex-col space-y-1.5 w-full lg:w-1/2">
                  <Label>Catalogue Status</Label>
                  <Input
                    type="text"
                    defaultValue={catalogueStatus(order.items)}
                    disabled
                  ></Input>
                </div>

                <div className="flex flex-col space-y-1.5 w-full lg:w-1/2">
                  <Label>Approval Status</Label>
                  <Input
                    type="text"
                    defaultValue={
                      getApprovalStatus ? "Restricted" : "Not Restricted"
                    }
                    disabled
                  ></Input>
                </div>
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
          <CardFooter className="flex flex-col md:flex-row gap-x-40 gap-y-4 w-full">
            <div className="flex flex-col space-y-3">
              <div className="flex flex-row  gap-x-28">
                <Dialog>
                  <div className="flex gap-2 items-center">
                    <DialogTrigger asChild>
                      <Button
                        onClick={() => {
                          handleBtnApprove(order.id);
                        }}
                        className="w-44"
                      >
                        Approve
                      </Button>
                    </DialogTrigger>
                    {isDialogOpen && (
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Please send to Management</DialogTitle>
                          <DialogDescription>
                            You cannot approve order with budget greater than
                            100000LKR <br />
                            You cannot approve orders with restricted items
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    )}
                  </div>
                </Dialog>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      onClick={() => {
                        handleBtnManagement();
                      }}
                      className="w-44"
                    >
                      Send to Management
                    </Button>
                  </AlertDialogTrigger>
                  {isMgrDialogOpen && (
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Send order to Management
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          The order budget is above 100000LKR.
                          <br />
                          The order should be approved by the Management.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel className="w-20">
                          Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction
                          className="w-20"
                          onClick={() => {
                            handleMgrSend(order.id);
                          }}
                        >
                          Send
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  )}
                  {!isMgrDialogOpen && (
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          You can approve or reject the order
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          The order budget is below 100000LKR.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel className="w-20">
                          OK
                        </AlertDialogCancel>
                        {/* <AlertDialogAction
                          className="w-20"
                          onClick={() => {
                            handleBtnManagement(order.id);
                          }}
                        >
                          Send
                        </AlertDialogAction> */}
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  )}
                </AlertDialog>
              </div>
              <div className="flex flex-row  gap-x-28">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button className="w-44" variant="destructive">
                      Reject
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you sure you want to reject the order?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action will reject the order.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel className="w-20">
                        Cancel
                      </AlertDialogCancel>
                      <AlertDialogAction
                        className="w-20"
                        onClick={() => {
                          handleBtnReject(order.id);
                        }}
                      >
                        Reject
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default Page;
