import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [pass, setPassword] = useState("");


  const [errors, setErrors] = useState({
    userName: "",
    pass: "",
  });

  const {id}=useParams();

  if(validateForm){
    const users={userName,pass}
    console.log(users)
  }

  function validateForm() {
    let valid = true;
    const errorsCopy = { ...errors };

    if (userName.trim()) {
      errorsCopy.userName = "";
    } else {
      errorsCopy.userName = "Username is required";
      valid = false;
    }

    if (pass.trim()) {
      errorsCopy.pass = "";
    } else {
      errorsCopy.pass = "Password is required";
      valid = false;
    }


    setErrors(errorsCopy);
    return valid;
  }

  return (
    <div className="container">
      <br />
      <div className="row">
        <div className="card col-md-4 offset-md-4">
          <h2>Login</h2>
          <div className="cardbody">
            <form>
              <div className="form-group mb-2">
                <label htmlFor="" className="form-label">
                  UserName:
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.userName ? "is-invalid" : ""}`}
                  placeholder="Enter User Name"
                  name="userName"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
            
              </div>

              <div className="form-group mb-2">
                <label htmlFor="" className="form-label">
                  Password:
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.pass ? "is-invalid" : ""}`}
                  placeholder="Enter password"
                  name="pass"
                  value={pass}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                className="btn btn-success mb-2 mt-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
