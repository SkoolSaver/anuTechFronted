"use client";
import React, { useTransition, useState } from "react";
import { useRouter } from "next/navigation";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function DeleteButton({ id, className = "" }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [loading, setLoading] = useState(false);

  const onDelete = async () => {
    if (!id) return;
    const confirm = window.confirm("Delete this submission? This cannot be undone.");
    if (!confirm) return;
    try {
      setLoading(true);
      const res = await fetch(`/api/brochure/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Delete failed");
      startTransition(() => router.refresh());
    } catch (e) {
      alert("Failed to delete. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={onDelete}
      disabled={loading || isPending}
      className={className}
      aria-label="Delete submission"
      title="Delete"
    >
      <DeleteOutlineIcon fontSize="small" />
    </button>
  );
}
