import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/SignUp.css";

function SignUp() {
    const navigate = useNavigate();

    // State for form values
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(""); // For error messages

    const handleBackHome = () => {
        navigate("/");
    };

    const handleSignUp = (e) => {
        e.preventDefault(); // Prevent page reload on form submit

        // Validation checks
        if (!firstName) {
            setError("Please enter your first name!");
            return;
        }
        if (!lastName) {
            setError("Please enter your last name!");
            return;
        }
        if (!gender) {
            setError("Please select your gender!");
            return;
        }
        if (!email) {
            setError("Please enter your email address!");
            return;
        }
        if (!password) {
            setError("Please enter your password!");
            return;
        }
        if (!confirmPassword) {
            setError("Please confirm your password!");
            return;
        }
        if (password !== confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        // If no errors, perform sign-up
        setError(""); // Clear error messages
        alert("Registration successful!!!, you will be redirected to the login page");
        console.log("Sign-up details:", { firstName, lastName, gender, email, password });
        navigate("/Login"); // Redirect to login page
    };

    return (
        <div className="signup_container_wrap">
            <div className="signup-container">
                <div className="signup-left">
                    <h1 className="signup-title">Create an Account</h1>
                    <hr className="signup-divider" />
                </div>
                <div className="signup-right">
                    <form className="signup-form" onSubmit={handleSignUp}>
                        <input
                            type="text"
                            placeholder="First Name"
                            className="signup-input login-input"
                            value={firstName}
                            onChange={(e) => {
                                setFirstName(e.target.value);
                                setError(""); // Clear error when user starts typing
                            }}
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="signup-input login-input"
                            value={lastName}
                            onChange={(e) => {
                                setLastName(e.target.value);
                                setError("");
                            }}
                        />
                        <div className="signup-gender">
                            <label className="radio-container">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    onChange={(e) => {
                                        setGender(e.target.value);
                                        setError("");
                                    }}
                                />
                                <span className="radio-label">Female</span>
                            </label>
                            <label className="radio-container">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    onChange={(e) => {
                                        setGender(e.target.value);
                                        setError("");
                                    }}
                                />
                                <span className="radio-label">Male</span>
                            </label>
                        </div>
                        <input
                            type="date"
                            placeholder="mm/dd/yyyy"
                            className="signup-input login-input"
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="signup-input login-input"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setError("");
                            }}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="signup-input login-input"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                setError("");
                            }}
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="signup-input login-input"
                            value={confirmPassword}
                            onChange={(e) => {
                                setConfirmPassword(e.target.value);
                                setError("");
                            }}
                        />
                        {error && <p className="error-message">{error}</p>} {/* Display error messages */}
                        <button type="submit" className="signup-button">Sign Up</button>
                    </form>
                    <span onClick={handleBackHome} className="signup-back">← Back to Home</span>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
