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
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { Tabs, TabsContent } from "@/app/components/ui/tabs";
import { ImagePlus } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();

  const handleUpdate = (e) => {
    e.preventDefault();
    router.push("/items/viewItems/viewItem");
  };
  return (
    <Tabs defaultValue="overview" className="space-y-4 p-5">
      <TabsContent value="overview" className="space-y-4">
        <div className="flex gap-6">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Update Item</CardTitle>
              <CardDescription>Update item details here.</CardDescription>
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
                  <Label>Item Description</Label>
                  <Input type="text" required></Input>
                  <Label>Images</Label>
                  <Card>
                    <CardHeader>
                      <div className="flex flex-col space-y-3 items-center">
                        <Label>Upload Images Here</Label>
                        <ImagePlus />
                        <Button className="bg-slate-400">Choose Images</Button>
                      </div>
                    </CardHeader>
                  </Card>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <Button onClick={handleUpdate} className="w-40">
                Update Item
              </Button>
            </CardFooter>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default Page;
