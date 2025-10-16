import React from "react";
import styles from "./submissions.module.css";
import DeleteButton from "./DeleteButton";
import { getDb } from "@/app/api/_lib/mongodb";

export const metadata = {
	title: "Brochure Submissions",
	description: "List of brochure submissions stored in MongoDB",
};

// Always render fresh data; do not statically cache this page
export const dynamic = "force-dynamic";
export const revalidate = 0;

async function fetchSubmissions() {
	const db = await getDb();
	const collection = db.collection(process.env.MONGODB_COLLECTION || "brochure_submissions");
		const docs = await collection
			.find({}, { projection: {} })
		.sort({ submittedAt: -1 })
		.limit(500)
		.toArray();
	return docs;
}

export default async function Page() {
	let rows = [];
	try {
		rows = await fetchSubmissions();
	} catch (e) {
		console.error("Failed to load submissions", e);
	}

	return (
		<main className={styles.container}>
			<div className={styles.toolbar}>
				<h1 className={styles.title}>Brochure Submissions</h1>
				<span className={styles.count}>{rows.length} {rows.length === 1 ? "record" : "records"}</span>
			</div>
			{rows.length === 0 ? (
				<p className={styles.empty}>No submissions yet.</p>
			) : (
				<div className={styles.tableWrap}>
					<table className={styles.table}>
						<thead>
							<tr>
								<th scope="col">Name</th>
								<th scope="col">Email</th>
								<th scope="col">Country</th>
								<th scope="col">Phone</th>
								<th scope="col">Submitted</th>
								<th scope="col" className={styles.actionsCol}>Actions</th>
											</tr>
						</thead>
						<tbody>
											{rows.map((r) => (
												<tr key={r._id?.toString?.() || Math.random()}>
																	<td data-label="Name">{r.name}</td>
																	<td data-label="Email">{r.email}</td>
																	<td data-label="Country">{r.country}</td>
																	<td data-label="Phone">{r.phone}</td>
																	<td data-label="Submitted">{r.submittedAt ? new Date(r.submittedAt).toLocaleString() : ""}</td>
																						<td className={styles.actionsCell} data-label="Actions">
																							<DeleteButton id={r._id?.toString?.() || ""} className={`${styles.iconBtn} ${styles.iconBtnDelete}`} />
													</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}
		</main>
	);
}
