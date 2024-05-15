import { supabase } from "supabaseClient";

export async function getServerSideProps(context) {
  // Initialize Supabase client
  
  // Retrieve the access token from cookies or headers
  const { accessToken } = context.req.cookies; // Example: Assuming the token is stored in cookies
  
  // Set the Supabase access token to make authenticated requests
  supabase.auth.session = () => ({ access_token: accessToken });

  // Fetch the user profile from Supabase
  const { data: user, error } = await supabase.auth.api.getUser(accessToken);

  if (error) {
    console.error('Error fetching user data:', error.message);
    // Handle error, e.g., return an error page or redirect to login
    return { props: {} };
  }

  // Check if you have the Twitter user ID stored or accessible in the user's data
  const twitterUserId = user.user_metadata?.twitter_user_id; // Adjust based on how you store/access this information

  // Pass the Twitter user ID (and any other needed data) to the page via props
  return { props: { twitterUserId } };
}

export default function MyPage({ twitterUserId }) {
  // Use the twitterUserId in your component
  return (
    <div>
      {/* Render your page content here, using the twitterUserId as needed */}
    </div>
  );
}