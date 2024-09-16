import React, { useEffect, useState } from "react";
import axios from "axios";

const home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetching data with Axios
    axios
      .get("https://dummyjson.com/users")
      .then((response) => {
        setUsers(response.data.users);
        setLoading(false);
      })
      .catch((error) => {
        setError("An error occurred while fetching data.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div
        className="bg-light border-right"
        id="sidebar-wrapper"
        style={{ width: "250px", height: "100vh" }}
      >
        <div className="sidebar-heading p-3">DATA CENTER</div>
        <div className="list-group list-group-flush">
          <a
            href="#"
            className="list-group-item list-group-item-action bg-light"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action bg-light"
          >
            Profile
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action bg-light"
          >
            Settings
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action bg-light"
          >
            Logout
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-fluid">
        <h1 className="mt-4">DASHBOARD</h1>
        <div className="container mt-5">
          <div className="row">
            {/* Card 1 */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card bg-primary text-white">
                <div className="card-body">
                  <h5 className="card-title">Total Users</h5>
                  <h2 className="card-text">1,250</h2>
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center">
                  <span>View Details</span>
                  <i className="fas fa-users"></i>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card bg-success text-white">
                <div className="card-body">
                  <h5 className="card-title">Sales</h5>
                  <h2 className="card-text">$24,000</h2>
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center">
                  <span>View Details</span>
                  <i className="fas fa-dollar-sign"></i>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card bg-warning text-white">
                <div className="card-body">
                  <h5 className="card-title">New Orders</h5>
                  <h2 className="card-text">45</h2>
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center">
                  <span>View Details</span>
                  <i className="fas fa-shopping-cart"></i>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card bg-danger text-white">
                <div className="card-body">
                  <h5 className="card-title">Tasks</h5>
                  <h2 className="card-text">18</h2>
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center">
                  <span>View Details</span>
                  <i className="fas fa-tasks"></i>
                </div>
              </div>
            </div>
          </div>

          <div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Firstname</th>
                  <th>Surname</th>
                  <th>Age</th>
                  <th>Sex</th>
                  <th>Job Title</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.age}</td>
                    <td>{user.gender}</td>
                    <td>{user.company.title}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
