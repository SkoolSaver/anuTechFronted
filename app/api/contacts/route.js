// app/api/contacts/route.js

import { initDB } from "@/lib/init-db";
import Contact from "@/models/Contact";

export async function POST(request) {
  try {
    const body = await request.json();

    // Ensure DB is initialized and synced (only once per cold start)
    await initDB();

    // Create new contact
    const newContact = await Contact.create({
      username: body.username,
      email: body.email,
      mobno: body.mobno,
      message: body.message,
    });

    return Response.json(newContact, { status: 201 });
  } catch (error) {
    console.error("Error saving contact:", error);
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}
