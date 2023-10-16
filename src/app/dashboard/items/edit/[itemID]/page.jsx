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
import { uploadImageToSpaces } from "@/app/helpers/uploadImageToSpaces";
import { API_URLS, BASE_URL } from "@/app/utils/constants";
import axios from "axios";
import { UploadCloud } from "lucide-react";
import { ImagePlus } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useState } from "react";

const Page = ({ params }) => {
  const router = useRouter();
  const [itemId, setItemId] = React.useState([]);
  const [itemName, setItemName] = React.useState([]);
  const [itemDescription, setItemDescription] = React.useState([]);
  const [imageUrl, setImageUrl] = React.useState([]);
  const [restricted, setRestricted] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageURL, setImageURL] = useState("");

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
    const updatedItem = {
      itemName: itemName,
      description: itemDescription,
      restricted: restricted,
      imageUrl: imageUrl,
    };

    try {
      const response = await axios.put(
        `${BASE_URL}${API_URLS.ITEMS}/${params.itemID}`,
        updatedItem,
      );
      console.log("Item updated successfully");
      console.log(response.data);
      router.push("/dashboard/items");
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleImageUpload = async () => {
    setImageURL("");
    if (!selectedImage) {
      alert("Please select an image to upload.");
      return;
    }

    setIsLoading(true);

    try {
      const uploadedURL = await uploadImageToSpaces(selectedImage);
      setImageURL(uploadedURL);
      form.setValue("imageUrl", uploadedURL);
      console.log(form);
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setIsLoading(false);
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
                  <Input
                    type="text"
                    required
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                  />

                  {/* Catalogue dropdown */}
                  <Label htmlFor="catalogue">Catalogue Status</Label>
                  <Select
                    required
                    onChange={(e) => {
                      console.log("Selected value:", e.target.value);
                      setRestricted(e.target.value);
                    }}
                  >
                    <SelectTrigger id="catalogue">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="Restricted">Restricted</SelectItem>
                      <SelectItem value="Not Restricted">
                        Not Restricted
                      </SelectItem>
                    </SelectContent>
                  </Select>

                  <Label>Item Description</Label>
                  <Input
                    type="text"
                    required
                    value={itemDescription}
                    onChange={(e) => setItemDescription(e.target.value)}
                  />

                  <Label>Images</Label>
                </div>
              </form>
            </CardContent>

            <div className="flex flex-col space-y-3 items-center">
              <Label>Upload Images Here</Label>
              <Input type="file" onChange={handleImageChange} />
              <Button
                disabled={!selectedImage}
                className="ml-2"
                onClick={(e) => {
                  e.preventDefault();
                  handleImageUpload();
                }}
              >
                Upload
                <UploadCloud className="w-5 ml-2" />
              </Button>
            </div>
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
