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
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Tabs, TabsContent } from "@/app/components/ui/tabs";

const page = () => {
  return (
    <Tabs defaultValue="overview" className="space-y-4 p-5">
      <TabsContent value="overview" className="space-y-4">
        <div className="flex gap-6"></div>
        <div className="flex">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Update Supplier</CardTitle>
              <CardDescription>Update supplier details here.</CardDescription>
            </CardHeader>
            <CardContent>
              <form>
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
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <Button>Add Supplier</Button>
            </CardFooter>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default page;
