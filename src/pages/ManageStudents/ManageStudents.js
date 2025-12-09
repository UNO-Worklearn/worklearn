// Enhanced version of ManageStudents.js
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Typography, Box, Tab, Paper, Button } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import MUIDataTable from "mui-datatables";
import QuizAnalytics from "../../components/QuizAnalytics/QuizAnalytics";
import { fetchAllUsers } from "../../redux/actions/userActions";
import Login from "../Login/Login";
import axios from "axios";
import "./ManageStudents.css";

const ManageStudents = ({ user, fetchAllUsers }) => {
  const [value, setValue] = useState("1");
  const [allUsers, setAllUsers] = useState([]);

  const handleChange = (event, newValue) => setValue(newValue);

  const fetchUsers = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/users`);
      const data = await res.json();
      setAllUsers(data);
      fetchAllUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleUserAction = async (action, id) => {
    const confirmMsg = `Are you sure you want to ${action} this user?`;
    if (!window.confirm(confirmMsg)) return;

    const url = `${process.env.REACT_APP_BACKEND_URL}/api/users/${action}`;
    const method = action === "delete" ? "delete" : "put";
    const config = method === "delete" ? { data: { user_id: id } } : { user_id: id };

    try {
      const response = await axios[method](url, config);
      alert(response.data.message);
      await fetchUsers();
    } catch (error) {
      console.error(`Error on ${action}:`, error);
      alert(`Failed to ${action} user.`);
    }
  };

  const formatUser = (user) => {
    const lastActivityDate = new Date(user.lastActivity);
    const today = new Date();
    const inactiveDays = Math.floor((today - lastActivityDate) / (1000 * 60 * 60 * 24));
    return {
      fullName: `${user.firstName} ${user.lastName}`,
      role: user.role,
      username: user.username,
      registeredDate: user.registeredAt || null,
      lastActivity: user.lastActivity || null,
      inactiveDays: isNaN(inactiveDays) ? "N/A" : inactiveDays,
      pythonOneScore: user.pythonOneScore,
      id: user._id,
    };
  };

  const activeStudents = allUsers.filter(u => u.role === "student").map(formatUser);
  const hiddenStudents = allUsers.filter(u => u.role === "Offline").map(formatUser);

  const commonColumns = ["fullName", "role", "username", "registeredDate", "lastActivity", "inactiveDays"].map(name => ({
    name,
    label: name.charAt(0).toUpperCase() + name.slice(1).replace(/([A-Z])/g, ' $1'),
    options: {
      setCellHeaderProps: () => ({
        style: {
          textAlign: "center",
          verticalAlign: "middle",
          fontWeight: "600",
          fontSize: "15px",
          backgroundColor: "#f1f1f1",
          padding: "12px 8px"
        }
      }),
      setCellProps: () => ({
        style: {
          textAlign: "center",
          verticalAlign: "middle",
          padding: "12px 8px"
        }
      }),
      ...(name === "registeredDate" || name === "lastActivity"
        ? {
            customBodyRender: (value) =>
              value ? new Date(value).toLocaleDateString() : "N/A"
          }
        : {})
    }
  }));

  const actionColumn = (hidden = false) => ({
    name: "actions",
    label: "Actions",
    options: {
      setCellHeaderProps: () => ({
        style: {
          textAlign: "center",
          verticalAlign: "middle",
          fontWeight: "600",
          fontSize: "15px",
          backgroundColor: "#f1f1f1",
          padding: "12px 8px"
        }
      }),
      setCellProps: () => ({
        style: {
          textAlign: "center",
          verticalAlign: "middle",
          padding: "12px 8px"
        }
      }),
      customBodyRender: (value, tableMeta) => {
        const userId = tableMeta.rowData[tableMeta.rowData.length - 1];
        return (
          <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
            {hidden ? (
              <Button variant="contained" color="success" size="small" sx={{ borderRadius: "8px" }} onClick={() => handleUserAction("unhide", userId)}>Unhide</Button>
            ) : (
              <>
                <Button variant="contained" color="primary" size="small" sx={{ borderRadius: "8px" }} onClick={() => handleUserAction("hide", userId)}>Hide</Button>
                <Button variant="contained" color="secondary" size="small" component={Link} to={`/manage-students/activity/${userId}`} sx={{ borderRadius: "8px" }}>View Activity</Button>
                <Button variant="contained" color="error" size="small" sx={{ borderRadius: "8px" }} onClick={() => handleUserAction("delete", userId)}>Delete</Button>
              </>
            )}
          </Box>
        );
      }
    }
  });

  const columnsWithId = (cols) => [...cols, { name: "id", label: "ID", options: { display: false } }];

  const options = {
    filterType: "dropdown",
    responsive: "standard",
    selectableRows: "none",
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 10, 25],
    download: true,
    print: true,
    search: true,
    elevation: 0,
    setTableProps: () => ({
      style: {
        borderRadius: "12px",
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.08)",
        overflow: "hidden"
      }
    }),
    setRowProps: (row, dataIndex, rowIndex) => ({
      style: {
        backgroundColor: rowIndex % 2 === 0 ? "#f9f9f9" : "#ffffff",
        fontSize: "14px",
        verticalAlign: "middle",
        height: "56px"
      }
    })
  };

  return (
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <TabList onChange={handleChange} aria-label="Manage Tabs">
          <Tab label="Manage Students" value="1" />
          <Tab label="Quiz Analytics" value="2" />
        </TabList>
      </Box>
      <TabPanel value="1">
        <Box sx={{ margin: "20px", padding: "30px", backgroundColor: "#f9f9f9", boxShadow: "0px 0px 10px rgba(0,0,0,0.1)", borderRadius: "12px" }}>
          {user ? (
            <>
              <Typography variant="h4" sx={{ marginBottom: "20px" }}>Manage Student Information</Typography>
              <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>Active Students</Typography>
              <Paper sx={{ mb: 4 }}>
                <MUIDataTable title={"STUDENT LIST"} data={activeStudents} columns={columnsWithId([...commonColumns, actionColumn()])} options={options} />
              </Paper>
              <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>Hidden Students</Typography>
              <Paper>
                <MUIDataTable title={"HIDDEN STUDENTS"} data={hiddenStudents} columns={columnsWithId([...commonColumns, actionColumn(true)])} options={options} />
              </Paper>
            </>
          ) : (
            <Login />
          )}
        </Box>
      </TabPanel>
      <TabPanel value="2">
        <QuizAnalytics />
      </TabPanel>
    </TabContext>
  );
};

const mapStateToProps = (state) => ({
  users: state.user.users,
  user: state.user.user,
});

export default connect(mapStateToProps, { fetchAllUsers })(ManageStudents);