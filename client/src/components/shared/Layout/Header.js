import React from "react";
import { BiDonateBlood, BiUserCircle } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useNavigate, useLocation, Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        localStorage.clear();
        alert("Logout Successfully");
        navigate("/login");
    };

    return (
        <div className="home">
            <nav className="navbar navbar-expand-lg navbar-light navbar-custom">
                <div className="container-fluid">
                    <div className="navbar-logo h1">
                        <BiDonateBlood color="red" /> Animal Blood Bank
                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-nav-custom">
                            <li className="nav-item">
                                <Link to="/home" className="nav-link nav-link-custom">
                                    <i className="fas fa-home"></i> Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link nav-link-custom">
                                    <i className="fas fa-info-circle"></i> About Us
                                </Link>
                            </li>
                            {/* Render Analytics link only for hospital and admin */}
                            {(user?.role === "hospital" || user?.role === "admin") && (
                                <li className="nav-item">
                                    <Link to="/analytics" className="nav-link nav-link-custom">
                                        Analytics
                                    </Link>
                                </li>
                            )}
                        </ul>
                        <ul className="navbar-nav flex-row">
                            <li className="nav-item mx-3">
                                <p className="nav-link nav-link-custom">
                                    <BiUserCircle /> Welcome{" "}
                                    {user?.name || user?.hospitalName || user?.organisationName}
                                    &nbsp;
                                    <span className="badge bg-secondary">{user?.role}</span>
                                </p>
                            </li>
                            <li className="nav-item mx-3">
                                <button className="btn btn-danger btn-logout-custom" onClick={handleLogout}>Logout</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
