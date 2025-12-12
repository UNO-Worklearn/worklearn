import "./Navbar.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logOut } from "../../redux/actions/userActions";
import { trackLogout } from "../../utils/trackLogout";

function Navbar({ user, role, logOut }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const closeMenus = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  const handleLogout = () => {
    const userId = localStorage.getItem("userID");
    if (userId) trackLogout(userId);
    logOut();
    closeMenus();
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* LOGO */}
        <div className="navbar-logo">
          <img
            src="/images/uno-logo.png"
            alt="UNO logo"
            className="uno-logo"
          />
        </div>

        {/* HAMBURGER (mobile) */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* NAV ITEMS */}
        <div className={`navbar-menu ${menuOpen ? "open" : ""}`}>
          {!user && (
            <NavLink
              to="/"
              onClick={closeMenus}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Home
            </NavLink>
          )}

          {user && (
            <NavLink
              to="/dashboard"
              onClick={closeMenus}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Dashboard
            </NavLink>
          )}

          <NavLink
            to="/playground"
            onClick={closeMenus}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Playground
          </NavLink>

          {user && (
            <NavLink
              to={`/student-details/${localStorage.getItem("userID")}`}
              onClick={closeMenus}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              My Progress
            </NavLink>
          )}

          {/* USER MENU */}
          {user ? (
            <div className="user-menu">
              <button
                className="user-toggle"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span className="user-name">
                  {typeof user === "string" ? user : user?.name}
                </span>
                <span className="caret">▼</span>
              </button>

              {dropdownOpen && (
                <div className="dropdown">
                  {localStorage.getItem("role") === '"teacher"' && (
                    <NavLink to="/manage-students" onClick={closeMenus}>
                      Manage Students
                    </NavLink>
                  )}
                  <button onClick={handleLogout}>Logout</button>
                </div>
              )}
            </div>
          ) : (
            <NavLink
              to="/login"
              onClick={closeMenus}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => ({
  user: state.user.user,
  role: state.user.role,
});

export default connect(mapStateToProps, { logOut })(Navbar);
