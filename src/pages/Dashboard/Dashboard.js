/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import "./Dashboard.css";
import data from "../../data/modules";
import { Route, Routes, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { setUser, setProgress } from "../../redux/actions/userActions";
import {
  Box,
  CircularProgress,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import Login from "../Login/Login";
import Topics from "./Topics/Topics";
import Content from "./Topics/Content/Content";
import SubContent from "./Topics/Content/SubContent/SubContent";
import Notification from "../../components/SnackBar/SnackBar";
import DBContent from "./DBContent/DBContent";
import NestedContent from "./Topics/Content/SubContent/NestedContent/NestedContent";
import Sidebar from "./Sidebar/Sidebar";

/* --------------------------------------------------
   Helper
-------------------------------------------------- */
function CircularProgressWithLabel(props) {
  return (
    <Box>
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress color="error" variant="determinate" {...props} />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="caption">
            {`${Math.round(props.value)}%`}
          </Typography>
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isActive, setIsActive] = useState({});
  const [isActive2, setIsActive2] = useState({});
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationSeverity, setNotificationSeverity] = useState("success");

  /* --------------------------------------------------
     🔒 Lock body scroll while Dashboard is mounted
  -------------------------------------------------- */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  /* --------------------------------------------------
     Notifications
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
     🔥 Auto-open sidebar based on URL
  -------------------------------------------------- */
  useEffect(() => {
    const parts = location.pathname.split("/").filter(Boolean);
    const dashIndex = parts.indexOf("dashboard");
    if (dashIndex === -1) return;

    const after = parts.slice(dashIndex + 1);
    if (after.length < 2) return;

    const [unitId, topicId, contentId, subContentId] = after;

    const unitIndex = data.findIndex(
      (u) => String(u.id) === String(unitId)
    );
    if (unitIndex === -1) return;

    const topicIndex = Number(topicId) - 1;
    if (Number.isNaN(topicIndex)) return;

    const mainKey = `${unitIndex}-${topicIndex}`;

    setIsActive((prev) => {
      if (isMobile) return { [mainKey]: true };
      return { ...prev, [mainKey]: true };
    });

    if (contentId) {
      const subTopic = data[unitIndex]?.subTopics?.[topicIndex];
      const contentIndex = subTopic?.contents?.findIndex(
        (c) => String(c.id) === String(contentId)
      );

      if (contentIndex !== -1 && subContentId) {
        const nestedKey = `${unitIndex}-${topicIndex}-${contentIndex}`;

        setIsActive2((prev) => {
          if (isMobile) return { [nestedKey]: true };
          return { ...prev, [nestedKey]: true };
        });
      }
    }
  }, [location.pathname, isMobile]);

  /* --------------------------------------------------
     Close sidebar automatically on desktop
  -------------------------------------------------- */
  useEffect(() => {
    if (!isMobile) setSidebarOpen(false);
  }, [isMobile]);

  /* --------------------------------------------------
     Sidebar dropdown logic
  -------------------------------------------------- */
  const toggleDropdown = (unitIndex, subTopicIndex) => {
    const key = `${unitIndex}-${subTopicIndex}`;

    setIsActive((prev) => {
      if (isMobile) return { [key]: !prev[key] };
      return { ...prev, [key]: !prev[key] };
    });

    setIsActive2({});
  };

  const toggleDropdown2 = (unitIndex, subTopicIndex, contentIndex) => {
    const key = `${unitIndex}-${subTopicIndex}-${contentIndex}`;

    setIsActive2((prev) => {
      if (isMobile) return { [key]: !prev[key] };
      return { ...prev, [key]: !prev[key] };
    });
  };

  const onNavigate = () => {
    if (isMobile) setSidebarOpen(false);
  };

  /* --------------------------------------------------
     Render
  -------------------------------------------------- */
  return (
    <>
      {/* Mobile Header */}
      <div className="dashboard-header">
        <button
          className="sidebar-toggle"
          onClick={() => setSidebarOpen((s) => !s)}
        >
          ☰
        </button>
        <h3>Dashboard</h3>
      </div>

      <div className="dashboard">
        {/* ✅ Sidebar rendered ONLY on desktop OR when open on mobile */}
        {(!isMobile || sidebarOpen) && (
          <Sidebar
            data={data}
            sidebarOpen={sidebarOpen}
            isMobile={isMobile}
            isActive={isActive}
            isActive2={isActive2}
            toggleDropdown={toggleDropdown}
            toggleDropdown2={toggleDropdown2}
            onNavigate={onNavigate}
          />
        )}

        {/* Content */}
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

/* --------------------------------------------------
   Redux
-------------------------------------------------- */
const mapStateToProps = (state) => ({
  user: state.user.user,
  progress: state.user.progress,
  role: state.user.role,
});

export default connect(mapStateToProps, { setUser, setProgress })(Dashboard);
