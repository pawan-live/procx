"use client";

import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/ui/popover";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/app/components/ui/table";
import { API_URLS, BASE_URL } from "@/app/utils/constants";
import axios from "axios";
import { Eye, ViewIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import BarLoader from "react-spinners/BarLoader";

const Page = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    getItems();
  }, []);

  // function to send request to server
  const getItems = async () => {
    const res = await axios.get(`${BASE_URL}${API_URLS.ITEMS}`);
    setIsLoading(false);
    setItems(res.data);
  };

  return (
    <div>
      {/* <Card className="w-full"> */}
      <CardHeader>
        <CardTitle>Supplier Items</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading && (
          <div className="flex flex-col justify-center items-center w-full h-60">
            <BarLoader width={300} height={5} color="black" />
            <p className="text-xl font-normal mt-2">Loading</p>
          </div>
        )}
        {!isLoading && (
          <Table>
            <TableBody>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Item</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Image</TableHead>
                <TableHead>Restriction</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
              {items.length > 0 &&
                items.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.id.toString().padStart(3, "0")}</TableCell>
                    <TableCell>{item.itemName}</TableCell>
                    <TableCell>{item.description}</TableCell>
                    <TableCell>
                      <Popover>
                        <PopoverTrigger>
                          <div className="relative w-20 h-20 rounded-md">
                            <Image
                              src={item.imageUrl}
                              alt={item.itemName}
                              fill
                              className="object-cover rounded-md"
                              quality={40}
                            />
                          </div>
                        </PopoverTrigger>
                        <PopoverContent>
                          <div className="mb-3">{item.description}</div>
                          <div className="relative w-60 h-60">
                            <Image
                              src={item.imageUrl}
                              alt={item.itemName}
                              fill
                              className="object-cover rounded-md"
                              quality={40}
                            />
                          </div>
                        </PopoverContent>
                      </Popover>
                    </TableCell>
                    <TableCell>
                      {item.restricted ? (
                        <Badge variant="destructive">Yes</Badge>
                      ) : (
                        <Badge variant="outlined">No</Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      <Link href={`/dashboard/items/view/${item.id}`}>
                        <Button variant="" className="flex items-center">
                          View
                          <Eye className="w-4 ml-2" />
                        </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
      <CardFooter>
        {" "}
        <Link href="/dashboard/items/add">
          <Button>Add New Item</Button>
        </Link>
      </CardFooter>
      {/* </Card> */}
    </div>
  );
};

export default Page;
