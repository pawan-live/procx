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
import { Edit, Trash } from "lucide-react";
import Link from "next/link";

// pass in params as props to access URL params
const Page = ({ params }) => {
  const handleDelete = (id) => {
    // TODO: Delete item from database
    console.log("Deleted item with id: " + id);
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
            <CardFooter className="flex flex-col md:flex-row gap-x-2 gap-y-4 w-full">
              <Link href={`/dashboard/items/edit/${params.itemID}`}>
                <Button variant="" className="w-40">
                  Edit <Edit className="ml-2 w-4" />
                </Button>
              </Link>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button className="w-40" variant="destructive">
                    Delete <Trash className="ml-2 w-4" />
                  </Button>
                </AlertDialogTrigger>
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
                    <AlertDialogAction
                      // get params from URL
                      onClick={() => {
                        handleDelete(params.itemID);
                      }}
                    >
                      Delete
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </CardFooter>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default Page;
