import { Button, Box, TextField, Typography, Alert } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";

function ResetPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleResetPassword = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/users/reset-password`,
        { token, password }
      );
      setMessage(response.data.message);
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong.");
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
        px: 2,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 420,
          backgroundColor: "#eee",
          boxShadow: "rgba(0, 0, 0, 0.2) 0px 2px 8px",
          borderRadius: 2,
          p: { xs: 3, sm: 4 },
        }}
      >
        <Typography variant="h5" mb={2} textAlign="center">
          Reset Password
        </Typography>

        {message && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {message}
          </Alert>
        )}

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <TextField
          label="New Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          sx={{ backgroundColor: "#fff" }}
        />

        <Button
          fullWidth
          variant="contained"
          color="primary"
          size="large"
          sx={{ py: 1.5, mt: 2 }}
          onClick={handleResetPassword}
        >
          Reset Password
        </Button>

        <Typography variant="body2" textAlign="center" mt={3}>
          <Link to="/login">Back to Login</Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default ResetPassword;
