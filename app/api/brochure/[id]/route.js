import { ObjectId } from "mongodb";
import { getDb } from "@/app/api/_lib/mongodb";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function DELETE(_req, { params }) {
  try {
    const { id } = params || {};
    if (!id) {
      return new Response(JSON.stringify({ error: "Missing id" }), { status: 400 });
    }
    let objectId;
    try {
      objectId = new ObjectId(id);
    } catch {
      return new Response(JSON.stringify({ error: "Invalid id" }), { status: 400 });
    }

    const db = await getDb();
    const collection = db.collection(process.env.MONGODB_COLLECTION || "brochure_submissions");
    const res = await collection.deleteOne({ _id: objectId });
    if (res.deletedCount === 0) {
      return new Response(JSON.stringify({ ok: false, deleted: 0 }), { status: 404 });
    }
    return new Response(JSON.stringify({ ok: true, deleted: res.deletedCount }), { status: 200 });
  } catch (err) {
    console.error("Delete submission error", err);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}
