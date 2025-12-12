// Landing.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { languages } from "../../data/languages";
import { classnames } from "../../utils/general";
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
import { setUser } from "../../redux/actions/userActions";

//const javascriptDefault = `// some comment`;

function Playground() {
  const [code, setCode] = useState(javascriptDefault);
  const [customInput, setCustomInput] = useState("");
  const [outputDetails, setOutputDetails] = useState(null);
  const [processing, setProcessing] = useState(null);
  const [theme, setTheme] = useState("cobalt");
  const [language, setLanguage] = useState(languages[0]);
  const [value, setValue] = useState("1");
  let userID = localStorage.getItem("userID");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const enterPress = useKeyPress("Enter");
  const ctrlPress = useKeyPress("Control");

  const onSelectChange = (sl) => {
    console.log("selected Option...", sl);
    setLanguage(sl);
  };

  useEffect(() => {
    if (enterPress && ctrlPress) {
      console.log("enterPress", enterPress);
      console.log("ctrlPress", ctrlPress);
      handleCompile();
    }
  }, [ctrlPress, enterPress]);
  const onChange = (action, data) => {
    switch (action) {
      case "code": {
        setCode(data);
        break;
      }
      default: {
        console.warn("case not handled!", action, data);
      }
    }
  };
  const handleCompile = () => {
    setProcessing(true);
    const formData = {
      language_id: language.id,
      // encode source code in base64
      source_code: btoa(code),
      stdin: btoa(customInput),
    };
    const options = {
      method: "POST",
      url: process.env.REACT_APP_RAPID_API_URL,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "content-type": "application/json",
        "Content-Type": "application/json",
        "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      },
      data: formData,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log("res.data", response.data);
        const token = response.data.token;
        checkStatus(token);
      })
      .catch((err) => {
        let error = err.response ? err.response.data : err;
        setProcessing(false);
        console.log(error);
      });
  };

  const checkStatus = async (token) => {
    const options = {
      method: "GET",
      url: process.env.REACT_APP_RAPID_API_URL + "/" + token,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      },
    };
    try {
      let response = await axios.request(options);
      let statusId = response.data.status?.id;

      // Processed - we have a result
      if (statusId === 1 || statusId === 2) {
        // still processing
        setTimeout(() => {
          checkStatus(token);
        }, 2000);
        return;
      } else {
        setProcessing(false);
        setOutputDetails(response.data);
        showSuccessToast(`Compiled Successfully!`);
        console.log("response.data", response.data);
        return;
      }
    } catch (err) {
      console.log("err", err);
      setProcessing(false);
      showErrorToast();
    }
  };

  function handleThemeChange(th) {
    const theme = th;
    console.log("theme...", theme);

    if (["light", "vs-dark"].includes(theme.value)) {
      setTheme(theme);
    } else {
      defineTheme(theme.value).then((_) => setTheme(theme));
    }
  }
  useEffect(() => {
    defineTheme("oceanic-next").then((_) =>
      setTheme({ value: "oceanic-next", label: "Oceanic Next" })
    );
  }, []);

  const showSuccessToast = (msg) => {
    toast.success(msg || `Compiled Successfully!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const showErrorToast = (msg) => {
    toast.error(msg || `Something went wrong! Please try again.`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="JS/Python" value="1" />
            <Tab label="COBOL" value="2" />
            <Tab label="VSCode" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <div className="flex flex-row">
            <div className="px-4 py-2">
              <Typography
                sx={{ display: "flex", justifyContent: "flex-start" }}
                variant="caption"
              >
                Language
              </Typography>
              <LanguagesDropdown onSelectChange={onSelectChange} />
            </div>
            <div className="px-4 py-2">
              <Typography
                variant="caption"
                sx={{ display: "flex", justifyContent: "flex-start" }}
              >
                Theme
              </Typography>

              <ThemeDropdown
                handleThemeChange={handleThemeChange}
                theme={theme}
              />
            </div>
          </div>
          <div className="flex flex-row space-x-4 items-start px-4 py-4">
            <div className="flex flex-col w-full h-full justify-start items-end">
              <CodeEditorWindow
                code={code}
                onChange={onChange}
                language={language?.value}
                theme={theme.value}
              />
            </div>

            <div className="right-container flex flex-shrink-0 w-[30%] flex-col">
              <OutputWindow outputDetails={outputDetails} />
              <div className="flex flex-col items-end">
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
                    className="compile-button"
                  >
                    Run Code
                  </Button>
                )}
              </div>
              {outputDetails && <OutputDetails outputDetails={outputDetails} />}
            </div>
          </div>
        </TabPanel>
        <TabPanel value="2">
          <CobolCodeEditor />
        </TabPanel>
        <TabPanel value="3">
        <div>
      {userID ? (
        <div style={{ width: "100%", height: "100vh", position: "relative" }}>
          <iframe
            src={`${process.env.REACT_APP_VSCODE_SERVER_URL}/?folder=/workspaces/${userID}`}
            title="VSCode Web"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
            }}
          />
        </div>
      ) : (
        <div>
          <p>Please log in to access the code editor.</p>
        </div>
      )}
    </div>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default Playground;
