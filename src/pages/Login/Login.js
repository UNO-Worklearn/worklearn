import { Button, Box, TextField, Typography, Alert } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { setUser, setUserRole } from "../../redux/actions/userActions";

function Login({ setUser, setUserRole }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/login`,
        { username, password },
        { withCredentials: true }
      );

      const { token, user } = response.data;

      setUser(`${user.firstName} ${user.lastName}`);
      setUserRole(user.role);

      localStorage.setItem("userID", user._id);
      localStorage.setItem("token", token);

      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/users/activity/login`,
        { user_id: user._id }
      );

      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data || "Login failed");
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
          maxWidth: 420, // desktop constraint
          backgroundColor: "#eee",
          boxShadow: "rgba(0, 0, 0, 0.2) 0px 2px 8px",
          borderRadius: 2,
          p: { xs: 3, sm: 4 }, // responsive padding
        }}
      >
        <Typography variant="h5" mb={2} textAlign="center">
          Login
        </Typography>

        {error === "Unauthorized" && (
          <Alert severity="error" sx={{ mb: 2 }}>
            Please enter correct username and/or password.
          </Alert>
        )}

        <TextField
          label="Username"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{ backgroundColor: "#fff" }}
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ backgroundColor: "#fff" }}
        />

        <Typography variant="body2" sx={{ mt: 1, mb: 2, textAlign: "right" }}>
          <Link to="/forgot-password">Forgot password?</Link>
        </Typography>

        <Button
          fullWidth
          variant="contained"
          color="error"
          size="large"
          sx={{ py: 1.5 }} // mobile tap target
          onClick={handleLogin}
        >
          Login
        </Button>

        <Typography variant="body2" textAlign="center" mt={3}>
          Not a member? <Link to="/register">Start here</Link>
        </Typography>
      </Box>
    </Box>
  );
}

const mapStateToProps = (state) => ({
  user: state.user.user,
});

export default connect(mapStateToProps, { setUser, setUserRole })(Login);
