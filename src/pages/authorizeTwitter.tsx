import { useEffect } from "react";
import { useRouter } from "next/router";
import { supabase } from "../../supabaseClient";

const signInWithTwitter = async () => {
  console.log("Attempting to sign in with Twitter");
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "twitter",
  });

  // Check for specific error related to email absence, if applicable.
  // Note: The error handling logic here is a general approach. You might need to adjust
  // the condition based on the actual error message or code you receive from Supabase
  // when the email is not present.
  if (error) {
    // Log error for debugging purposes
    console.error("Error signing in with Twitter:", error.message);

    // Check if the error is specifically about the absence of an email
    if (
      error.message.includes("Error getting user email from external provider")
    ) {
      console.log("Proceeding without email.");
      return true; // Indicate success, as email is not required for your application
    }

    return false; // Indicate failure for other types of errors
  } else {
    console.log("Sign in with Twitter successful", data);
    return true; // Indicate success
  }
};

// const signInWithTwitter = async () => {
//   const { error } = await supabase.auth.signInWithOAuth({
//     provider: "twitter",
//     options: { redirectTo: `${location.origin}/auth/callback/oauth` },
//   });
//   if (error) {
//     throw error;
//   }
//   return true;
// };

const SignInWithTwitterPage = () => {
  const router = useRouter();

  useEffect(() => {
    (async () => {
      // Immediately invoked async function
      const success = await signInWithTwitter();

      if (success) {
        await router.push("/x-repo");
      } else {
        console.log("Sign-in failed. Handling error...");
        // Handle sign-in failure (e.g., show an error message or redirect to an error page)
      }
    })();
  }, [router]);

  return <div>Redirecting to Twitter for authentication...</div>;
};

export default SignInWithTwitterPage;
