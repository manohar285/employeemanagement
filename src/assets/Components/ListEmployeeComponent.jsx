import React, { useEffect, useState } from "react";
import { deleteEmployee, listEmployees } from "../../services/EmployeeService";
import { useNavigate } from "react-router-dom";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);

  const navigator = useNavigate();

  useEffect(() => {
    getAllEmployees();
  }, []);

  function getAllEmployees() {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function addNewEmployee() {
    navigator("/add-employee");
  }

  function updateEmployee(id) {
    navigator(`/edit-employee/${id}`);
  }

  function removeEmployee(id) {
    console.log(id);

    deleteEmployee(id)
      .then((response) => {
        getAllEmployees();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="container mb-4">
      <h2 className="text-center">List of employees</h2>
      <button className="btn btn-primary mb-2" onClick={addNewEmployee}>
        Add Employee
      </button>
      <table className="table table-stripped table-bordered text-center align-middle">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id} className=" row-hover-actions ">
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td className="d-flex  justify-content-center">
                <div>
                  <button
                    className="btn btn-info"
                    onClick={() => updateEmployee(employee.id)}
                  >
                    Update
                  </button>
                  <FaTrashAlt
                    className="hover-action text-danger"
                    onClick={() => removeEmployee(employee.id)}
                    style={{ marginLeft: "25px", cursor: "pointer" }}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
{/* Test check */}
export default ListEmployeeComponent;
