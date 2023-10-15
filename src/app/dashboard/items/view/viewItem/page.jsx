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
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Tabs, TabsContent } from "@/app/components/ui/tabs";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();
  const handleItemEdit = (e) => {
    e.preventDefault();
    router.push("/items/editItems");
  };
  const handleDeleteItem = (e) => {
    e.preventDefault();
    router.push("/items/viewItems");
  };
  return (
    <Tabs defaultValue="overview" className="space-y-4 p-5">
      <TabsContent value="overview" className="space-y-4">
        <div className="flex gap-6">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>View Item</CardTitle>
              <CardDescription>View item details here.</CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="flex flex-col space-y-1.5">
                  <Label>Item ID</Label>
                  <Input type="text" readOnly></Input>
                  <Label>Item Name</Label>
                  <Input type="text" readOnly></Input>
                  {/* catalogue dropdown */}
                  <Label htmlFor="catalogue">Catalogue Status</Label>
                  <Input type="text" readOnly></Input>
                  <Label>Item Description</Label>
                  <Input type="text" readOnly></Input>
                  <Label>Images</Label>
                  <Card>
                    <CardHeader>
                      {/* Uploaded Image Should Be Displayed Here */}
                    </CardHeader>
                  </Card>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col md:flex-row gap-x-52 gap-y-4 w-full">
              <Button onClick={handleItemEdit} className="w-40">
                Edit Item
              </Button>
              <Button className="w-40">
                <AlertDialog>
                  <AlertDialogTrigger>Delete Item</AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you sure you want to delete?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        <p>This action cannot be undone.</p>
                        <p>This will permanently delete item details.</p>
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={handleDeleteItem}>
                        Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default Page;
