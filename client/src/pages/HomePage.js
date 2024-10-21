import React, {useState,useEffect} from 'react'
import Spinner from "../components/shared/Spinner";
import { useSelector } from "react-redux";
import Layout from '../components/shared/Layout/Layout';
import Modal from '../components/shared/modaal/Modal';
import API from '../services/API'
import moment from 'moment'
import { Navigate, useNavigate } from 'react-router-dom';
const HomePage = () => {
  const { loading, error, user } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  //get function
  const getBloodRecords = async () => {
      try {
          const { data } = await API.get("/inventory/get-inventory");
          if (data?.success) {
              setData(data?.inventory);
              console.log(data);
          }
      } catch (error) {
          console.log(error);
      }
  };

  useEffect(() => {
      getBloodRecords();
  }, []);

  // Check user role and redirect if admin
  useEffect(() => {
      if (user?.role === "admin") {
          navigate("/admin");
      }
  }, [user, navigate]);

  // Check user role and hide add inventory for admin and donor
  const showAddInventory = user?.role !== "admin" && user?.role !== "donor";

  return (
      <Layout>
          {error && <span>{alert(error)}</span>}
          {loading ? (
              <Spinner />
          ) : (
              <>
                  <div className="container">
                      {showAddInventory && (
                          <h4
                              className="ms-4"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                              style={{ cursor: "pointer" }}
                          >
                              <i className="fa-solid fa-plus text-success py-4"></i>
                              Add Inventory
                          </h4>
                      )}
                      <table className="table ">
                          <thead>
                              <tr>
                                  <th scope="col">Blood Group</th>
                                  <th scope="col">Inventory Type</th>
                                  <th scope="col">Quantity</th>
                                  <th scope="col">Donor Email</th>
                                  <th scope="col">TIme & Date</th>
                              </tr>
                          </thead>
                          <tbody>
                              {data?.map((record) => (
                                  <tr key={record._id}>
                                      <td>{record.bloodGroup}</td>
                                      <td>{record.inventoryType}</td>
                                      <td>{record.quantity} (ML)</td>
                                      <td>{record.email}</td>
                                      <td>
                                          {moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}
                                      </td>
                                  </tr>
                              ))}
                          </tbody>
                      </table>

                      <Modal />
                  </div>
              </>
          )}
      </Layout>
  );
};

export default HomePage;