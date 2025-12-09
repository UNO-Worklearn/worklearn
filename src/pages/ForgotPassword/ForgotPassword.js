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
        display: "flex",
        flexDirection: "column",
        width: "50%",
        padding: "20px 50px",
        margin: "auto",
        marginTop: "50px",
        background: "#eee",
        boxShadow: "rgba(0, 0, 0, 0.5) 0px 1px 4px",
        borderRadius: "8px",
      }}
    >
      <Typography variant="h4">Forgot Password</Typography>
      {message && <Alert severity="success">{message}</Alert>}
      {error && <Alert severity="error">{error}</Alert>}

      <TextField
        label="Email"
        type="email"
        variant="outlined"
        sx={{ width: "60%", margin: "20px auto", background: "#fff" }}
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <Button
        sx={{ width: "60%", margin: "auto", marginBottom: "30px" }}
        variant="contained"
        color="primary"
        onClick={handleForgotPassword}
      >
        Send Reset Link
      </Button>

      <Link to="/login" style={{ padding: "0 20px", textDecoration: "underline" }}>
        Back to Login
      </Link>
    </Box>
  );
}

export default ForgotPassword;
