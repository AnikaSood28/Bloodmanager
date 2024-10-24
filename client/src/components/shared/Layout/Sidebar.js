import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Sidebar.css"; // Ensure this points to your CSS file

const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="menu">
        {user?.role === "organisation" && (
          <>
            <div className={`menu-item ${location.pathname === "/" && "active"}`}>
              <i className="fa-solid fa-warehouse"></i>
              <Link to="/">Inventory</Link>
            </div>
            <div className={`menu-item ${location.pathname === "/donar" && "active"}`}>
              <i className="fa-solid fa-hand-holding-medical"></i>
              <Link to="/donar">Donar</Link>
            </div>
            <div className={`menu-item ${location.pathname === "/hospital" && "active"}`}>
              <i className="fa-solid fa-hospital"></i>
              <Link to="/hospital">Hospital</Link>
            </div>
          </>
        )}

        {(user?.role === "donor" || user?.role === "hospital") && (
          <div className={`menu-item ${location.pathname === "/orgnaisation" && "active"}`}>
            <i className="fa-sharp fa-solid fa-building-ngo"></i>
            <Link to="/orgnaisation">Organisation</Link>
          </div>
        )}
        
        {user?.role === "hospital" && (
          <div className={`menu-item ${location.pathname === "/consumer" && "active"}`}>
            <i className="fa-sharp fa-solid fa-building-ngo"></i>
            <Link to="/consumer">Consumer</Link>
          </div>
        )}

        {user?.role === "admin" && (
          <>
            <div className={`menu-item ${location.pathname === "/donar-list" && "active"}`}>
              <i className="fa-solid fa-warehouse"></i>
              <Link to="/donar-list">Donar List</Link>
            </div>
            <div className={`menu-item ${location.pathname === "/hospital-list" && "active"}`}>
              <i className="fa-solid fa-hand-holding-medical"></i>
              <Link to="/hospital-list">Hospital List</Link>
            </div>
            <div className={`menu-item ${location.pathname === "/org-list" && "active"}`}>
              <i className="fa-solid fa-hospital"></i>
              <Link to="/org-list">Organisation List</Link>
            </div>
          </>
        )}

        {user?.role === "donor" && (
          <div className={`menu-item ${location.pathname === "/donation" && "active"}`}>
            <i className="fa-sharp fa-solid fa-building-ngo"></i>
            <Link to="/donation">Donation</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
