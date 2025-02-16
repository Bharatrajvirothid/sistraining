import React from "react";
import Header from "../Header/Header";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const neboshData = [
  { month: "Jan 2025", examDate: "08-01-2025", regLast: "16-12-2024", ig2practicalsubmission: "22-01-2025", ig1: "09-19 December 2024", ig2: "20 December 24 - 04 January 2025" },
  { month: "Feb 2025", examDate: "05-02-2025", regLast: "22-01-2025", ig2practicalsubmission: "19-02-2025", ig1: "01-11 January 2025", ig2: "17 January 24 - 30 January 2025" },
  { month: "Mar 2025", examDate: "05-03-2025", regLast: "19-02-2025", ig2practicalsubmission: "19-03-2025", ig1: "03-15 February 2025", ig2: "17-28 February 2025" },
  { month: "Apr 2025", examDate: "09-04-2025", regLast: "26-03-2025", ig2practicalsubmission: "25-04-2025", ig1: "03-13 March 2025", ig2: "17-29 March 2025" },
  { month: "May 2025", examDate: "07-05-2025", regLast: "23-04-2025", ig2practicalsubmission: "21-05-2025", ig1: "04-14 April 2025", ig2: "18-30 April 2025" },
  { month: "Jun 2025", examDate: "04-06-2025", regLast: "21-05-2025", ig2practicalsubmission: "18-06-2025", ig1: "02-12 May 2025", ig2: "16-28 May 2025" },
  { month: "Jul 2025", examDate: "09-07-2025", regLast: "25-06-2025", ig2practicalsubmission: "23-07-2025", ig1: "03-13 June 2025", ig2: "17-29 June 2025" },
  { month: "Aug 2025", examDate: "06-08-2025", regLast: "23-07-2025", ig2practicalsubmission: "20-08-2025", ig1: "01-11 July 2025", ig2: "15-27 July 2025" },
  { month: "Sep 2025", examDate: "10-09-2025", regLast: "27-08-2025", ig2practicalsubmission: "24-09-2025", ig1: "04-14 August 2025", ig2: "18-30 August 2025" },
  { month: "Oct 2025", examDate: "08-10-2025", regLast: "24-09-2025", ig2practicalsubmission: "22-10-2025", ig1: "02-12 September 2025", ig2: "16-28 September 2025" },
  { month: "Nov 2025", examDate: "05-11-2025", regLast: "22-10-2025", ig2practicalsubmission: "19-11-2025", ig1: "01-11 October 2025", ig2: "15-27 October 2025" },
  { month: "Dec 2025", examDate: "10-12-2025", regLast: "26-11-2025", ig2practicalsubmission: "24-12-2025", ig1: "03-13 November 2025", ig2: "17-29 November 2025" },
];

const weldingData = [
    { month: "Jan 2026", examDate: "12-01-2026", regLast: "07-01-2026", ig1: "21-01-2026", ig2: "01-11 December 2026", ig3: "12-23 December 2026" },
    { month: "Feb 2026", examDate: "21-02-2026", regLast: "04-02-2026", ig1: "28-02-2026", ig2: "05-15 January 2026", ig3: "19-29 January 2026" },
    { month: "Mar 2026", examDate: "18-03-2026", regLast: "04-03-2026", ig1: "18-03-2026", ig2: "04-14 February 2026", ig3: "18-28 February 2026" },
    { month: "Apr 2026", examDate: "23-04-2026", regLast: "08-04-2026", ig1: "22-04-2026", ig2: "01-12 March 2026", ig3: "15-26 March 2026" },
    { month: "May 2026", examDate: "20-05-2026", regLast: "06-05-2026", ig1: "29-05-2026", ig2: "07-17 April 2026", ig3: "21-30 April 2026" },
    { month: "Jun 2026", examDate: "17-06-2026", regLast: "02-06-2026", ig1: "25-06-2026", ig2: "04-14 May 2026", ig3: "18-28 May 2026" },
    { month: "Jul 2026", examDate: "15-07-2026", regLast: "01-07-2026", ig1: "22-07-2026", ig2: "06-16 June 2026", ig3: "20-30 June 2026" },
    { month: "Aug 2026", examDate: "19-08-2026", regLast: "05-08-2026", ig1: "26-08-2026", ig2: "03-13 July 2026", ig3: "17-27 July 2026" },
    { month: "Sep 2026", examDate: "16-09-2026", regLast: "01-09-2026", ig1: "23-09-2026", ig2: "05-15 August 2026", ig3: "19-29 August 2026" },
    { month: "Oct 2026", examDate: "14-10-2026", regLast: "30-09-2026", ig1: "21-10-2026", ig2: "03-13 September 2026", ig3: "17-27 September 2026" },
    { month: "Nov 2026", examDate: "11-11-2026", regLast: "28-10-2026", ig1: "18-11-2026", ig2: "01-11 October 2026", ig3: "15-25 October 2026" },
    { month: "Dec 2026", examDate: "09-12-2026", regLast: "24-11-2026", ig1: "16-12-2026", ig2: "03-13 November 2026", ig3: "17-27 November 2026" },
  ];
  const tableStyles = {
    maxWidth: "90%",
    margin: "auto",
    mb: 4,
    p: 2,
    borderRadius: 2,
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  };
  
  const rowHoverEffect = {
    "&:hover": {
      backgroundColor: "#f5f5f5",
      transform: "scale(1.02)",
      transition: "all 0.2s ease-in-out",
    },
  };

