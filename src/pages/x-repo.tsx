/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Pg7ykW6paOL
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Component() {
  return (
    <div>
      <div>
        <div>Accounts</div>
        <div>View the accounts you follow</div>
      </div>
      <div className="px-0">
        <div className="flex flex-col items-center space-y-4">
          <Avatar className="h-12 w-12 border">
            <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="space-y-1 text-center">
            <h2 className="text-xl font-bold">John Doe</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Tweets and replies
            </p>
          </div>
          <Button>Follow</Button>
        </div>
        <div className="mx-auto max-w-[600px]">
          <Separator className="my-4" />
        </div>
        <div className="flex items-center space-x-4">
          <Avatar className="h-12 w-12 border">
            <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <div className="space-y-1">
              <h2 className="text-xl font-bold">Jane Smith</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Official account of Jane Smith
              </p>
            </div>
          </div>
          <Button className="ml-auto">Follow</Button>
        </div>
        <div className="mx-auto max-w-[600px]">
          <Separator className="my-4" />
        </div>
        <div className="flex items-center space-x-4">
          <Avatar className="h-12 w-12 border">
            <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <div className="space-y-1">
              <h2 className="text-xl font-bold">Acme Inc</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Official tweets from Acme Inc
              </p>
            </div>
          </div>
          <Button className="ml-auto">Following</Button>
        </div>
      </div>
    </div>
  );
}
