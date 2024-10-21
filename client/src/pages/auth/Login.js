import React from "react";
import { useSelector } from "react-redux";
import Form from "../../components/shared/Form/Form";
import Spinner from "../../components/shared/Spinner";
import "./Login.css"; // Importing the CSS file

const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);

  return (
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="login-container">
          <header className="login-header">
            <h1>Welcome Back!</h1>
            <p>Please log in to continue</p>
          </header>
          <div className="row"> {/* Remove g-0 class */}
            <div className="form-banner">
              <img src="./assets/images/image.png" alt="loginImage" />
            </div>
            <div className="form-container">
              <Form
                formTitle={"Login Page"}
                submitBtn={"Login"}
                formType={"login"}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
