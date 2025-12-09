// External Libraries
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// Components & Pages
import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Playground from "./pages/Playground/Playground";
import ManageStudents from "./pages/ManageStudents/ManageStudents";
import StudentDetails from "./pages/ManageStudents/Studentdetails/StudentDetails";
import ManageStudentDetails from "./pages/ManageStudents/ManageStudentDetails/ManageStudentDetails";
import Register from "./pages/Register/Register";
import UserActivity from "./pages/ManageStudents/UserActivity";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/ResetPassword/ResetPassword";

// Route Protection
import ProtectedRoute from "./components/ProtectedRoute";

// CSS Stylesheets
import "./App.css";
import "./css/style.css";

function App() {
  const [headerAppear, setHeaderAppear] = useState(false);

  // Get logged-in user from Redux
  const user = useSelector((state) => state.user.user);

  const handleScroll = () => {
    if (window.pageYOffset > 220) {
      setHeaderAppear(true);
    } else {
      setHeaderAppear(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="App"
      data-spy="scroll"
      data-target=".navbar"
      data-offset="90"
    >
      <Loader />
      <Navbar />

      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />

        {/* PROTECTED ROUTES */}
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute user={user}>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route path="/playground" element={<Playground />} />


        <Route
          path="/student-details/:userId"
          element={
            <ProtectedRoute user={user}>
              <StudentDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/manage-students"
          element={
            <ProtectedRoute user={user}>
              <ManageStudents />
            </ProtectedRoute>
          }
        />

        <Route
          path="/manage-students/:userId"
          element={
            <ProtectedRoute user={user}>
              <ManageStudentDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/manage-students/activity/:userId"
          element={
            <ProtectedRoute user={user}>
              <UserActivity />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
