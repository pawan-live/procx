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
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import React from "react";

// pass in params as props to access URL params
const Page = ({ params }) => {
  const router = useRouter();
  const [pendingOrders, setPendingOrders] = React.useState([]);
  const [orderId, setOrderId] = React.useState([]);
  const [orderDate, setOrderDate] = React.useState([]);
  const [requireDate, setRequireDate] = React.useState([]);
  const [site, setSite] = React.useState([]);
  const [budget, setBudget] = React.useState([]);
  const [budgetStatus, setBudgetStatus] = React.useState([]);
  const [restricted, setRestricted] = React.useState([]);
  //add these fields
  const [siteManagerName, setSiteManagerName] = React.useState([]);
  const [supplier, setSupplier] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    const getPendingOrderByID = async () => {
      try {
        const res = await axios.get(
          `${BASE_LOCAL}${API_URLS.ORDERS}/${params.orderID}`,
        );

        console.log("SERVER response:", res);
        setIsLoading(false);
        setOrderId(res.data.id);
        setOrderDate(res.data.createdAt);
        setRequireDate(res.data.deliverDate);
        setSite(res.data.site);
        setBudget(res.data.budget);
        setBudgetStatus(res.data.budgetStatus);
        setRestricted(res.data.restricted);
        setSiteManagerName(res.data.siteManagerName);
        setSupplier(res.data.supplier);
      } catch (error) {
        console.error("ERROR fetching item:", error);
      }
    };
    getPendingOrderByID();
  }, [params.orderID]);

  //get budget status
  const getBudgetStatus = (budget) => {
    if (budget > 100000) {
      console.log("Budget status response: true");
      return true;
    } else {
      return false;
      console.log("Budget status response: false");
    }
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
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col md:flex-row gap-x-4 gap-y-4 w-full">
                <div className="flex flex-col space-y-1.5 w-full lg:w-1/2">
                  <Label>Order ID</Label>
                  <Input type="text" defaultValue={orderId} disabled></Input>
                  <Label>Order raised by</Label>
                  <Input
                    type="text"
                    defaultValue={siteManagerName}
                    disabled
                  ></Input>
                  {/* <Label>Description</Label>
                  <Input type="text" value="SLIIT" readOnly></Input> */}
                </div>
                <div className="flex flex-col space-y-1.5 lg:w-1/2">
                  <Label>Supplier Name</Label>
                  <Input type="text" defaultValue={supplier} disabled></Input>
                  {/* <Label>Site Manager Phone</Label>
                  <Input type="text" defaultValue={orderId} disabled></Input> */}
                  <Label>Site Location</Label>
                  <Input type="text" defaultValue={site} disabled></Input>
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
                        defaultValue={requireDate}
                        disabled
                      ></Input>
                    </div>
                  </div>
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
            <CardDescription>
              You cannot approve order with budget greater than 100000LKR <br />
              You cannot approve orders with restricted items
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-x-4 gap-y-4 w-full">
              <div className="flex flex-col space-y-1.5 w-full lg:w-1/2">
                <Label>Total Budget</Label>
                <Input type="text" defaultValue={budget} disabled></Input>
              </div>

              <div className="flex flex-col space-y-1.5 w-full lg:w-1/2">
                <Label>Budget Status</Label>
                <Input
                  type="text"
                  defaultValue={getBudgetStatus}
                  disabled
                ></Input>
              </div>

              <div className="flex flex-col space-y-1.5 w-full lg:w-1/2">
                <Label>Catalogue Status</Label>
                <Input type="text" value="Not Restricted" readOnly></Input>
              </div>

              <div className="flex flex-col space-y-1.5 w-full lg:w-1/2">
                <Label>Approval Status</Label>
                <Input type="text" value="Restricted" readOnly></Input>
              </div>
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
                  <TableHead>Selection</TableHead>
                </TableRow>
                <TableRow>
                  <TableCell>001</TableCell>
                  <TableCell>Gal</TableCell>
                  <TableCell>150 LKR</TableCell>
                  <TableCell>12</TableCell>
                  <TableCell>1800</TableCell>
                  <TableCell>Restricted</TableCell>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>002</TableCell>
                  <TableCell>Vali</TableCell>
                  <TableCell>200 LKR</TableCell>
                  <TableCell>200</TableCell>
                  <TableCell>40000</TableCell>
                  <TableCell>Not Restricted</TableCell>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="flex flex-col md:flex-row gap-x-40 gap-y-4 w-full">
            <div className="flex flex-col space-y-3">
              <div className="flex flex-row  gap-x-28">
                <Button className="w-44">Approve</Button>
                <Button className="w-44">Send to Management</Button>
              </div>
              <div className="flex flex-row  gap-x-28">
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
