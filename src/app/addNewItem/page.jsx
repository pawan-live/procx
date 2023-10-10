import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { ImagePlus } from "lucide-react";
import React from "react";

import { Button } from "../components/ui/button";
import { DateRangePicker } from "../components/ui/dateRangePicker";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Tabs, TabsContent } from "../components/ui/tabs";

const page = () => {
  return (
    <Tabs defaultValue="overview" className="space-y-4 p-5">
      <TabsContent value="overview" className="space-y-4">
        <div className="flex gap-6">
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Add New Item</CardTitle>
              <CardDescription>
                Fill required details to add new item.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="flex flex-col space-y-1.5">
                  <Label>Item Name</Label>
                  <Input type="text" required></Input>
                  {/* catalogue dropdown */}
                  <Label htmlFor="catalogue">Catalogue Status</Label>
                  <Select required>
                    <SelectTrigger id="catalogue">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="next">Restricted</SelectItem>
                      <SelectItem value="sveltekit">Not Restricted</SelectItem>
                    </SelectContent>
                  </Select>
                  <Card>
                    <CardHeader className="items-center">
                      <Label>Upload Images</Label>
                      <ImagePlus />
                      <Button className="bg-slate-400">Choose Images</Button>
                    </CardHeader>
                  </Card>

                  {/* <Label>Added Date</Label>
                  <DateRangePicker /> */}

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
