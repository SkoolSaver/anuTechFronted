import fs from "fs";
import path from "path";
import * as XLSX from "xlsx";

const DATA_DIR = path.join(process.cwd(), "data");
const FILE_PATH = path.join(DATA_DIR, "grad-gains-submissions.xlsx");
const HEADERS = ["Timestamp", "Name", "Email", "Country", "Country Code", "Phone"];

export async function writeSubmission({ name, email, country, countryCode, phone }) {
  // Local Excel storage
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  let wb;
  if (fs.existsSync(FILE_PATH)) {
    const buf = fs.readFileSync(FILE_PATH);
    wb = XLSX.read(buf, { type: "buffer" });
  } else {
    wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet([HEADERS]);
    XLSX.utils.book_append_sheet(wb, ws, "Submissions");
  }
  const wsName = wb.SheetNames[0];
  const ws = wb.Sheets[wsName];
  const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
  const ts = new Date().toISOString();
  data.push([ts, name, email, country, countryCode, phone]);
  const newWs = XLSX.utils.aoa_to_sheet(data);
  wb.Sheets[wsName] = newWs;
  const tmpPath = path.join(DATA_DIR, `.tmp-${Date.now()}-${Math.round(Math.random()*1e6)}.xlsx`);
  try {
    const buf = XLSX.write(wb, { type: "buffer", bookType: "xlsx" });
    fs.writeFileSync(tmpPath, buf);
    fs.renameSync(tmpPath, FILE_PATH);
  } catch (e) {
    if (fs.existsSync(tmpPath)) {
      try { fs.unlinkSync(tmpPath); } catch {}
    }
    if (e && (e.code === "EPERM" || e.code === "EBUSY")) {
      const msg = "Unable to save Excel file. It looks like the file is open in Excel or locked. Please close the file and try again.";
      const err = new Error(msg); err.status = 423; throw err;
    }
    throw e;
  }
}

export async function readSubmissions() {
  // Local Excel storage
  if (!fs.existsSync(FILE_PATH)) return [];
  const buf = fs.readFileSync(FILE_PATH);
  const wb = XLSX.read(buf, { type: "buffer" });
  const ws = wb.Sheets[wb.SheetNames[0]];
  return XLSX.utils.sheet_to_json(ws, { defval: "" });
}
