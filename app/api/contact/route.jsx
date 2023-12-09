import { connectMongoDB } from "@/app/mongodb";
import Contact from "@/app/models/Contact";
export async function POST(req) {
  await connectMongoDB();
  const { name, text, email } = await req.json();

  await Contact.create({ name, text, email });
  return Response.json({ status: "success" });
}
