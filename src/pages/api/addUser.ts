import { supabase } from "../../supabaseClient";

export default async function handler(req: any, res: any) {
  const { username } = req.body;
  const { data, error } = await supabase
    .from("users")
    .insert([{ username: username, following: false }]);

  if (error) return res.status(401).json({ error: error.message });
  return res.status(200).json(data);
}
