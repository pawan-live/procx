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
import { DateRangePicker } from "@/app/components/ui/dateRangePicker";
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
import PlusCircle from "@/app/components/ui/plus-circle";
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
import { useState } from "react";

const Page = () => {
  const router = useRouter();

  //tbl row state
  const [tblRow, setTblRow] = useState([
    {
      itemId: "",
      itemName: "",
      unitPrice: "",
      qty: "",
      amount: "",
    },
  ]);

  const handleTblInputChange = (rowIndex, field, value) => {
    const updatedTblRow = [...tblRow];
    updatedTblRow[rowIndex][field] = value;
    setTblRow(updatedTblRow);
  };

  //check last row
  const lastRow = tblRow[tblRow.length - 1];
  const isLastRowFilled = Object.values(lastRow).every((value) => value !== "");

  //add new row
  const handleAddRow = () => {
    if (isLastRowFilled) {
      const newRow = {
        itemId: "",
        itemName: "",
        unitPrice: "",
        qty: "",
        amount: "",
      };
      setTblRow([...tblRow, newRow]);
    }
  };

  return (
    <Tabs defaultValue="overview" className="space-y-4 p-5">
      <TabsContent value="overview" className="space-y-6">
        <div className="flex w-full justify-between">
          <Label className="text-2xl font-semibold leading-none tracking-tight">
            Add New Bill
          </Label>
          <DateRangePicker />
        </div>

        <Card className="col-span-4">
          <CardHeader className="space-y-3">
            <div className="flex-col space-y-3">
              <CardTitle>Invoice No. </CardTitle>
              <Input value="0001089238" className="w-40 " />
            </div>

            <Dialog>
              <div className="flex gap-2 items-center">
                <DialogTrigger onClick={handleAddRow}>
                  <PlusCircle />
                </DialogTrigger>
                <CardDescription>Click here to add new item</CardDescription>
              </div>
            </Dialog>
          </CardHeader>
          <CardContent>
            <Table>
              <TableBody>
                <TableRow>
                  <TableHead>Item ID</TableHead>
                  <TableHead>Item Name</TableHead>
                  <TableHead>Unit Price</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Amount</TableHead>
                </TableRow>

                {tblRow.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Input
                        value={row.itemId}
                        onChange={(e) =>
                          handleTblInputChange(index, "itemId", e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        value={row.itemName}
                        onChange={(e) =>
                          handleTblInputChange(
                            index,
                            "itemName",
                            e.target.value,
                          )
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        value={row.unitPrice}
                        onChange={(e) =>
                          handleTblInputChange(
                            index,
                            "unitPrice",
                            e.target.value,
                          )
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        value={row.qty}
                        onChange={(e) =>
                          handleTblInputChange(index, "qty", e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        value={row.amount}
                        onChange={(e) =>
                          handleTblInputChange(index, "amount", e.target.value)
                        }
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Button>Send for Approval</Button>
          </CardContent>
        </Card>

        <div className="grid  lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Search Orders</CardTitle>
              <CardDescription>Search a specific order here</CardDescription>
            </CardHeader>
            <CardContent>
              <Input placeholder="Order ID"></Input>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button>Review</Button>
            </CardFooter>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default Page;
