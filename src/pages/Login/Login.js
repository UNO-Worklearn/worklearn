import { Button, Box, TextField, Typography, Alert } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { setUser, setUserRole } from "../../redux/actions/userActions";

import "./Login.css";

function Login({ setUser, setUserRole }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
         //"http://localhost:3001/login",
        `${process.env.REACT_APP_BACKEND_URL}/login`,
        {
          username,
          password,
        },
        { withCredentials: true }
      );
      const { token, user } = response.data;
      setUser(user.firstName + " " + user.lastName);
      setUserRole(user.role);
      localStorage.setItem("userID",user._id)
      
      localStorage.setItem("token", token);

      // Record login activity
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/users/activity/login`, {
        user_id: user._id,
      });
      console.log("Login activity recorded successfully.");
      history("/dashboard");
    } catch (error) {
      console.error(error);
      setError(error.response.data);
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
      <Typography variant="h4">Login</Typography>
      {error === "Unauthorized" && (
        <Alert severity="error">
          Please enter correct username and/or password.
        </Alert>
      )}
      <TextField
        label="Username"
        variant="outlined"
        sx={{ width: "60%", margin: "20px auto", background: "#fff" }}
        margin="normal"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        sx={{
          width: "60%",
          margin: "20px auto",
          marginTop: "0",
          background: "#fff",
        }}
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Typography variant="body2" sx={{ margin: "10px auto" }}>
        Forgot password?{" "}
        <Link to="/forgot-password" style={{ textDecoration: "underline" }}>
          Reset here
        </Link>
      </Typography>
      <Button
        sx={{ width: "60%", margin: "auto", marginBottom: "30px" }}
        variant="contained"
        color="error"
        onClick={handleLogin}
      >
        Login
      </Button>
      <Link
        to="/register"
        style={{ padding: "0 20px", textDecoration: "underline" }}
      >
        Not a member? Start here
      </Link>
    </Box>
  );
}

const mapStateToProps = (state) => ({
  user: state.user.user,
});
export default connect(mapStateToProps, { setUser, setUserRole })(Login);
