import {
  CheckCircleOutline,
  InfoRounded,
  Task,
  TaskAlt,
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import ParsonsProblem from "../../../../../components/Parsons/Parsons";
import Quiz from "../../../../../components/Quiz/Quiz";
import UploadDocument from "../../../../../components/UploadDocument/UploadDocument";
import data from "../../../../../data/modules";
import NestedContent from "./NestedContent/NestedContent";

import "./SubContent.css";

function SubContent() {
  const { id, topicId, contentId } = useParams();
  const [content, setContent] = useState("");
  const [hasNextContent, setHasNextContent] = useState(false);
  const [contents, setContents] = useState(null);
  const [type, setType] = useState("");
  const [quizType, setQuizType] = useState("");
  // const [nextContent, setNextContent] = useState("");

  // console.log("nextContent", nextContent);

  useEffect(() => {
    // if (data[id - 1].subTopics[topicId - 1].contents[contentId]) {
    //   setNextContent(data[id - 1].subTopics[topicId - 1].contents[contentId]);
    // }
    setContent(
      data[id - 1].subTopics[topicId - 1].contents[contentId - 1].content
    );
    setContents(
      data[id - 1].subTopics[topicId - 1].contents[contentId - 1].contents
    );
    setType(data[id - 1].subTopics[topicId - 1].contents[contentId - 1].type);
    setQuizType(data[id - 1].subTopics[topicId - 1].type);
  }, [id, topicId, contentId, content, quizType, contents]);

  useEffect(() => {
    const hasNext = data[id - 1]?.subTopics[topicId - 1]?.contents[contentId];
    setHasNextContent(!!hasNext);
  }, [id, topicId, contentId, hasNextContent]);
  return (
    <div className="subcontent-section">
      {contents && (
        <>
          <ol>
            {contents.map((content) => (
              <li>
                <Link to={`${content.id}`}>{content.topic}</Link>
              </li>
            ))}
          </ol>
          <Routes>
            <Route path=":subContentId" element={<NestedContent />} />
          </Routes>
        </>
      )}
      {type !== "quiz" && (
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
      {type === "quiz" && <Quiz type={quizType} />}
      {type === "upload" && <UploadDocument />}
      {type === "parsons" && <ParsonsProblem />}
      {hasNextContent ? (
        <Link
          className="next-button"
          to={`https://worklearnproject.com/dashboard/${id}/${topicId}/${
            parseInt(contentId) + 1
          }`}
        >
          Next {">>"}
        </Link>
      ) : (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#2196f3",
            padding: "8px",
            borderRadius: "4px",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <InfoRounded
            sx={{ fontSize: 20, marginRight: "8px", color: "#fff" }}
          />
          <Typography variant="body1" component="span" sx={{ color: "#fff" }}>
            This is the final section of this module.
          </Typography>
        </Box>
      )}
    </div>
  );
}

export default SubContent;
