import "./Navbar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logOut } from "../../redux/actions/userActions";
import { trackLogout } from "../../utils/trackLogout";

function Navbar({ user, role, logOut }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    const userId = localStorage.getItem("userID");
    if (userId) trackLogout(userId);
    logOut();
    setMenuOpen(false);
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

        {/* HAMBURGER */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* NAV ITEMS */}
        <div className={`navbar-menu ${menuOpen ? "open" : ""}`}>
          {!user && (
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          )}

          {user && (
            <Link to="/dashboard" onClick={() => setMenuOpen(false)}>
              Dashboard
            </Link>
          )}

          <Link to="/playground" onClick={() => setMenuOpen(false)}>
            Playground
          </Link>

          {user && (
            <Link
              to={`/student-details/${localStorage.getItem("userID")}`}
              onClick={() => setMenuOpen(false)}
            >
              My Progress
            </Link>
          )}

          {/* USER MENU */}
          {user ? (
            <>
              <button
                className="user-toggle"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                {typeof user === "string" ? user : user?.name} ▼
              </button>

              {dropdownOpen && (
                <div className="dropdown">
                  {localStorage.getItem("role") === '"teacher"' && (
                    <Link
                      to="/manage-students"
                      onClick={() => setMenuOpen(false)}
                    >
                      Manage Students
                    </Link>
                  )}

                  <button onClick={handleLogout}>Logout</button>
                </div>
              )}
            </>
          ) : (
            <Link to="/login" onClick={() => setMenuOpen(false)}>
              Login
            </Link>
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
