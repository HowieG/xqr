import { useEffect, useState } from "react";
import { AvatarImage, AvatarFallback, Avatar } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { supabase } from "../../supabaseClient";

async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (!error) {
    console.log("Signing out");
  } else {
    console.error("Error signing out:", error.message);
  }
}

export default function Component() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchTwitterData = async () => {
      const userId = "userTwitterId"; // Set this to the actual Twitter ID of the user
      const response = await fetch(`/api/twitterData?userId=${userId}`);
      if (response.ok) {
        const data = await response.json();
        // Now you have access to data.profile and data.following
        setUser({
          avatarUrl: data.profile.data.profile_image_url,
          handle: "@example", // Extract from your authentication flow or Twitter API response
          name: "John Doe", // As above
          following: data.following.data, // This is an array of users the person is following
        });
      } else {
        // Handle errors
        console.error("Failed to fetch Twitter data");
      }
    };

    fetchTwitterData();
  }, []);

  if (!user) {
    // Optionally, render a loading indicator or return null
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="px-0">
        <div className="flex flex-col items-center space-y-4">
          <Avatar className="h-12 w-12 border">
            <AvatarImage alt={user?.handle} src={user?.avatarUrl} />
            <AvatarFallback>{user?.name}</AvatarFallback>
          </Avatar>
          <div className="space-y-1 text-center">
            <h2 className="text-xl font-bold">{user.name}</h2>
          </div>
          <Button onClick={signOut}>Sign Out</Button>
        </div>
        <div className="flex flex-col items-center">
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
              </div>
            </div>
            <Button className="ml-auto">Following</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
