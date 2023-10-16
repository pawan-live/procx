"use client";

import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { uploadImageToSpaces } from "@/app/helpers/uploadImageToSpaces";
import { zodResolver } from "@hookform/resolvers/zod";
import { UploadCloud } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BarLoader } from "react-spinners";
import * as z from "zod";

const formSchema = z.object({
  itemName: z.string().min(4, {
    message: "Item name must be at least 4 characters.",
  }),
  description: z.string().min(10, {
    message: "Item description must be at least 10 characters.",
  }),
  restricted: z.string(),
  image: z.any(),
});

const Page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageURL, setImageURL] = useState("");

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      itemName: "",
      description: "",
      restricted: "Not Restricted",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
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

    setIsLoading(true); // Set loading state to true before starting the upload.

    try {
      const uploadedURL = await uploadImageToSpaces(selectedImage);
      setImageURL(uploadedURL);
      setFormData({
        ...formData,
        imageURL: uploadedURL,
      });
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="m-4 p-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Item name</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Item description</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="restricted"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Restricted status</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Restricted">Restricted</SelectItem>
                    <SelectItem value="Not Restricted">
                      Not Restricted
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Upload image</FormLabel>
                <FormControl>
                  <div className="flex flex-row">
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
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {isLoading && (
            <div className="flex flex-col justify-center items-center w-full h-40">
              <BarLoader width={300} height={5} color="black" />
            </div>
          )}
          {imageURL && (
            <div className="relative w-60 h-60 rounded-md">
              <Image
                src={imageURL}
                alt="Uploaded Image"
                fill
                objectFit="cover"
                className="rounded-md"
                quality={20}
              />
            </div>
          )}
          <Button type="submit" className="w-40">
            Submit
          </Button>
        </form>
      </Form>
    </Card>
  );
};

export default Page;
