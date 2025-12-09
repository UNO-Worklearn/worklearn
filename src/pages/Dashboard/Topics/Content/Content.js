import { InfoRounded } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import data from "../../../../data/modules";

import "./Content.css";
import SubContent from "./SubContent/SubContent";

function Content() {
  const { id, topicId } = useParams();
  const [subContent, setSubContent] = useState({});
  const [hasNextContent, setHasNextContent] = useState(false);

  useEffect(() => {
    setSubContent(data[id - 1].subTopics[topicId - 1]);
  }, [subContent, id, topicId]);

  useEffect(() => {
    const hasNext = data[id - 1]?.subTopics[topicId];
    setHasNextContent(!!hasNext);
  }, [id, topicId, hasNextContent]);
  return (
    <div className="content-section">
      {subContent.content ? (
        <>
          <div className="content-header">
            <h2 className="content-head">{subContent.name}</h2>
          </div>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: subContent.content }}
          />
          {hasNextContent ? (
            <Link
              className="next-button"
              to={`https://worklearnproject.com/dashboard/${id}/${
                parseInt(topicId) + 1
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
              <Typography
                variant="body1"
                component="span"
                sx={{ color: "#fff" }}
              >
                This is the final section of this module
              </Typography>
            </Box>
          )}
        </>
      ) : (
        <>
          <div className="content-header">
            <h2 className="content-head">{subContent.name}</h2>
          </div>
          {/* <div className="content-body">
            {subContent.contents ? (
              <ol>
                {subContent.contents.map((content) => (
                  <li>
                    <Link to={`${content.id}`}>{content.topic}</Link>
                  </li>
                ))}
              </ol>
            ) : null}
          </div> */}

          <Routes>
            <Route path=":contentId" element={<SubContent />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default Content;
