import { TextField } from "@mui/material";
import React from "react";
import { classnames } from "../../utils/general";

const CustomInput = ({ customInput, setCustomInput }) => {
  return (
    <>
      {" "}
      <TextField
        id="outlined-multiline-static"
        label="Custom Input"
        multiline
        rows={4}
        defaultValue="Default Value"
        value={customInput}
        onChange={(e) => setCustomInput(e.target.value)}
        sx={{ width: "100%", margin: "10px 0" }}
      />
      {/* <textarea
        rows="5"
        value={customInput}
        onChange={(e) => setCustomInput(e.target.value)}
        placeholder={`Custom input`}
        className={classnames(
          "focus:outline-none w-full border border-black z-10 rounded-sm shadow-[1px_1px_0px_0px_rgba(0,0,0)] px-4 py-2 bg-white mt-2"
        )}
      ></textarea> */}
    </>
  );
};

export default CustomInput;
