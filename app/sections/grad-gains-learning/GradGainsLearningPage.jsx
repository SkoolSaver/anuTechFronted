"use client";
import styles from "./gradGains.module.css";
import React, { useMemo, useState } from "react";
import { Box, Button, Typography, Dialog, DialogTitle, DialogContent, DialogActions, TextField, MenuItem, InputAdornment } from "@mui/material";
import Image from "next/image";
import PauseIcon from "@mui/icons-material/Pause";

const countries = [
  { code: "+91", label: "India" },
  { code: "+1", label: "USA" },
  { code: "+44", label: "UK" },
  { code: "+966", label: "Saudi" },
  { code: "+971", label: "UAE" },
  { code: "+49", label: "Germany" },
  { code: "+33", label: "France" },
  { code: "+65", label: "Singapore" },
  { code: "+353", label: "Ireland" },
  { code: "+61", label: "Australia" },
];

const points = [
  "Build strong Python programming skills, including file handling and key AI libraries.",
  "Learn to create AI pipelines using LangChain, ChromaDB, and LlamaIndex.",
  "Gain hands-on experience with large language models, prompt engineering, and OpenAI API integration.",
  "Develop full-stack AI solutions using Flask, Streamlit, Docker, and cloud deployment.",
  "Apply concepts through real-world mini projects and a capstone GenAI application.",
];

// Drive file direct-download helper
const BROCHURE_DRIVE_FILE_ID = "1IPHLmsj3ZhVe3H7TsIwcg1vJfJ_VNYjc";
const getBrochureDownloadUrl = () => `https://drive.google.com/uc?export=download&id=${BROCHURE_DRIVE_FILE_ID}`;

export default function GradGainsLearningPage() {
  const [open, setOpen] = useState(false);
  const [country, setCountry] = useState(countries[0]);
  const [enrollPulse, setEnrollPulse] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [error, setError] = useState("");

  const handlePlayClick = () => {
    setEnrollPulse(true);
    setTimeout(() => setEnrollPulse(false), 2400);
  };

  // Opens WhatsApp chat with a prefilled message
  const handleEnrollClick = () => {
    try {
      const phone = "918309782214"; // +91 83097 82214 in international format (no + or spaces)
      const message = "Hey, I'm interested to know more about Agentic AI course, let me know the details.";
      const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank", "noopener,noreferrer");
    } catch (e) {
      console.error("Failed to open WhatsApp", e);
    }
  };

  const handleExplore = async () => {
    setOpen(true);
    try {
      const res = await fetch("/api/brochure", { method: "GET" });
      const info = await res.json();
      console.log("Env diagnostics (server):", info);
    } catch (e) {
      console.log("Env diagnostics fetch failed", e);
    }
  };
  const handleClose = () => { if(!loading) { setOpen(false); setError(""); } };

  const setField = (k, v) => setForm(prev => ({ ...prev, [k]: v }));

  const triggerDownload = (url) => {
    try {
      const a = document.createElement("a");
      a.href = url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (e) {
      // Fallback
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const onSubmit = async () => {
    if (!form.name || !form.email || !form.phone) { setError("Please fill all fields"); return; }
    try {
      setLoading(true);
      setError("");
      const res = await fetch("/api/brochure", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, country: country.label, phone: form.phone })
      });
      if (!res.ok) throw new Error("Request failed");
      setOpen(false);
      setForm({ name: "", email: "", phone: "" });
      // After successful submission, download the brochure PDF
      const url = getBrochureDownloadUrl();
      triggerDownload(url);
    } catch (e) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box className={styles.pageRoot}>
      {/* Left */}
      <Box className={styles.left}>
        <Typography className={styles.title} component="h1">
          Agentic AI Full-Stack Course
        </Typography>
        <Box component="ul" className={styles.list}>
          {points.map((t, i) => (
            <Box key={i} component="li" className={styles.listItem}>
              {t}
            </Box>
          ))}
        </Box>
        <Button variant="contained" color="primary" className={styles.primaryBtn} onClick={handleExplore}>
          Explore Curriculum
        </Button>
      </Box>

      {/* Right */}
      <Box className={styles.right}>
        <Box className={styles.thumbWrap}>
          <Image src="/agentic-ai-thumb.png" alt="Agentic AI" fill className={styles.thumbImage} />
          <Box className={styles.centerOverlay}>
            <Box className={styles.pauseBtn} onClick={handlePlayClick} aria-label="preview video">
              <PauseIcon sx={{ fontSize: 46, color: "#ffffff" }} />
            </Box>
          </Box>
          <Box className={styles.thumbCaption}>
            <Typography className={styles.thumbCaptionText}>Intro Preview • 00:42</Typography>
          </Box>
        </Box>
        <Button variant="contained" color="secondary" className={`${styles.primaryBtn} ${enrollPulse ? styles.highlight : ""}`} onClick={handleEnrollClick}>
          Enroll Now
        </Button>
      </Box>

      {/* Dialog: Download Brochure */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm" slotProps={{ paper: { className: styles.dialogPaper } }}>
        <DialogTitle className={styles.dialogTitle}>Download Brochure</DialogTitle>
        <DialogContent className={styles.dialogContent} dividers>
          <Box className={styles.formStack}>
            <TextField fullWidth label="Name" placeholder="Your full name" className={styles.tf} variant="outlined" value={form.name} onChange={(e)=>setField('name', e.target.value)} />
            <TextField fullWidth type="email" label="Email" placeholder="you@example.com" className={styles.tf} variant="outlined" value={form.email} onChange={(e)=>setField('email', e.target.value)} />
            <TextField
              select
              label="Country"
              value={country.label}
              onChange={(e) => setCountry(countries.find(c => c.label === e.target.value) || countries[0])}
              fullWidth
              className={styles.tf}
              variant="outlined"
            >
              {countries.map((c) => (
                <MenuItem key={c.label} value={c.label}>{c.label}</MenuItem>
              ))}
            </TextField>
            <TextField
              fullWidth
              label="Mobile number"
              placeholder="0000000000"
              className={styles.tf}
              variant="outlined"
              value={form.phone}
              onChange={(e)=>setField('phone', e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <span className={styles.codeChip}>{country.code}</span>
                  </InputAdornment>
                ),
              }}
            />
            {error && <Typography color="error" sx={{ mt: 0.5 }}>{error}</Typography>}
          </Box>
        </DialogContent>
        <DialogActions className={styles.dialogActions}>
          <Button onClick={handleClose} color="inherit" className={styles.cancelBtn} disabled={loading}>Cancel</Button>
          <span className={styles.centerWrap}>
            <Button variant="contained" onClick={onSubmit} className={styles.submitBtn} disabled={loading}>{loading ? "Submitting..." : "Download Brochure"}</Button>
          </span>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
