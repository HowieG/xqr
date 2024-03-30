import { useEffect } from "react";
import { useRouter } from "next/router";
import { supabase } from "../../supabaseClient";

const signInWithTwitter = async () => {
  console.log("Attempting to sign in with Twitter");
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "twitter",
  });
  if (error) {
    console.error("Error signing in with Twitter:", error.message);
    return false; // Indicate failure
  } else {
    console.log("Sign in with Twitter successful", data);
    return true; // Indicate success
  }
};

const SignInWithTwitterPage = () => {
  const router = useRouter();

  useEffect(() => {
    (async () => {
      // Immediately invoked async function
      const success = await signInWithTwitter();
      if (success) {
        console.log("Redirecting to /blah");
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
