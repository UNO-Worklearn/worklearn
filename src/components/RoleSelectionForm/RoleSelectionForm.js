import React, { useState } from "react";
import { Radio, RadioGroup, FormControlLabel, Button } from "@mui/material";
import { setUserRole } from "../../redux/actions/userActions";
import { connect } from "react-redux";

const RoleSelectionForm = ({ role, onRoleSelect, setUserRole }) => {
  const [selectedRole, setSelectedRole] = useState("student");

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
    setUserRole(selectedRole);
    onRoleSelect(event.target.value);
  };

  return (
    <RadioGroup
      name="role"
      value={selectedRole}
      onChange={handleRoleChange}
      color="white"
      row
    >
      <FormControlLabel
        value="student"
        control={<Radio color="error" />}
        label="Student"
      />
      <FormControlLabel
        value="teacher"
        control={<Radio color="error" />}
        label="Teacher"
      />
    </RadioGroup>
  );
};

const mapStateToProps = (state) => ({
  role: state.user.role,
});

export default connect(mapStateToProps, { setUserRole })(RoleSelectionForm);
