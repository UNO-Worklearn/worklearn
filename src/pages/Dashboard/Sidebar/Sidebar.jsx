/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function Sidebar({
  data,
  sidebarOpen,
  isMobile,
  isActive,
  isActive2,
  toggleDropdown,
  toggleDropdown2,
  onNavigate,
}) {
  const location = useLocation();

  const isActivePath = (to) => location.pathname.startsWith(to);

  return (
    <div className={`db-sidebar ${sidebarOpen ? "open" : ""}`}>
      {data.map((item, unitIndex) => (
        <div key={item.id}>
          <div className="db-unit">
            <p>{item.topicName}</p>
          </div>

          <div className="db-items">
            {/* Home only for first unit */}
            {unitIndex === 0 && (
              <div className="db-item">
                <div className="db-link">
                  <Link
                    to="/dashboard"
                    className={isActivePath("/dashboard") ? "active-link" : ""}
                    onClick={onNavigate}
                  >
                    Home
                  </Link>
                </div>
              </div>
            )}

            {item.subTopics.map((subTopic, subTopicIndex) => {
              const mainKey = `${unitIndex}-${subTopicIndex}`;
              const hasDropdown =
                Array.isArray(subTopic.contents) &&
                subTopic.contents.length > 0;

              return (
                <div key={mainKey}>
                  {hasDropdown ? (
                    <div className="db-item">
                      <div className="db-link">
                        <HashLink
                          to="#"
                          onClick={() =>
                            toggleDropdown(unitIndex, subTopicIndex)
                          }
                        >
                          {subTopic.name}
                        </HashLink>
                        <ArrowDropDownIcon />
                      </div>

                      {isActive[mainKey] && (
                        <ul className="dropdown-container">
                          {subTopic.contents.map((subContent, contentIndex) => {
                            const nestedKey = `${unitIndex}-${subTopicIndex}-${contentIndex}`;

                            if (!subContent.contents) {
                              const to = `/dashboard/${item.id}/${subTopicIndex + 1}/${subContent.id}`;
                              return (
                                <li key={subContent.id}>
                                  <Link
                                    to={to}
                                    className={
                                      isActivePath(to) ? "active-link" : ""
                                    }
                                    onClick={onNavigate}
                                  >
                                    {subContent.topic}
                                  </Link>
                                </li>
                              );
                            }

                            return (
                              <div
                                key={subContent.id}
                                className="db-item mod-1"
                              >
                                <HashLink
                                  to="#"
                                  onClick={() =>
                                    toggleDropdown2(
                                      unitIndex,
                                      subTopicIndex,
                                      contentIndex
                                    )
                                  }
                                >
                                  {subContent.topic}
                                </HashLink>

                                {isActive2[nestedKey] && (
                                  <ul className="dropdown-container">
                                    {subContent.contents.map((nested) => {
                                      const to = `/dashboard/${item.id}/${subTopicIndex + 1}/${subContent.id}/${nested.id}`;
                                      return (
                                        <li key={nested.id}>
                                          <Link
                                            to={to}
                                            className={
                                              isActivePath(to)
                                                ? "active-link"
                                                : ""
                                            }
                                            onClick={onNavigate}
                                          >
                                            {nested.topic}
                                          </Link>
                                        </li>
                                      );
                                    })}
                                  </ul>
                                )}
                              </div>
                            );
                          })}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <div className="db-item">
                      <div className="db-link">
                        <Link
                          to={`/dashboard/${unitIndex + 1}/${subTopic.id}`}
                          onClick={onNavigate}
                        >
                          {subTopic.name}
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
