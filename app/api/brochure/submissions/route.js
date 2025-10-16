import { getDb } from "@/app/api/_lib/mongodb";

// Ensure Node.js runtime (MongoDB driver is not supported on Edge runtime)
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const db = await getDb();
    const collection = db.collection(process.env.MONGODB_COLLECTION || "brochure_submissions");
    const docs = await collection
      .find({}, { projection: { } })
      .sort({ submittedAt: -1 })
      .limit(500)
      .toArray();
    // Convert ObjectId to string for JSON safety
    const safe = docs.map(d => ({ ...d, _id: d._id?.toString?.() }));
    return new Response(JSON.stringify({ ok: true, count: safe.length, items: safe }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("GET /api/brochure/submissions error", err);
    return new Response(JSON.stringify({ ok: false, error: err?.message || "Internal Server Error" }), { status: 500 });
  }
}
