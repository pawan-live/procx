import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app//components/ui/select";
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
import { DateRangePicker } from "@/app/components/ui/dateRangePicker";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Tabs, TabsContent } from "@/app/components/ui/tabs";
import { ImagePlus } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <Tabs defaultValue="overview" className="space-y-4 p-5">
      <TabsContent value="overview" className="space-y-4">
        <div className="flex gap-6">
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Add Suppliers</CardTitle>
              <CardDescription>
                Fill required details to add supplieers for items.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="flex flex-col space-y-1.5">
                  <Label>Supplier ID</Label>
                  <Input type="text" required></Input>
                  <Label>Supplier Name</Label>
                  <Input type="text" required></Input>
                  <Label>Address</Label>
                  <Input type="text" required></Input>

                  {/*
                  <Label htmlFor="catalogue">Catalogue Status</Label>
                  <Select required>
                    <SelectTrigger id="catalogue">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="next">Restricted</SelectItem>
                      <SelectItem value="sveltekit">Not Restricted</SelectItem>
                    </SelectContent>
                  </Select> */}

                  <Label>Unit Price</Label>
                  <Input type="text" placeholder="LKR" required></Input>
                  <Label>Description</Label>
                  <Input type="text" required></Input>
                  {/* <Label>Add Suppliers</Label>
                  <Input type="text" placeholder="Supplier01" required></Input>
                  <Input type="text" placeholder="Supplier02" required></Input>
                  <Input type="text" placeholder="Supplier03" required></Input>
                  <Input type="text" placeholder="Supplier04" required></Input> */}
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <Button onClick="">Add Supplier</Button>
            </CardFooter>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default page;
