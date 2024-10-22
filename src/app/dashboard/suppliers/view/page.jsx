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
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const handleEditSupplier = (e) => {
    e.preventDefault();
    router.push("/suppliers/editSupplier");
  };
  const handleEditSupplierItems = (e) => {
    e.preventDefault();
    router.push("/suppliers/addSupplier/supplierItems");
  };
  const handleDeleteSupplier = (e) => {
    e.preventDefault();
    router.push("/suppliers");
  };
  return (
    <Tabs defaultValue="overview" className="space-y-4 p-5">
      <TabsContent value="overview" className="space-y-4">
        <div className="flex gap-6"></div>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>View Supplier</CardTitle>
            <CardDescription>View supplier details here.</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col md:flex-row gap-x-4 gap-y-4 w-full">
                <div className="flex flex-col space-y-1.5 w-full lg:w-1/2">
                  <Label>Supplier Name</Label>
                  <Input
                    type="text"
                    value="Amarabandu Rupasinghe"
                    readOnly
                  ></Input>
                  <Label>Address</Label>
                  <Input type="text" value="Colombo 05" readOnly></Input>
                  <Label>Description</Label>
                  <Input type="text" value="Fuck SLIIT" readOnly></Input>
                </div>

                <div className="flex flex-col space-y-1.5 w-full lg:w-1/2">
                  <Label>Supervisor Name</Label>
                  <Input
                    type="text"
                    value="Galapatha Madagama"
                    readOnly
                  ></Input>
                  <Label>Contact Number</Label>
                  <Input type="text" value="0711152345" readOnly></Input>
                  <Label>Contract Period</Label>
                  <Input
                    type="text"
                    value="Jan 20, 2022 - Feb 09, 2022"
                    readOnly
                  ></Input>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col md:flex-row gap-x-52 gap-y-4 w-full">
            <Button onClick={handleEditSupplier} className="w-40">
              Edit Supplier
            </Button>

            <Button className="w-40">
              <AlertDialog>
                <AlertDialogTrigger>Delete Supplier</AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you sure you want to delete?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      <p>This action cannot be undone.</p>
                      <p>This will permanently delete supplier details.</p>
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDeleteSupplier}>
                      Delete
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Supplier Items</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableBody>
                <TableRow>
                  <TableHead>Item ID</TableHead>
                  <TableHead>Item Name</TableHead>
                  <TableHead>Unit Price</TableHead>
                  <TableHead>Catalogue Status</TableHead>
                </TableRow>
                <TableRow>
                  <TableCell>001</TableCell>
                  <TableCell>Gal</TableCell>
                  <TableCell>150 LKR</TableCell>
                  <TableCell>Restricted</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>002</TableCell>
                  <TableCell>Vali</TableCell>
                  <TableCell>200 LKR</TableCell>
                  <TableCell>Not Restricted</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter>
            <Button onClick={handleEditSupplierItems} className="w-40">
              Edit Items
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default Page;
