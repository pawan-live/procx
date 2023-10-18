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
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";
import { Tabs, TabsContent } from "@/app/components/ui/tabs";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();

  const handleReview = (e) => {
    e.preventDefault();
    router.push("/dashboard/suppliers/view");
  };

  return (
    <Tabs defaultValue="overview" className="space-y-4 p-5">
      <TabsContent value="overview" className="space-y-4">
        <div className="flex gap-6"></div>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Review Suppliers</CardTitle>
            <CardDescription>Review all suppliers.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableBody>
                <TableRow>
                  <TableHead>Supplier ID</TableHead>
                  <TableHead>Supplier Name</TableHead>
                </TableRow>
                <TableRow>
                  <TableCell>SID001</TableCell>
                  <TableCell>Janitha Constructions</TableCell>
                  <TableCell>
                    <Button onClick={handleReview} variant="destructive">
                      Review
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default Page;

// "use client";

// import { Button } from "@/app/components/ui/button";
// import { useRouter } from "next/navigation";
// import React from "react";

// const Page = () => {
//   const router = useRouter();
//   const handleAddSupplier = (e) => {
//     e.preventDefault();
//     router.push("/suppliers/addSupplier");
//   };
//   return (
//     <div>
//       <p>All Suppliers List Here</p>
//       <Button onClick={handleAddSupplier}>Add New Supplier</Button>
//     </div>
//   );
// };

// export default Page;
