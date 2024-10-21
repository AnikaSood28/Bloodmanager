import React from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import "./Register.css"; // Ensure to import the CSS file

const Register = () => {
    const { loading, error } = useSelector((state) => state.auth);
    
    return (
        <div className="register-page">
            <h1 className="header">🐾 Join Us Now to Help Our Furry Friends! 🐶</h1>
            <div className="container">
                <div className="image-container">
                    <img 
                        src="./assets/images/i.png" 
                        alt="Register for Dog Blood Bank" 
                        className="dog-image" 
                    />
                    <div className="curved-line">
                        <div className="circle"></div> {/* Circle that moves along the curve */}
                    </div>
                </div>
                <div className="form-wrapper">
                    <h2 className="form-title">Register Your Pet</h2>
                    {error && <p className="error-message">{error}</p>} {/* Show error message if any */}
                    <Form 
                        submitBtn="Register" 
                        formType="register" 
                        loading={loading} // Pass loading state to the Form component
                    />
                </div>
            </div>
        </div>
    );
};

export default Register;
