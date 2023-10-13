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
import MinusCircle from "@/app/components/ui/minus-circle";
import PlusCircle from "@/app/components/ui/plus-circle";
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

  //dialog box
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  //add new row
  const handleAddRow = () => {
    //check last row
    const lastRow = tblRow[tblRow.length - 1];
    const isLastRowFilled = Object.values(lastRow).every(
      (value) => value !== "",
    );
    if (isLastRowFilled) {
      setIsDialogOpen(false);
      const newRow = {
        itemId: "",
        itemName: "",
        unitPrice: "",
        qty: "",
        amount: "",
      };
      setTblRow([...tblRow, newRow]);
    } else {
      setIsDialogOpen(true);
    }
  };

  // const handleRowRemove = (index) => {
  //   const updatedTblRow = tblRow.filter((_, rowIndex) => rowIndex !== index);
  //   setTblRow(updatedTblRow);
  // };

  const handleSend = (e) => {
    e.preventDefault();
    router.push("/bills/viewBills/viewPendingBills");
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
          <CardHeader className="space-y-2">
            <div className="flex-col space-y-3">
              <CardTitle>Invoice No. </CardTitle>
              <Input value="0001089238" className="w-40 " />
            </div>
            <form>
              <div className="flex flex-col md:flex-row gap-x-4 gap-y-4 w-full">
                <div className="flex flex-col space-y-1.5 w-full lg:w-1/2">
                  <Label>Supplier ID</Label>
                  <Input type="text" required></Input>
                  <Label>Site Manager ID</Label>
                  <Input type="text" required></Input>
                </div>

                <div className="flex flex-col space-y-1.5 w-full lg:w-1/2">
                  <Label>Supplier Name</Label>
                  <Input type="text" required></Input>
                  <Label>Site</Label>
                  <Input type="text" required></Input>
                </div>
              </div>
            </form>
            <Dialog>
              <div className="flex gap-2 items-center">
                <DialogTrigger onClick={handleAddRow}>
                  <PlusCircle />
                </DialogTrigger>
                {isDialogOpen && (
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        Please complete current item data
                      </DialogTitle>
                      <DialogDescription>
                        Fill all the columns to add new item to the bill.
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                )}

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
                  <TableHead></TableHead>
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
          </CardContent>
        </Card>

        <div className="grid  lg:grid-cols-1">
          <Card>
            <CardHeader>
              <CardTitle>Checking Process</CardTitle>
              <CardDescription>Procurement Department Review</CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="flex flex-col md:flex-row gap-x-4 gap-y-4 w-full">
                  <div className="flex flex-col space-y-1.5 w-full lg:w-1/2">
                    <Label>Checked By</Label>
                    <Input placeholder="Procurement Staff ID"></Input>
                  </div>

                  <div className="flex flex-col space-y-1.5 w-full lg:w-1/2">
                    <Label>Quantity Status</Label>
                    <Select required>
                      <SelectTrigger id="qtyStatus">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="correct">Correct</SelectItem>
                        <SelectItem value="partial">
                          Partially Received
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col space-y-1.5 w-full lg:w-1/2">
                    <Label>Quality Status</Label>
                    <Select required>
                      <SelectTrigger id="qualityStatus">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="exclnt">Excellent</SelectItem>
                        <SelectItem value="gd">Good</SelectItem>
                        <SelectItem value="sat">Satisfactory</SelectItem>
                        <SelectItem value="po">Poor</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Label>Comments</Label>
                <Input type="text" required></Input>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button onClick={handleSend}>Send for Approval</Button>
            </CardFooter>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default Page;
