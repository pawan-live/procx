"use client";

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
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BarLoader } from "react-spinners";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Name must be greater than 3 characters.",
  }),
  address: z.string().min(5, {
    message: "Address must be greater than 5 characters.",
  }),
  description: z.string().min(5, {
    message: "Description must be greater than 5 characters.",
  }),
  contractStart: z.string().min(10, {
    message: "Phone Number must be 10 characters.",
  }),
  contractEnd: z.string().min(10, {
    message: "Contract Period must be 10 characters.",
  }),
  contact: z.string().min(10, {
    message: "Contact number must be 10 characters.",
  }),
});

const Page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isReqLoading, setIsReqLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data) => {
    setIsReqLoading(true);
    // send the form data to API (POST request with axios)
    console.log(data);
    axios
      .post(`${BASE_URL}${API_URLS.SUPPLIERS}`, data)
      .then((res) => {
        console.log(res);
        setIsReqLoading(false);
        router.push("/dashboard/suppliers");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const router = useRouter();

  return (
    <Tabs defaultValue="overview" className="space-y-4 p-5">
      <TabsContent value="overview" className="space-y-4">
        <div className="flex gap-6"></div>
        {isReqLoading && (
          <div className="flex flex-col justify-center items-center w-full h-screen bg-white absolute z-10">
            <BarLoader width={300} height={5} color="black" className="mb-4" />
            <div>Saving...</div>
          </div>
        )}
        <div className="flex">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Add Supplier</CardTitle>
              <CardDescription>Add a new supplier.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Supplier Name</FormLabel>
                        <FormControl>
                          <Input placeholder="" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address</FormLabel>
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
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Input placeholder="" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="contractStart"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contract Start</FormLabel>
                        <FormControl>
                          <Input placeholder="" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="contractEnd"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contract End</FormLabel>
                        <FormControl>
                          <Input placeholder="" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="contact"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contact</FormLabel>
                        <FormControl>
                          <Input placeholder="" {...field} />
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

                  <Button type="submit" className="w-40">
                    Submit
                  </Button>
                </form>
              </Form>

              {/*               <Form {...form}>
                <form >
                  <div className="flex flex-col md:flex-row gap-x-4 gap-y-4 w-full">
                    <div className="flex flex-col space-y-1.5 w-full lg:w-1/2">
                      <Label>Supplier Name</Label>
                      <Input type="text" required></Input>
                      <Label>Address</Label>
                      <Input type="text" required></Input>
                      <Label>Description</Label>
                      <Input type="text" required></Input>
                    </div>

                    <div className="flex flex-col space-y-1.5 w-full lg:w-1/2">
                      <Label>Supervisor Name</Label>
                      <Input type="text" required></Input>
                      <Label>Contact Number</Label>
                      <Input type="text" required></Input>
                      <Label>Contract Period</Label>
                      <DateRangePicker />
                    </div>
                  </div>
                </form>
              </Form> */}
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default Page;
