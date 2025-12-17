/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, useLocation } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./Sidebar.css";


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

  const isActivePath = (to) => location.pathname === to;

  // Close sidebar on mobile when navigating
  const handleNavigate = () => {
    if (isMobile && onNavigate) {
      onNavigate();
    }
  };

  return (
    <>
      {/* SIDEBAR */}
      <aside
        className={`db-sidebar ${sidebarOpen ? "open" : ""}`}
        aria-hidden={!sidebarOpen && isMobile}
      >
        {data.map((unit, unitIndex) => (
          <div key={unit.id} className="db-unit-wrapper">
            {/* UNIT TITLE */}
            <div className="db-unit">
              <p>{unit.topicName}</p>
            </div>

            <div className="db-items">
              {/* HOME (only once) */}
              {unitIndex === 0 && (
                <div className="db-item">
                  <div
                    className={`db-link ${
                      location.pathname === "/dashboard" ? "active" : ""
                    }`}
                    onClick={handleNavigate}
                  >
                    <Link to="/dashboard">Home</Link>
                  </div>
                </div>
              )}

              {unit.subTopics.map((subTopic, subTopicIndex) => {
                const mainKey = `${unitIndex}-${subTopicIndex}`;
                const hasChildren =
                  Array.isArray(subTopic.contents) &&
                  subTopic.contents.length > 0;

                return (
                  <div key={mainKey} className="db-item">
                    {/* MAIN TOPIC */}
                    <div
                      className={`db-link ${
                        isActive[mainKey] ? "active" : ""
                      }`}
                      onClick={() =>
                        hasChildren &&
                        toggleDropdown(unitIndex, subTopicIndex)
                      }
                    >
                      {hasChildren ? (
                        <>
                          <span className="db-link-text">
                            {subTopic.name}
                          </span>
                          <ArrowDropDownIcon />
                        </>
                      ) : (
                        <Link
                          to={`/dashboard/${unit.id}/${subTopicIndex + 1}`}
                          onClick={handleNavigate}
                        >
                          {subTopic.name}
                        </Link>
                      )}
                    </div>

                    {/* LEVEL 2 */}
                    {hasChildren && isActive[mainKey] && (
                      <ul className="dropdown-container">
                        {subTopic.contents.map((content, contentIndex) => {
                          const nestedKey = `${unitIndex}-${subTopicIndex}-${contentIndex}`;

                          // NO NESTED LEVEL
                          if (!content.contents) {
                            const to = `/dashboard/${unit.id}/${subTopicIndex + 1}/${content.id}`;

                            return (
                              <li key={content.id}>
                                <div
                                  className={`db-link ${
                                    isActivePath(to) ? "active" : ""
                                  }`}
                                  onClick={handleNavigate}
                                >
                                  <Link to={to}>{content.topic}</Link>
                                </div>
                              </li>
                            );
                          }

                          // LEVEL 3
                          return (
                            <li key={content.id}>
                              <div
                                className={`db-link ${
                                  isActive2[nestedKey] ? "active" : ""
                                }`}
                                onClick={() =>
                                  toggleDropdown2(
                                    unitIndex,
                                    subTopicIndex,
                                    contentIndex
                                  )
                                }
                              >
                                <span className="db-link-text">
                                  {content.topic}
                                </span>
                                <ArrowDropDownIcon />
                              </div>

                              {isActive2[nestedKey] && (
                                <ul className="dropdown-container">
                                  {content.contents.map((nested) => {
                                    const to = `/dashboard/${unit.id}/${subTopicIndex + 1}/${content.id}/${nested.id}`;

                                    return (
                                      <li key={nested.id}>
                                        <div
                                          className={`db-link ${
                                            isActivePath(to) ? "active" : ""
                                          }`}
                                          onClick={handleNavigate}
                                        >
                                          <Link to={to}>{nested.topic}</Link>
                                        </div>
                                      </li>
                                    );
                                  })}
                                </ul>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </aside>

      {/* MOBILE OVERLAY */}
      {isMobile && sidebarOpen && (
        <div className="sidebar-overlay" onClick={onNavigate} />
      )}
    </>
  );
}
