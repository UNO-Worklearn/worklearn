/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import "./Dashboard.css";
import data from "../../data/modules";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setUser, setProgress } from "../../redux/actions/userActions";
import {
  Box,
  CircularProgress,
  Typography,
} from "@mui/material";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Login from "../Login/Login";
import Topics from "./Topics/Topics";
import Content from "./Topics/Content/Content";
import SubContent from "./Topics/Content/SubContent/SubContent";
import Notification from "../../components/SnackBar/SnackBar";
import DBContent from "./DBContent/DBContent";
import NestedContent from "./Topics/Content/SubContent/NestedContent/NestedContent";
import { HashLink } from "react-router-hash-link";

/* --------------------------------------------------
   Helper components
-------------------------------------------------- */
function CircularProgressWithLabel(props) {
  return (
    <Box>
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress color="error" variant="determinate" {...props} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="caption">{`${Math.round(
            props.value
          )}%`}</Typography>
        </Box>
      </Box>
      <Typography variant="subtitle2">Your progress</Typography>
    </Box>
  );
}

/* --------------------------------------------------
   Dashboard
-------------------------------------------------- */
function Dashboard({ user, role, progress, setUser, setProgress }) {
  /* ✅ NEW: sidebar toggle */
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [isActive, setIsActive] = useState({});
  const [isActive2, setIsActive2] = useState({});
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationSeverity, setNotificationSeverity] = useState("success");

  /* --------------------------------------------------
     Effects
  -------------------------------------------------- */
  useEffect(() => {
    if (user) {
      setNotificationMessage(
        `Welcome ${user}, you are logged in as a ${role}`
      );
      setNotificationSeverity("success");
      setNotificationOpen(true);
    }
  }, [user, role]);

  const handleNotificationClose = (_, reason) => {
    if (reason === "clickaway") return;
    setNotificationOpen(false);
  };

  /* --------------------------------------------------
     Sidebar dropdown logic (unchanged)
  -------------------------------------------------- */
  const toggleDropdown = (topicIndex, subTopicIndex) => {
    const key = `${topicIndex}-${subTopicIndex}`;

    setIsActive((prev) => {
      // MOBILE: close all others (accordion)
      if (isMobile) {
        return { [key]: !prev[key] };
      }

      // DESKTOP: allow multiple open
      return {
        ...prev,
        [key]: !prev[key],
      };
    });

    // Always close nested when switching main
    setIsActive2({});
  };


  const toggleDropdown2 = (topicIndex, subTopicIndex, nestedIndex) => {
    const key = `${topicIndex}-${subTopicIndex}-${nestedIndex}`;

    setIsActive2((prev) => {
      if (isMobile) {
        return { [key]: !prev[key] };
      }

      return {
        ...prev,
        [key]: !prev[key],
      };
    });
  };


  /* --------------------------------------------------
     Render
  -------------------------------------------------- */
  return (
    <>
      {/* ✅ MOBILE HEADER */}
      <div className="dashboard-header">
        <button
          className="sidebar-toggle"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          ☰
        </button>
        <h3>Dashboard</h3>
      </div>

      <div className="dashboard">
        {/* SIDEBAR */}
        <div className={`db-sidebar ${sidebarOpen ? "open" : ""}`}>
          {data.map((item, i) => (
            <div key={i}>
              <div className="db-unit">
                <p>{item.topicName}</p>
              </div>

              <div className="db-items">
                {i === 0 && (
                  <div className="db-item">
                    <div className="db-link">
                      <Link
                        to="/dashboard"
                        onClick={() => {
                          setSidebarOpen(false);
                          setIsActive({});
                          setIsActive2({});
                        }}
                      >
                        Home
                      </Link>

                    </div>
                  </div>
                )}

                {item.subTopics.map((subTopic, index) => {
                  const mainKey = `${i}-${index}`;

                  return (
                    <div key={mainKey}>
                      {i !== 0 && i !== 8 ? (
                        <div className="db-item">
                          <div className="db-link">
                            <HashLink
                              to="#"
                              onClick={() => toggleDropdown(i, index)}
                            >
                              {subTopic.name}
                            </HashLink>
                            <ArrowDropDownIcon />
                          </div>

                          {isActive[mainKey] && (
                            <ul className="dropdown-container">
                              {subTopic.contents.map((subContent, idx) => {
                                const nestedKey = `${i}-${index}-${idx}`;

                                return !subContent.contents ? (
                                    <li key={idx}>
                                      <Link
                                          to={`${item.id}/${index + 1}/${subContent.id}`}
                                          onClick={() => {
                                            setSidebarOpen(false);
                                            setIsActive({});
                                            setIsActive2({});
                                          }}
                                      >
                                        {subContent.topic}
                                      </Link>
                                    </li>

                                ) : (
                                    <div key={idx} className="db-item mod-1">
                                      <HashLink
                                          to="#"
                                          onClick={() =>
                                        toggleDropdown2(i, index, idx)
                                      }
                                    >
                                      {subContent.topic}
                                    </HashLink>

                                    {isActive2[nestedKey] && (
                                      <ul className="dropdown-container">
                                        {subContent.contents.map(
                                          (nestedContent, subIdx) => (
                                              <li key={subIdx}>
                                                <Link
                                                    to={`${item.id}/${index + 1}/${subContent.id}/${nestedContent.id}`}
                                                    onClick={() => {
                                                      setSidebarOpen(false);
                                                      setIsActive({});
                                                      setIsActive2({});
                                                    }}
                                                >
                                                  {nestedContent.topic}
                                                </Link>
                                              </li>

                                          )
                                        )}
                                      </ul>
                                    )}
                                    </div>
                                );
                              })}
                            </ul>
                          )}
                        </div>
                      ) : (
                        <div className="db-item">
                          <div className="db-link">
                            <Link
                              to={`${i + 1}/${subTopic.id}`}
                              onClick={() => setSidebarOpen(false)}
                            >
                              {subTopic.name}
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* CONTENT */}
        {user ? (
          <div className="db-content">
            <Notification
              open={notificationOpen}
              handleClose={handleNotificationClose}
              message={notificationMessage}
              severity={notificationSeverity}
            />

            <Routes>
              <Route path="/" element={<DBContent />} />
              <Route path=":id" element={<Topics />} />
              <Route path=":id/:topicId" element={<Content />}>
                <Route path=":contentId" element={<SubContent />} />
              </Route>
              <Route
                path=":id/:topicId/:contentId/:subContentId"
                element={<NestedContent />}
              />
            </Routes>
          </div>
        ) : (
          <Login />
        )}
      </div>

    </>

  );
}

const mapStateToProps = (state) => ({
  user: state.user.user,
  progress: state.user.progress,
  role: state.user.role,
});

export default connect(mapStateToProps, { setUser, setProgress })(Dashboard);
