import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  CircularProgress,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useParams } from "react-router";

const UserActivity = () => {
  const { userId } = useParams();

  const [activityLogs, setActivityLogs] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Helper: format seconds as "Xm Ys"
  const formatSeconds = (secs) => {
    if (secs == null) return "—";
    const s = Number(secs);
    const minutes = Math.floor(s / 60);
    const seconds = s % 60;
    if (minutes === 0) return `${seconds}s`;
    return `${minutes}m ${seconds}s`;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [activityRes, userRes] = await Promise.all([
          axios.get(
            `${process.env.REACT_APP_BACKEND_URL}/api/users/activity/${userId}`,
            { withCredentials: true }
          ),
          axios.get(
            `${process.env.REACT_APP_BACKEND_URL}/api/users/${userId}`,
            { withCredentials: true }
          ),
        ]);

        setActivityLogs(activityRes.data || []);
        setUser(userRes.data || null);
      } catch (err) {
        console.error("Error fetching user activity:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  // 🔹 Flatten activityLogs → per-attempt rows
  const attemptRows = [];
  activityLogs.forEach((log) => {
    const date = log.date;
    const quizzes = log.quizzes || [];

    quizzes.forEach((quiz) => {
      const scores = quiz.scores || [];
      const times = quiz.timeSpent || [];
      const attempts = scores.length;

      for (let i = 0; i < attempts; i++) {
        const score = scores[i];
        const time = times[i] ?? null;
        const attemptNumber = i + 1;
        const reached80OnThisAttempt =
          quiz.reached80Percent &&
          quiz.attemptsToReach80 &&
          quiz.attemptsToReach80 === attemptNumber;

        attemptRows.push({
          date,
          type: quiz.type,
          attemptNumber,
          score,
          timeSpent: time,
          reached80OnThisAttempt,
        });
      }
    });
  });

  // Sort by date (newest first), then attemptNumber
  attemptRows.sort((a, b) => {
    if (a.date === b.date) {
      return b.attemptNumber - a.attemptNumber;
    }
    return a.date < b.date ? 1 : -1;
  });

  if (loading) {
    return (
      <Box
        sx={{
          padding: 4,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        User Activity
      </Typography>

      {user && (
        <Typography variant="subtitle1" gutterBottom>
          {user.firstName} {user.lastName} ({user.username})
        </Typography>
      )}

      <Typography variant="h6" sx={{ marginTop: 3, marginBottom: 1 }}>
        Quiz Attempts Timeline
      </Typography>

      {attemptRows.length === 0 ? (
        <Typography>No quiz activity recorded yet for this user.</Typography>
      ) : (
        <Paper sx={{ width: "100%", overflow: "auto" }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell><strong>Date</strong></TableCell>
                <TableCell><strong>Quiz Type</strong></TableCell>
                <TableCell><strong>Attempt #</strong></TableCell>
                <TableCell><strong>Score (%)</strong></TableCell>
                <TableCell><strong>Time Spent</strong></TableCell>
                <TableCell><strong>Reached 80% on this attempt?</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {attemptRows.map((row, idx) => (
                <TableRow key={idx}>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.type}</TableCell>
                  <TableCell>{row.attemptNumber}</TableCell>
                  <TableCell>
                    {row.score != null ? `${row.score.toFixed(1)}%` : "—"}
                  </TableCell>
                  <TableCell>{formatSeconds(row.timeSpent)}</TableCell>
                  <TableCell>
                    {row.reached80OnThisAttempt ? "✅ Yes" : "—"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      )}
    </Box>
  );
};

export default UserActivity;
