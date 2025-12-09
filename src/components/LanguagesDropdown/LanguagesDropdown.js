import React from "react";
import Select from "react-select";
import { customStyles } from "../../data/customStyles";
import { languages } from "../../data/languages";

const LanguagesDropdown = ({ onSelectChange }) => {
  return (
    <Select
      placeholder={`Filter By Category`}
      options={languages}
      styles={customStyles}
      defaultValue={languages[0]}
      onChange={(selectedOption) => onSelectChange(selectedOption)}
    />
  );
};

export default LanguagesDropdown;
