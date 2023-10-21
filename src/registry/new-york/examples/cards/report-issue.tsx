import { component$, useId } from "@builder.io/qwik";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/registry/new-york/ui/select-vanilla";
import { Textarea } from "~/registry/new-york/ui/textarea";

export const CardsReportIssue = component$(() => {
  const id = useId();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Report an issue</CardTitle>
        <CardDescription>
          What area are you having problems with?
        </CardDescription>
      </CardHeader>
      <CardContent class="grid gap-6">
        <div class="grid gap-4 sm:grid-cols-2">
          <div class="grid gap-2">
            <Label for={`area-${id}`}>Area</Label>
            <Select value="billing">
              <SelectTrigger id={`area-${id}`} aria-label="Area">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="team">Team</SelectItem>
                <SelectItem value="billing">Billing</SelectItem>
                <SelectItem value="account">Account</SelectItem>
                <SelectItem value="deployments">Deployments</SelectItem>
                <SelectItem value="support">Support</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div class="grid gap-2">
            <Label for={`security-level-${id}`}>Security Level</Label>
            <Select value="2">
              <SelectTrigger
                id={`security-level-${id}`}
                class="line-clamp-1 w-full truncate"
                aria-label="Security Level"
              >
                <SelectValue placeholder="Select level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Severity 1 (Highest)</SelectItem>
                <SelectItem value="2">Severity 2</SelectItem>
                <SelectItem value="3">Severity 3</SelectItem>
                <SelectItem value="4">Severity 4 (Lowest)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div class="grid gap-2">
          <Label for={`subject-${id}`}>Subject</Label>
          <Input id={`subject-${id}`} placeholder="I need help with..." />
        </div>
        <div class="grid gap-2">
          <Label for={`description-${id}`}>Description</Label>
          <Textarea
            id={`description-${id}`}
            placeholder="Please include all information relevant to your issue."
          />
        </div>
      </CardContent>
      <CardFooter class="justify-between space-x-2">
        <Button variant="ghost">Cancel</Button>
        <Button>Submit</Button>
      </CardFooter>
    </Card>
  );
});
