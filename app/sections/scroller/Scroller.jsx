"use client";

import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function Scroller() {
  // state
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // handle scroll
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      {visible && (
        <IconButton
          onClick={handleScrollTop}
          display="grid"
          color="red"
          sx={{
            position: "fixed",
            bottom: "5%",
            right: 20,
            background: "#046bd2",
            placeItems: "center",
            cursor: "pointer",
            "&:hover": {
              background: "#046bd2",
            },
          }}
        >
          <KeyboardArrowUpIcon sx={{ fontSize: 25, color: "#fff" }} />
        </IconButton>
      )}
    </>
  );
}
