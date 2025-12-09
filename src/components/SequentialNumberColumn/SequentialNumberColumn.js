import React from "react";

import "./SequentialNumberColumn.css";

const SequentialNumberColumn = ({ code }) => {
  let lines = code.split("\n");
  return (
    <div className="sequential-number-column">
      <pre style={{ fontSize: "0.75em", lineHeight: "1.45", marginTop: "5px" }}>
        {code &&
          lines.map((_, index) => (
            <div key={index}>{(index + 1).toString().padStart(6, "0")}</div>
          ))}
      </pre>
    </div>
  );
};

export default SequentialNumberColumn;
