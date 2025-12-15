import { Button, Box, TextField, Typography, Alert } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleForgotPassword = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/users/forgot-password`,
        { email }
      );
      setMessage(response.data.message);
      setError("");
    } catch (error) {
      console.error(error);
      setError(error.response?.data?.message || "Something went wrong.");
      setMessage("");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2, // mobile padding
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 420,
          p: { xs: 3, sm: 4 },
          backgroundColor: "#eee",
          boxShadow: "rgba(0, 0, 0, 0.25) 0px 2px 8px",
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography
          variant="h5"
          textAlign="center"
          fontWeight={600}
        >
          Forgot Password
        </Typography>

        {message && <Alert severity="success">{message}</Alert>}
        {error && <Alert severity="error">{error}</Alert>}

        <TextField
          label="Email"
          type="email"
          fullWidth
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Button
          fullWidth
          variant="contained"
          size="large"
          onClick={handleForgotPassword}
        >
          Send Reset Link
        </Button>

        <Typography textAlign="center">
          <Link
            to="/login"
            style={{
              textDecoration: "underline",
              fontWeight: 500,
            }}
          >
            Back to Login
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default ForgotPassword;
