import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/Login.css";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleRegister = () => {
        navigate("/Signup");
    };

    const handleLogin = (e) => {
        e.preventDefault(); // Prevent page reload on form submission

        // Check for empty fields
        if (!email) {
            setError("Please enter your email!");
            return;
        }
        if (!password) {
            setError("Please enter your password!");
            return;
        }

        // Validate login information
        if (email === "fptaptech@gmail.com" && password === "123") {
            alert("Login successful!");
            navigate("/"); // Redirect to homepage if credentials are correct
        } else {
            setError("Invalid email or password!");
        }
    };

    return (
        <div className="login_wrapper">
            <div className="login-container">
                <div className="login-left">
                    <div className="login_left_content">
                        <h1 className="login-title">Login</h1>
                        <hr className="underline" />
                    </div>
                </div>
                <div className="login-right">
                    <form className="login-form" onSubmit={handleLogin}>
                        <input
                            type="email"
                            placeholder="Email"
                            className="login-input"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setError(""); // Clear error when user retypes
                            }}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="login-input"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                setError(""); // Clear error when user retypes
                            }}
                        />
                        {error && <p className="error-message">{error}</p>} {/* Display error message if present */}
                        <div className="login_button">
                            <div className="login_submit_wrap">
                                <button type="submit" className="login-submit">Login</button>
                            </div>
                            <div className="register_btn_wrap">
                                <span onClick={handleRegister} className="register-btn">Don't have an account?</span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
