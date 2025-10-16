import { getDb } from "../_lib/mongodb";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request) {
  try {
    const { name, email, country, phone } = await request.json();
    if (!name || !email || !country || !phone) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
    }

    const db = await getDb();
    const collection = db.collection(process.env.MONGODB_COLLECTION || "brochure_submissions");
    const doc = {
      name,
      email,
      country,
      phone,
      submittedAt: new Date(),
      source: "grad-gains-brochure",
    };
    await collection.insertOne(doc);

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error("Brochure submit error", err);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}

// Diagnostics endpoint removed since Google Sheets is no longer used
export async function GET() {
  // Simple health check for the endpoint
  try {
    const db = await getDb();
    await db.command({ ping: 1 });
    return new Response(JSON.stringify({ ok: true, db: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    return new Response(JSON.stringify({ ok: false, db: false }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
