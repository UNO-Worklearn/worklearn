import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import RoleSelectionForm from "../../components/RoleSelectionForm/RoleSelectionForm";
import { setUserRole } from "../../redux/actions/userActions";

function Register({ role, setUserRole }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/register`, {
        firstName,
        lastName,
        username,
        email,
        password,
        confirmPassword,
        role: role ?? "student",
      });

      setError("");
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  const handleRoleSelect = (selectedRole) => {
    setUserRole(selectedRole);
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
          maxWidth: 480,
          backgroundColor: "#eee",
          boxShadow: "rgba(0, 0, 0, 0.2) 0px 2px 8px",
          borderRadius: 2,
          p: { xs: 3, sm: 4 },
        }}
      >
        <Typography variant="h5" mb={2} textAlign="center">
          Create Your Account
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <TextField
          label="First Name"
          fullWidth
          margin="normal"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          sx={{ backgroundColor: "#fff" }}
        />

        <TextField
          label="Last Name"
          fullWidth
          margin="normal"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          sx={{ backgroundColor: "#fff" }}
        />

        <TextField
          label="Username"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          sx={{ backgroundColor: "#fff" }}
        />

        <TextField
          label="Email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          sx={{ backgroundColor: "#fff" }}
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          sx={{ backgroundColor: "#fff" }}
        />

        <TextField
          label="Confirm Password"
          type="password"
          fullWidth
          margin="normal"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          sx={{ backgroundColor: "#fff" }}
        />

        {/* Role selection */}
        <Box sx={{ mt: 3, mb: 2 }}>
          <Typography variant="subtitle2" mb={1}>
            Register as
          </Typography>
          <RoleSelectionForm onRoleSelect={handleRoleSelect} />
        </Box>

        <Button
          fullWidth
          variant="contained"
          color="error"
          size="large"
          sx={{ py: 1.5 }}
          onClick={handleRegister}
        >
          Register
        </Button>
      </Box>
    </Box>
  );
}

const mapStateToProps = (state) => ({
  role: state.user.role,
});

export default connect(mapStateToProps, { setUserRole })(Register);
