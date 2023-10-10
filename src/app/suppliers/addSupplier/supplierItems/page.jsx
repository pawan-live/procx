"use client";

import { Button } from "@/app/components/ui/button";
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
import React from "react";

const page = () => {
  return (
    <div>
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
      <Button>Add Supplier</Button>
    </div>
  );
};

export default page;
