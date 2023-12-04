import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classes from "./Login.module.scss"
import bglogin from "../../assets/images/bglogin.png"
import { ToastContainer, toast } from 'react-toastify';
import { loginApi } from "../../services/UserService"
import { EyeInvisibleOutlined, EyeOutlined, DoubleLeftOutlined } from '@ant-design/icons';
import { UserContext } from "../../context/UserContext"

function Login() {
    const { loginContext } = useContext(UserContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();

    // useEffect(() => {
    //     let token = localStorage.getItem('token');
    //     if (token) {
    //         navigate("/")
    //     }
    // }, [])
    const handleTogglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = async () => {
        if (!username || !password) {
            toast.error("Yêu cầu nhập đầy đủ tên tài khoản và mật khẩu");
            return;
        }
        let res = await loginApi(username, password);
        console.log(">>>check res", res);
        if (res && res.data && res.data.token) {
            loginContext(username, res.data.token);
            localStorage.setItem("role",res.data.roles)
            navigate("/")
        } else {
            if (res && res.status === 400) {
                toast.error(res.data.message);
            }
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleLogin();
        }
    };
    return (
        <div id={classes["login"]}>
            <div className={classes["wrapper"]}>
                <div className={classes["content"]}>
                    <img src={bglogin} />
                    <div className={classes["form"]}>
                        <p>Đăng nhập</p>
                        <div className={classes["signup"]}>
                            <p>Bạn chưa có tài khoản?</p>
                            <Link to="/signup">Đăng ký</Link>
                        </div>
                        <input className={classes["account"]}
                            placeholder="Tên tài khoản"
                            value={username}
                            onChange={handleUsernameChange}
                            onKeyDown={handleKeyDown}
                        />
                        <div className={classes["process-password"]}>
                            <input className={classes["password"]}
                                placeholder="Mật khẩu"
                                type={passwordVisible ? 'text' : 'password'}
                                value={password}
                                onChange={handlePasswordChange}
                                onKeyDown={handleKeyDown}
                            />
                            <div className={classes["eye"]} onClick={handleTogglePasswordVisibility}>
                                {passwordVisible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                            </div>
                        </div>
                        <button className={classes["submit"]} onClick={handleLogin}>Đăng nhập</button>
                        <div className={classes["help"]}>
                            <a href="#">Quên mật khẩu?</a>
                            <a href="#">Đăng nhập với số điện thoại</a>
                        </div>
                        <div className={classes["connect"]}>
                            <span>Bằng cách đăng ký, bạn đồng ý với Pet Paradise's</span>
                            <a href="#">Điều khoản dịch vụ</a>
                            <span>&</span>
                            <a href="#">Chính sách bảo mật</a>
                        </div>
                        <div className={classes["back"]}>
                            <DoubleLeftOutlined />
                            <Link to="/">Quay lại</Link>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
}

export default Login;