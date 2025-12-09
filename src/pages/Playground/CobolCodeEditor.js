import React, { useState } from "react";
import axios from "axios";
import { Button, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import SequentialNumberColumn from "../../components/SequentialNumberColumn/SequentialNumberColumn";

import "./CobolCodeEditor.css";

//     `IDENTIFICATION DIVISION.
//  PROGRAM-ID. HelloWorld.
//  DATA DIVISION.
//  WORKING-STORAGE SECTION.
//  01 WS-MESSAGE PIC X(30) VALUE "Hello, World!".
//  PROCEDURE DIVISION.
//  DISPLAY WS-MESSAGE.
//  STOP RUN.`;

const RightContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "30%",
  flexShrink: 0,
  padding: "16px",
});

const CodeButton = styled(Button)({
  marginBottom: "16px",
});

const CodeOutput = styled(Typography)({
  fontFamily: "monospace",
  fontSize: "14px",
  padding: "12px",
  borderRadius: "8px",
  backgroundColor: "#f1f1f1",
  overflowX: "auto",
});

const CobolCodeEditor = () => {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  const saveOutputToMongoDB = async (output) => {
    try {
      await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/save-output`,
        // "http://localhost:3001/save-output",

        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            output: output,
          }),
        }
      );
    } catch (error) {
      console.error("Error saving output to MongoDB:", error);
    }
  };

  const runCode = async () => {
    try {
      await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/execute`,
        // "http://localhost:3001/execute",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            script: code,
            language: "cobol", // Change this to the desired programming language
            versionIndex: "0",
            clientId: process.env.REACT_APP_COBOL_CLIENT_ID,
            clientSecret: process.env.REACT_APP_COBOL_CLIENT_SECRET,
          }),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setOutput(data.output);
        });
      saveOutputToMongoDB(code);
    } catch (error) {
      console.error("Error executing code:", error);
    }
  };

  return (
    <div>
      <div className="flex flex-row space-x-4 items-start px-4 py-4">
        <div className="cobol-columns flex flex-col w-full h-full justify-start items-start">
          <SequentialNumberColumn code={code} />
          <textarea
            class="peer block min-h-[auto] w-full rounded border-2 bg-[#1E1E1E] px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-white text-xs dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-1"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter your COBOL code here"
            rows={10}
            cols={50}
          />
        </div>

        <RightContainer>
          <CodeButton variant="contained" onClick={runCode}>
            Run Code
          </CodeButton>
          <CodeOutput language="python" style={docco}>
            {output}
          </CodeOutput>
        </RightContainer>
      </div>
    </div>
  );
};

export default CobolCodeEditor;
