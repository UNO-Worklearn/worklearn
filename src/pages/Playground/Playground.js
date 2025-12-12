// Playground.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { languages } from "../../data/languages";
import { defineTheme } from "../../lib/defineTheme";
import useKeyPress from "../../hooks/useKeyPress";

import CodeEditorWindow from "../../components/CodeEditorWindow/CodeEditorWindow";
import OutputWindow from "../../components/OutputWindow/OutputWindow";
import CustomInput from "../../components/CustomInput/CustomInput";
import OutputDetails from "../../components/OutputDetails/OutputDetails";
import ThemeDropdown from "../../components/ThemeDropdown/ThemeDropdown";
import LanguagesDropdown from "../../components/LanguagesDropdown/LanguagesDropdown";

import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import CobolCodeEditor from "./CobolCodeEditor";
import { Box, Button, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";

const javascriptDefault = "";

function Playground() {
  const [code, setCode] = useState(javascriptDefault);
  const [customInput, setCustomInput] = useState("");
  const [outputDetails, setOutputDetails] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [theme, setTheme] = useState("cobalt");
  const [language, setLanguage] = useState(languages[0]);
  const [value, setValue] = useState("1");

  const userID = localStorage.getItem("userID");

  const enterPress = useKeyPress("Enter");
  const ctrlPress = useKeyPress("Control");

  /* --------------------------------------------
     Keyboard shortcut (Ctrl + Enter)
  -------------------------------------------- */
  useEffect(() => {
    if (enterPress && ctrlPress) handleCompile();
  }, [enterPress, ctrlPress]);

  /* --------------------------------------------
     Monaco resize fix (mobile + orientation)
  -------------------------------------------- */
  useEffect(() => {
    const resize = () => window.dispatchEvent(new Event("resize"));
    window.addEventListener("resize", resize);
    window.addEventListener("orientationchange", resize);
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("orientationchange", resize);
    };
  }, []);

  /* --------------------------------------------
     Theme initialization
  -------------------------------------------- */
  useEffect(() => {
    defineTheme("oceanic-next").then(() =>
      setTheme({ value: "oceanic-next", label: "Oceanic Next" })
    );
  }, []);

  const onChange = (action, data) => {
    if (action === "code") setCode(data);
  };

  const handleCompile = () => {
    setProcessing(true);

    const formData = {
      language_id: language.id,
      source_code: btoa(code),
      stdin: btoa(customInput),
    };

    axios
      .post(process.env.REACT_APP_RAPID_API_URL, formData, {
        params: { base64_encoded: "true", fields: "*" },
        headers: {
          "Content-Type": "application/json",
          "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
          "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        },
      })
      .then((res) => checkStatus(res.data.token))
      .catch(() => {
        setProcessing(false);
        toast.error("Compilation failed");
      });
  };

  const checkStatus = async (token) => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_RAPID_API_URL}/${token}`,
        {
          params: { base64_encoded: "true", fields: "*" },
          headers: {
            "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
            "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
          },
        }
      );

      const statusId = res.data.status?.id;
      if (statusId === 1 || statusId === 2) {
        setTimeout(() => checkStatus(token), 2000);
      } else {
        setProcessing(false);
        setOutputDetails(res.data);
        toast.success("Compiled Successfully!");
      }
    } catch {
      setProcessing(false);
      toast.error("Error retrieving output");
    }
  };

  const handleThemeChange = (th) => {
    if (["light", "vs-dark"].includes(th.value)) {
      setTheme(th);
    } else {
      defineTheme(th.value).then(() => setTheme(th));
    }
  };

  return (
    <>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={(e, v) => setValue(v)}>
            <Tab label="JS / Python" value="1" />
            <Tab label="COBOL" value="2" />
            <Tab label="VSCode" value="3" />
          </TabList>
        </Box>

        {/* ---------------- JS / Python ---------------- */}
        <TabPanel value="1">
          <ToastContainer />

          {/* Controls */}
          <div className="flex flex-col sm:flex-row gap-4 px-4 py-2">
            <div>
              <Typography variant="caption">Language</Typography>
              <LanguagesDropdown onSelectChange={setLanguage} />
            </div>

            <div>
              <Typography variant="caption">Theme</Typography>
              <ThemeDropdown theme={theme} handleThemeChange={handleThemeChange} />
            </div>
          </div>

          {/* Editor + Output */}
          <div className="flex flex-col md:flex-row gap-4 px-4 py-4">
            {/* Editor */}
            <div className="w-full min-h-[300px] md:min-h-[500px]">
              <CodeEditorWindow
                code={code}
                onChange={onChange}
                language={language?.value}
                theme={theme.value}
              />
            </div>

            {/* Output */}
            <div className="w-full md:w-[30%] flex flex-col gap-3">
              <OutputWindow outputDetails={outputDetails} />

              <CustomInput
                customInput={customInput}
                setCustomInput={setCustomInput}
              />

              {processing ? (
                <LoadingButton loading variant="outlined">
                  Processing
                </LoadingButton>
              ) : (
                <Button
                  onClick={handleCompile}
                  disabled={!code}
                  variant="contained"
                  color="success"
                >
                  Run Code
                </Button>
              )}

              {outputDetails && <OutputDetails outputDetails={outputDetails} />}
            </div>
          </div>
        </TabPanel>

        {/* ---------------- COBOL ---------------- */}
        <TabPanel value="2">
          <CobolCodeEditor />
        </TabPanel>

        {/* ---------------- VSCode ---------------- */}
        <TabPanel value="3">
          {userID ? (
            <div className="w-full h-[80vh]">
              <iframe
                src={`${process.env.REACT_APP_VSCODE_SERVER_URL}/?folder=/workspaces/${userID}`}
                title="VSCode"
                className="w-full h-full border-none"
              />
            </div>
          ) : (
            <p>Please log in to access VSCode.</p>
          )}
        </TabPanel>
      </TabContext>
    </>
  );
}

export default Playground;
