import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/Login.css";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const lis = document.querySelectorAll(".li");
    const user_info = document.querySelector(".user_logged-in_info");
    const getLoggedIn = document.querySelector(".logged-in")
    const handleRegister = () => {
        navigate("/Signup");
    };

    const handleLogin = (e) => {
    e.preventDefault(); // Ngăn trang reload khi submit form

    // Kiểm tra các trường trống
    if (!email) {
        setError("Please enter your email!");
        return;
    }
    if (!password) {
        setError("Please enter your password!");
        return;
    }

    // Lấy danh sách người dùng từ Local Storage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Tìm kiếm người dùng với email và password
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
        alert(`Welcome back, ${user.firstName} ${user.lastName}!`);
        lis.forEach((li)=>{
            li.classList.add('hide')
            li.classList.remove('visibly')
        })
        getLoggedIn.classList.remove('hide')
        getLoggedIn.classList.add('visibly')
        // console.log(user)
        user_info.innerHTML = `<span>${user.firstName} ${user.lastName} </span> <i class="fa-solid fa-user"></i>`
        navigate("/"); // Chuyển hướng đến trang chủ nếu đăng nhập thành công
    } else {
        setError("Invalid email or password!"); // Hiển thị lỗi nếu thông tin không đúng
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
