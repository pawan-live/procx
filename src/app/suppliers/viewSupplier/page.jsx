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
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
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

const Page = () => {
  return (
    <Tabs defaultValue="overview" className="space-y-4 p-5">
      <TabsContent value="overview" className="space-y-4">
        <div className="flex gap-6"></div>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>View Supplier</CardTitle>
            <CardDescription>View supplier details here.</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col md:flex-row gap-x-4 gap-y-4 w-full">
                <div className="flex flex-col space-y-1.5 w-full lg:w-1/2">
                  <Label>Supplier Name</Label>
                  <Input
                    type="text"
                    value="Amarabandu Rupasinghe"
                    readOnly
                  ></Input>
                  <Label>Address</Label>
                  <Input type="text" value="Colombo 05" readOnly></Input>
                  <Label>Description</Label>
                  <Input type="text" value="Fuck SLIIT" readOnly></Input>
                </div>

                <div className="flex flex-col space-y-1.5 w-full lg:w-1/2">
                  <Label>Supervisor Name</Label>
                  <Input
                    type="text"
                    value="Galapatha Madagama"
                    readOnly
                  ></Input>
                  <Label>Contact Number</Label>
                  <Input type="text" value="0711152345" readOnly></Input>
                  <Label>Contract Period</Label>
                  <Input
                    type="text"
                    value="Jan 20, 2022 - Feb 09, 2022"
                    readOnly
                  ></Input>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col md:flex-row gap-x-52 gap-y-4 w-full">
            <Button>Edit Supplier</Button>
            <Button>Delete Supplier</Button>
          </CardFooter>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Supplier Items</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableBody>
                <TableRow>
                  <TableHead>Item ID</TableHead>
                  <TableHead>Item Name</TableHead>
                  <TableHead>Unit Price</TableHead>
                  <TableHead>Catalogue Status</TableHead>
                </TableRow>
                <TableRow>
                  <TableCell>001</TableCell>
                  <TableCell>Gal</TableCell>
                  <TableCell>150 LKR</TableCell>
                  <TableCell>Restricted</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>002</TableCell>
                  <TableCell>Vali</TableCell>
                  <TableCell>200 LKR</TableCell>
                  <TableCell>Not Restricted</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="flex flex-col md:flex-row gap-x-40 gap-y-4 w-full">
            <Button>Edit Items</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default Page;
