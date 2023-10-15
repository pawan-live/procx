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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { Tabs, TabsContent } from "@/app/components/ui/tabs";
import { uploadImageToSpaces } from "@/app/helpers/uploadImageToSpaces";
import { ImagePlus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Page = () => {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageURL, setImageURL] = useState("");

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    router.push("/items/viewItems/viewItem");
  };

  const handleImageUpload = async () => {
    if (!selectedImage) {
      alert("Please select an image to upload.");
      return;
    }

    try {
      const uploadedURL = await uploadImageToSpaces(selectedImage);
      setImageURL(uploadedURL);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <Tabs defaultValue="overview" className="space-y-4 p-5">
      <TabsContent value="overview" className="space-y-4">
        <div className="flex gap-6">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Add New Item</CardTitle>
              <CardDescription>
                Fill required details to add new item.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="flex flex-col gap-y-4">
                  <div>
                    <Label>Item Name</Label>
                    <Input type="text" required></Input>
                  </div>
                  {/* catalogue dropdown */}
                  <div>
                    <Label htmlFor="catalogue">Catalogue Status</Label>
                    <Select required>
                      <SelectTrigger id="catalogue">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="next">Restricted</SelectItem>
                        <SelectItem value="sveltekit">
                          Not Restricted
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Item Description</Label>
                    <Input type="text" required></Input>
                  </div>
                  <div>
                    <Label>Image</Label>
                    <Input
                      id="picture"
                      type="file"
                      onChange={handleImageChange}
                    />
                  </div>
                  {imageURL && <img src={imageURL} alt="Uploaded Image" />}
                </div>
              </form>
              <Button onClick={handleImageUpload}>Upload</Button>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button>Add item</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Create Item?</AlertDialogTitle>
                    <AlertDialogDescription>
                      <p>This action will create a new item.</p>
                      <p>
                        Make sure added details are correct before proceeding.
                      </p>
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="w-40">
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction className="w-40" onClick={handleAddItem}>
                      Create Item
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
