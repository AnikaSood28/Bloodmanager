import React from "react";
import { useSelector } from "react-redux";
import Layout from "../../components/shared/Layout/Layout";
import './AdminHome.css'

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <Layout>
      <div className="admin-home-container">
        <div className="welcome-section">
          <h1 className="welcome-heading">Welcome Admin,</h1>
          <p className="admin-name">{user?.name}</p>
        </div>
        
        <h2 className="page-title">Manage Blood Bank App</h2>
        
        <div className="main-content">
          <p>
            Thank you for taking on the important role of managing our blood bank. Your dedication and commitment are crucial in ensuring that our blood donation efforts are successful and that we can continue to save lives.
          </p>
          <p>
            As the administrator, you have access to various features and functionalities that allow you to efficiently manage the operations of the blood bank. From managing donor records to coordinating blood drives, your responsibilities play a vital role in supporting our community's health and well-being.
          </p>
          
          <div className="key-features">
            <h3>Key Features:</h3>
            <ul>
              <li>Donor Management: Keep track of donor information, including contact details, blood type, and donation history.</li>
              <li>Inventory Management: Monitor blood supply levels, track expiration dates, and manage inventory replenishment.</li>
              <li>Appointment Scheduling: Coordinate donation appointments and ensure a smooth donation process for both donors and staff.</li>
              <li>Reporting and Analytics: Generate reports on donation trends, inventory levels, and operational efficiency to make informed decisions.</li>
              <li>Communication Tools: Communicate with donors, volunteers, and staff through email updates, newsletters, and event notifications.</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;