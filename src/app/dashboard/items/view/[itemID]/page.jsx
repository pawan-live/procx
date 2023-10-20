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
import { Badge } from "@/app/components/ui/badge";
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
import { API_URLS, BASE_URL } from "@/app/utils/constants";
import axios from "axios";
import { Edit, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

// pass in params as props to access URL params
const Page = ({ params }) => {
  const [items, setItems] = React.useState([]);
  const [itemId, setItemId] = React.useState([]);
  const [itemName, setItemName] = React.useState([]);
  const [itemDescription, setItemDescription] = React.useState([]);
  const [imageUrl, setImageUrl] = React.useState([]);
  const [restricted, setRestricted] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const router = useRouter();

  useEffect(() => {
    const getItemByID = async () => {
      try {
        const res = await axios.get(
          `${BASE_URL}${API_URLS.ITEMS}/${params.itemID}`,
        );
        setIsLoading(false);
        console.log(res.data);
        setItemId(res.data.id);
        setItemName(res.data.itemName);
        setItemDescription(res.data.description);
        setRestricted(res.data.restricted);
        setImageUrl(res.data.imageUrl);
      } catch (error) {
        console.error("Error fetching item:", error);
      }
    };

    getItemByID();
  }, [params.itemID]);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}${API_URLS.ITEMS}/${id}`);
      console.log("Item deleted successfully");
      console.log(response.data);
      router.push("/dashboard/items/view");
    } catch (error) {
      console.error("Error deleting item:", error);
    }
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
                  <Input type="text" defaultValue={itemId} disabled></Input>
                  <Label>Item Name</Label>
                  <Input type="text" defaultValue={itemName} disabled></Input>

                  <Label>Restricted</Label>

                  {restricted ? (
                    <Input type="text" value="Yes" disabled></Input>
                  ) : (
                    <Input type="text" value="No" disabled></Input>
                  )}
                  <Label>Item Description</Label>
                  <Input
                    type="text"
                    defaultValue={itemDescription}
                    disabled
                  ></Input>
                  <Label>Images</Label>
                  <Card>
                    <CardHeader>
                      <div className="relative w-60 h-60">
                        <Image
                          src={imageUrl}
                          alt={itemName}
                          fill
                          className="object-cover rounded-md"
                          quality={40}
                        />
                      </div>
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
                      This action cannot be undone.
                      <br />
                      This will permanently delete item details.
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
