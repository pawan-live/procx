"use client";

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
import { Checkbox } from "@/app/components/ui/checkbox";
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
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();

  const handleAssignItems = (e) => {
    e.preventDefault();
    router.push("/suppliers/viewSupplier");
  };
  return (
    <Tabs defaultValue="overview" className="space-y-4 p-5">
      <TabsContent value="overview" className="space-y-4">
        <div className="flex gap-6"></div>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Assign Items</CardTitle>
            <CardDescription>Assign items for supplier.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableBody>
                <TableRow>
                  <TableHead>Item ID</TableHead>
                  <TableHead>Item Name</TableHead>
                  <TableHead>Unit Price</TableHead>
                  <TableHead>Catalogue Status</TableHead>
                  <TableHead>Selection</TableHead>
                </TableRow>
                <TableRow>
                  <TableCell>001</TableCell>
                  <TableCell>Gal</TableCell>
                  <TableCell>150 LKR</TableCell>
                  <TableCell>Restricted</TableCell>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>002</TableCell>
                  <TableCell>Vali</TableCell>
                  <TableCell>200 LKR</TableCell>
                  <TableCell>Not Restricted</TableCell>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Button className="w-40">
              <AlertDialog>
                <AlertDialogTrigger>Assign Items</AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Create Supplier?</AlertDialogTitle>
                    <AlertDialogDescription>
                      <p>This action will create a new supplier.</p>
                      <p>
                        Make sure assigned items are correct before proceeding.
                      </p>
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="w-40">
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                      className="w-40"
                      onClick={handleAssignItems}
                    >
                      Create Supplier
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </Button>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default Page;
