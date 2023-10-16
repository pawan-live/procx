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
import { API_URLS, BASE_URL } from "@/app/utils/constants";
import axios from "axios";
import { ImagePlus } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Page = ({ params }) => {
  const router = useRouter();
  const [itemId, setItemId] = React.useState([]);
  const [itemName, setItemName] = React.useState([]);
  const [itemDescription, setItemDescription] = React.useState([]);
  const [imageUrl, setImageUrl] = React.useState([]);
  const [restricted, setRestricted] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

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

  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        `${BASE_URL}${API_URLS.ITEMS}/${params.itemID}`,
        {
          itemName: itemName,
          description: itemDescription,
          restricted: restricted,
          imageUrl: imageUrl,
        },
      );
      console.log("Item updated successfully");
      console.log(response.data);
      router.push("/dashboard/items");
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };
  return (
    <Tabs defaultValue="overview" className="space-y-4 p-5">
      <TabsContent value="overview" className="space-y-4">
        <div className="flex gap-6">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Edit Item</CardTitle>
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
                        <Button variant="outline">Choose Images</Button>
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
