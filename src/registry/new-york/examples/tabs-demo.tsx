import { component$ } from "@builder.io/qwik";
import { Button } from "~/registry/new-york/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/registry/new-york/ui/card";
import { Input } from "~/registry/new-york/ui/input";
import { Label } from "~/registry/new-york/ui/label";
import { Tabs, TabPanel, TabList, Tab } from "~/registry/new-york/ui/tabs";

export default component$(() => {
  return (
    <Tabs class="w-[400px]">
      <TabList class="grid w-full grid-cols-2">
        <Tab value="account">Account</Tab>
        <Tab value="password">Password</Tab>
      </TabList>
      <TabPanel>
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent class="space-y-2">
            <div class="space-y-1">
              <Label for="name">Name</Label>
              <Input id="name" value="Pedro Duarte" />
            </div>
            <div class="space-y-1">
              <Label for="username">Username</Label>
              <Input id="username" value="~peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabPanel>
      <TabPanel label="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent class="space-y-2">
            <div class="space-y-1">
              <Label for="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div class="space-y-1">
              <Label for="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabPanel>
    </Tabs>
  );
});
