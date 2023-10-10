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
import { Checkbox } from "@/app/components/ui/checkbox";
import { Label } from "@/app/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
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
import React from "react";

const page = () => {
  return (
    <Tabs defaultValue="overview" className="space-y-4 p-5">
      <TabsContent value="overview" className="space-y-4">
        <div className="flex gap-6"></div>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Review Orders</CardTitle>
            <CardDescription>Review orders here.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableBody>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Site Location</TableHead>
                  <TableHead>Budget</TableHead>
                  <TableHead>Catalogue Status</TableHead>
                </TableRow>
                <TableRow>
                  <TableCell>001</TableCell>
                  <TableCell>Jan 20, 2022</TableCell>
                  <TableCell>Colombo</TableCell>
                  <TableCell>200 000 LKR</TableCell>
                  <TableCell>Restricted</TableCell>
                  <TableCell>
                    <Button variant="destructive">Review</Button>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>002</TableCell>
                  <TableCell>Jan 30, 2022</TableCell>
                  <TableCell>Matara</TableCell>
                  <TableCell>10 000 LKR</TableCell>
                  <TableCell>Not Restricted</TableCell>
                  <TableCell>
                    <Button variant="destructive">Review</Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default page;