const Schedules = () => {
  return (
    <div>
      <Header />
      <Typography variant="h5" align="center" sx={{ mt: 2, mb: 2, fontWeight: "bold", color: "#1565C0" }}>
        NEBOSH IG Yearly Course Time Table 2025
      </Typography>
      <Typography
  variant="body1"
  align="center"
  sx={{
    mt: 2,
    mb: 2,
    fontWeight: "100",
    color: "#1565C0",
    fontSize: "1.2rem",
    letterSpacing: "1px",
    textTransform: "uppercase",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      color: "#D32F2F",
      transform: "scale(1.05)",
    },
  }}
>
  Open Book Examination Online - Virtual Delivery
</Typography>

      <TableContainer component={Paper} sx={{ maxWidth: "90%", margin: "auto", mb: 4, p: 2, borderRadius: 2 }}>
        <Table>
          <TableHead sx={{ backgroundColor: "#1565C0" }}>
            <TableRow>
              {["Month", "Examination Date", "Registration Last Date", "IG2 Practical Submission", "IG1 Schedule", "IG2 Schedule"].map((head) => (
                <TableCell key={head} sx={{ color: "#fff", fontWeight: "bold" }}>{head}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
  {neboshData.map((row, index) => (
    <TableRow
      key={index}
      sx={{
        transition: "all 0.2s ease-in-out",
        "&:hover": {
          backgroundColor: "#f5f5f5",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <TableCell>{row.month}</TableCell>
      <TableCell>{row.examDate}</TableCell>
      <TableCell>{row.regLast}</TableCell>
      <TableCell>{row.ig2practicalsubmission}</TableCell>
      <TableCell>{row.ig1}</TableCell>
      <TableCell>{row.ig2}</TableCell>
    </TableRow>
  ))}
</TableBody>

        </Table>
      </TableContainer>

      <Typography variant="h5" align="center" sx={{ mt: 4, mb: 2, fontWeight: "bold", color: "#D32F2F" }}>
        Welding Exam Yearly Schedule 2026
      </Typography>
      <Typography
  variant="body1"
  align="center"
  sx={{
    mt: 2,
    mb: 2,
    fontWeight: "100",
    color: "#1565C0",
    fontSize: "1.2rem",
    letterSpacing: "1px",
    textTransform: "uppercase",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      color: "#D32F2F",
      transform: "scale(1.05)",
    },
  }}
>
  Open Book Examination Online - Virtual Delivery
</Typography>

      <TableContainer component={Paper} sx={{ maxWidth: "90%", margin: "auto", mb: 4, p: 2, borderRadius: 2 }}>
        <Table>
          <TableHead sx={{ backgroundColor: "#D32F2F" }}>
            <TableRow>
              {["Month", "ExaminationDate for IG1", "Registration Last Date", "IG2 Practical Submission", "IG1 Schedule", "IG2 Schedule"].map((head) => (
                <TableCell key={head} sx={{ color: "#fff", fontWeight: "bold" }}>{head}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
  {weldingData.map((row, index) => (
    <TableRow
      key={index}
      sx={{
        transition: "all 0.2s ease-in-out",
        "&:hover": {
          backgroundColor: "#f5f5f5",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <TableCell>{row.month}</TableCell>
      <TableCell>{row.examDate}</TableCell>
      <TableCell>{row.regLast}</TableCell>
      <TableCell>{row.ig1}</TableCell>
      <TableCell>{row.ig2}</TableCell>
      <TableCell>{row.ig3}</TableCell>
    </TableRow>
  ))}
</TableBody>

        </Table>
      </TableContainer>
    </div>
  );
};

export default Schedules;
