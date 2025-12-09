import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import Quiz from "../../../../../../components/Quiz/Quiz";
import data from "../../../../../../data/modules";
import "./NestedContent.css";

const NestedContent = () => {
  const { id, topicId, contentId, subContentId } = useParams();

  const [type, setType] = useState("");
  const [content, setContent] = useState("");
  const [quizType, setQuizType] = useState("");

  useEffect(() => {
    setContent(
      data[id - 1].subTopics[topicId - 1].contents[contentId - 1].contents[
        subContentId - 1
      ].content
    );
    setType(
      data[id - 1].subTopics[topicId - 1].contents[contentId - 1].contents[
        subContentId - 1
      ].type
    );
    setQuizType(
      data[id - 1].subTopics[topicId - 1].contents[contentId - 1].type
    );
  }, [id, topicId, contentId, subContentId, type, content, quizType]);
  return (
    <>
      {type !== "quiz" && (
        <div
          className="nested-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
      {type === "quiz" && <Quiz type={quizType} />}
    </>
  );
};

export default NestedContent;
