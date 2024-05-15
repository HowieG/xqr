// pages/api/twitterData.js
import needle from "needle"; // needle is a lightweight HTTP client for Node.js

export default async function handler(req, res) {
  if (req.method === "GET") {
    const token = process.env.TWITTER_BEARER_TOKEN; // Ensure you have this in your .env file
    const userId = req.query.userId; // Assumes you're passing the user's Twitter ID as a query parameter

    if (!userId) {
      return res.status(400).json({ error: "Missing userId parameter" });
    }

    try {
      // Fetch user's profile
      const profileResponse = await needle(
        "get",
        `https://api.twitter.com/2/users/${userId}?user.fields=profile_image_url`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (profileResponse.statusCode !== 200) {
        throw new Error("Failed to fetch user profile");
      }

      const userProfile = profileResponse.body;

      // Fetch user's following list
      // Note: Adjust pagination as needed
      const followingResponse = await needle(
        "get",
        `https://api.twitter.com/2/users/${userId}/following`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (followingResponse.statusCode !== 200) {
        throw new Error("Failed to fetch following list");
      }

      const userFollowing = followingResponse.body;

      // Respond with combined data
      res.status(200).json({
        profile: userProfile,
        following: userFollowing,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
