import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../../../data/modules";
import "./Topics.css";
function Topics() {
  const { id } = useParams();
  const [currentTopics, setCurrentTopics] = useState([]);

  useEffect(() => {
    setCurrentTopics(data[id - 1].subTopics);
  }, [currentTopics, id]);
  return (
    <div className="content-section">
      <ul>
        {currentTopics.map((currentTopic) => (
          <li>
            <Link to={`${currentTopic.id}`}>{currentTopic.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Topics;
