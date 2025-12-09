import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

function UserActivity() {
  const { userId } = useParams(); // Get userId from route params
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchUserData = async () => {
      if (!userId || userId === "undefined") {
        console.error("Invalid or missing userId:", userId);
        setError("Invalid or missing user ID.");
        setLoading(false);
        return;
      }

      try {
        // Fetch user data
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/users/${userId}`);
        setUserData(response.data);
        setError("");
      } catch (err) {
        console.error("Error fetching user data:", err);
        setError("Failed to fetch user data.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  if (!userData) {
    return <Typography>No user data available.</Typography>;
  }

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" sx={{ marginBottom: "20px" }}>
        User Activity Logs (Day by Day)
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Login Times</TableCell>
              <TableCell>Logout Times</TableCell>
              <TableCell>Quiz History</TableCell>
              <TableCell>Total Quiz Attempts</TableCell>
              <TableCell>Attempts to Reach 80%</TableCell>
              <TableCell>Total Time Spent (mins)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userData.activityLogs.length > 0 ? (
              userData.activityLogs.map((log, index) => {
                const totalAttempts = log.quizHistory.reduce((sum, quiz) => sum + quiz.attempts, 0);
                const attemptsToReach80 = log.quizHistory.reduce(
                  (sum, quiz) => sum + quiz.attemptsToReach80,
                  0
                );
                const totalTimeSpent = log.quizHistory.reduce(
                  (sum, quiz) => sum + quiz.timeSpent.reduce((a, b) => a + b, 0),
                  0
                );

                return (
                  <TableRow key={index}>
                    <TableCell>{log.date || "-"}</TableCell>
                    <TableCell>{log.loginTimes.length > 0 ? log.loginTimes.join(", ") : "0"}</TableCell>
                    <TableCell>{log.logoutTimes.length > 0 ? log.logoutTimes.join(", ") : "0"}</TableCell>
                    <TableCell>
                      {log.quizHistory.length > 0 ? (
                        log.quizHistory.map((quiz, idx) => (
                          <div key={idx}>
                            {quiz.type}: {quiz.attempts} attempts, Scores:{" "}
                            {quiz.scores.join(", ") || "None"}, Time Spent:{" "}
                            {quiz.timeSpent.join(", ") || "None"} mins
                          </div>
                        ))
                      ) : (
                        "0"
                      )}
                    </TableCell>
                    <TableCell>{totalAttempts || "0"}</TableCell>
                    <TableCell>{attemptsToReach80 || "0"}</TableCell>
                    <TableCell>{totalTimeSpent || "0"}</TableCell>
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell colSpan={7}>No activity logs available.</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default UserActivity;
