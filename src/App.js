// External Libraries
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components & Pages
import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

// CSS Stylesheets
import "./App.css";
// import "./css/animate.min.css";
// import "./rs-plugin/css/settings.css";
import "./css/style.css";
import { useEffect, useState } from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Playground from "./pages/Playground/Playground";
import ManageStudents from "./pages/ManageStudents/ManageStudents";
import StudentDetails from "./pages/ManageStudents/Studentdetails/StudentDetails";
import ManageStudentDetails from "./pages/ManageStudents/ManageStudentDetails/ManageStudentDetails";
import { Navigate, Redirect } from "react-router";
import Register from "./pages/Register/Register";
import UserActivity from "./pages/ManageStudents/UserActivity";
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import ResetPassword from './pages/ResetPassword/ResetPassword';

function App() {
  const [headerAppear, setHeaderAppear] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 220) {
      setHeaderAppear(true);
    } else {
      setHeaderAppear(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
        <Route exact path="/" element={<Home />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/student-details/:userId" element={<StudentDetails />} />
        <Route path="/manage-students" element={<ManageStudents />} />
        <Route path="/manage-students/:userId" element={<ManageStudentDetails />}/>
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/manage-students/activity/:userId" element={<UserActivity />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
