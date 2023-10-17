import { cn } from "~/lib/utils";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/registry/new-york/ui/avatar-vanilla";
import { Button } from "~/registry/new-york/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "~/registry/new-york/ui/card";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "~/registry/new-york/ui/command-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "~/registry/new-york/ui/dialog-react";
import { Input } from "~/registry/new-york/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/registry/new-york/ui/tooltip";
import { component$, useSignal } from "@builder.io/qwik";
import { LuCheck, LuPlane, LuPlus } from "@qwikest/icons/lucide";

const users = [
  {
    name: "Olivia Martin",
    email: "m@example.com",
    avatar: "/avatars/01.png",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    avatar: "/avatars/03.png",
  },
  {
    name: "Emma Wilson",
    email: "emma@example.com",
    avatar: "/avatars/05.png",
  },
  {
    name: "Jackson Lee",
    email: "lee@example.com",
    avatar: "/avatars/02.png",
  },
  {
    name: "William Kim",
    email: "will@email.com",
    avatar: "/avatars/04.png",
  },
] as const;

type User = (typeof users)[number];

export const CardsChat = component$(() => {
  const open = useSignal(false);
  const selectedUsers = useSignal<User[]>([]);

  const messages = useSignal([
    {
      role: "agent",
      content: "Hi, how can I help you today?",
    },
    {
      role: "user",
      content: "Hey, I'm having trouble with my account.",
    },
    {
      role: "agent",
      content: "What seems to be the problem?",
    },
    {
      role: "user",
      content: "I can't log in.",
    },
  ]);
  const input = useSignal("");
  const inputLength = input.value.trim().length;

  return (
    <>
      <Card>
        <CardHeader class="flex flex-row items-center">
          <div class="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="/avatars/01.png" alt="Image" />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div>
              <p class="text-sm font-medium leading-none">Sofia Davis</p>
              <p class="text-sm text-muted-foreground">m@example.com</p>
            </div>
          </div>
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  variant="outline"
                  class="ml-auto rounded-full"
                  onClick$={() => (open.value = true)}
                >
                  <LuPlus class="h-4 w-4" />
                  <span class="sr-only">New message</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent sideOffset={10}>New message</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardHeader>
        <CardContent>
          <div class="space-y-4">
            {messages.value.map((message, index) => (
              <div
                key={index}
                class={cn(
                  "flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm",
                  message.role === "user"
                    ? "ml-auto bg-primary text-primary-foreground"
                    : "bg-muted"
                )}
              >
                {message.content}
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <form
            preventdefault:submit
            onSubmit$={() => {
              if (inputLength === 0) return;
              messages.value = [
                ...messages.value,
                {
                  role: "user",
                  content: input.value,
                },
              ];
              input.value = "";
            }}
            class="flex w-full items-center space-x-2"
          >
            <Input
              id="message"
              placeholder="Type your message..."
              class="flex-1"
              autoComplete="off"
              value={input.value}
              onChange$={(e, currentTarget) =>
                (input.value = currentTarget.value)
              }
              error=""
            />
            <Button type="submit" size="icon" disabled={inputLength === 0}>
              <LuPlane class="h-4 w-4" />
              <span class="sr-only">Send</span>
            </Button>
          </form>
        </CardFooter>
      </Card>
      <Dialog open={open} onOpenChange={(open.value = !open.value)}>
        <DialogContent class="gap-0 p-0 outline-none">
          <DialogHeader class="px-4 pb-4 pt-5">
            <DialogTitle>New message</DialogTitle>
            <DialogDescription>
              Invite a user to this thread. This will create a new group
              message.
            </DialogDescription>
          </DialogHeader>
          <Command class="overflow-hidden rounded-t-none border-t bg-transparent">
            <CommandInput placeholder="Search user..." />
            <CommandList>
              <CommandEmpty>No users found.</CommandEmpty>
              <CommandGroup class="p-2">
                {users.map((user) => (
                  <CommandItem
                    key={user.email}
                    class="flex items-center px-2"
                    onSelect={() => {
                      if (selectedUsers.value.includes(user)) {
                        return (selectedUsers.value =
                          selectedUsers.value.filter(
                            (selectedUser) => selectedUser !== user
                          ));
                      }

                      return (selectedUsers.value = [...users].filter((u) =>
                        [...selectedUsers.value, user].includes(u)
                      ));
                    }}
                  >
                    <Avatar>
                      <AvatarImage src={user.avatar} alt="Image" />
                      <AvatarFallback>{user.name[0]}</AvatarFallback>
                    </Avatar>
                    <div class="ml-2">
                      <p class="text-sm font-medium leading-none">
                        {user.name}
                      </p>
                      <p class="text-sm text-muted-foreground">{user.email}</p>
                    </div>
                    {selectedUsers.value.includes(user) ? (
                      <LuCheck class="ml-auto flex h-5 w-5 text-primary" />
                    ) : null}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
          <DialogFooter class="flex items-center border-t p-4 sm:justify-between">
            {selectedUsers.value.length > 0 ? (
              <div class="flex -space-x-2 overflow-hidden">
                {selectedUsers.value.map((user) => (
                  <Avatar
                    key={user.email}
                    class="inline-block border-2 border-background"
                  >
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>{user.name[0]}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
            ) : (
              <p class="text-sm text-muted-foreground">
                Select users to add to this thread.
              </p>
            )}
            <Button
              disabled={selectedUsers.value.length < 2}
              onClick$={() => {
                open.value = false;
              }}
            >
              Continue
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
});
