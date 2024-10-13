"use client";

import { styled } from "@mui/system";
import {
  TableRow,
  Paper,
  TableHead,
  TableContainer,
  tableCellClasses,
  TableCell,
  TableBody,
  Table,
  Typography,
} from "@mui/material";
import { useBoolean } from "@/app/custom-hooks/useBoolean";
import JobApplyForm from "./JobApplyForm";
import { useState } from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#60606066",
    color: "#fff",
    textAlign: "center",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: "#fff",
    textAlign: "center",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:hover": {
    background: "#60606066",
  },

  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const StyledLink = styled("a")(({ theme }) => ({
  color: "#00bcd4",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
}));

function createData(id, designation, experience, location, link) {
  return { id, designation, experience, location, link };
}

const rows = [
  createData(1, "Tester", 6.0, "Bengaluru", "https://example.com/apply"),
  createData(2, "Sr.Developer", 9.0, "Bengaluru", "https://example.com/apply"),
  createData(
    3,
    "Devops Engineer",
    16.0,
    "Bengaluru",
    "https://example.com/apply"
  ),
  createData(
    4,
    "Frontend Developer",
    3.7,
    "Bengaluru",
    "https://example.com/apply"
  ),
  createData(5, "UI/UX", 16.0, "Bengaluru", "https://example.com/apply"),
];

export default function Career() {
  const openModal = useBoolean();
  const [data, setData] = useState(null);
  console.log(openModal);

  const handleApplyPost = (data) => {
    setData(data);
    openModal.onTrue();
  };

  return (
    <>
      <Typography
        sx={{
          color: "#fff",
          fontWeight: "700",
          fontSize: "32px",
          textAlign: "center",
          marginTop: "32px",
        }}
      >
        Available Jobs
      </Typography>

      {/* job apply form */}
      {openModal.value && <JobApplyForm data={data} openModal={openModal} />}
      <TableContainer
        sx={{ background: "#000", marginBottom: "32px" }}
        component={Paper}
      >
        <Table
          sx={{ maxWidth: 1056, margin: "48px auto" }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>Job ID</StyledTableCell>
              <StyledTableCell>Designation</StyledTableCell>
              <StyledTableCell>Year of Experience</StyledTableCell>
              <StyledTableCell>Job Location</StyledTableCell>
              <StyledTableCell>Link</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell>{row.designation}</StyledTableCell>
                <StyledTableCell>{row.experience}</StyledTableCell>
                <StyledTableCell>{row.location}</StyledTableCell>
                <StyledTableCell
                  sx={{ cursor: "pointer" }}
                  onClick={() => handleApplyPost(row)}
                >
                  <StyledLink>Apply Here</StyledLink>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
