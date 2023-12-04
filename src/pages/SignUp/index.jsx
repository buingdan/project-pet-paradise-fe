import { useState } from "react"
import { Link } from "react-router-dom"
import classes from "./SignUp.module.scss"
import bglogin from "../../assets/images/bglogin.png"
import { postCreateUser } from "../../services/UserService"
import { ToastContainer, toast } from 'react-toastify';
import {DoubleLeftOutlined} from "@ant-design/icons"


function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [fullName, setFullName] = useState("");
    const handleSaveUser = async () => {
        let res = await postCreateUser(username, password, email, phoneNumber, fullName);
        console.log(">>>checkres", res.data);
        if (res && res.data) {
            toast.success("Đăng ký tài khoản thành công!")
        } else {
            toast.error("Đăng ký thất bại!")
        }
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSaveUser();
        }
    };
    return (
        <div id={classes["signup"]}>
            <div className={classes["wrapper"]}>
                <div className={classes["content"]}>
                    <img src={bglogin} />
                    <div className={classes["form"]}>
                        <p>Đăng ký</p>
                        <div className={classes["signin"]} >
                            <p>Tin về Pet Paradise Shop?</p>
                            <Link to="/login">Đăng nhập</Link>
                        </div>
                        <div className={classes["create-name"]}>
                            <input className={classes["first-name"]}
                                placeholder="Tên đăng nhập"
                                onChange={(event) => setUsername(event.target.value)}
                                onKeyDown={handleKeyDown}
                            />
                            <input className={classes["last-name"]}
                                placeholder="Tên đầy đủ"
                                onChange={(event) => setFullName(event.target.value)}
                                onKeyDown={handleKeyDown}
                            />
                        </div>
                        <input className={classes["email"]}
                            placeholder="Địa chỉ email"
                            onChange={(event) => setEmail(event.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                        <input className={classes["phone"]}
                            placeholder="Số điện thoại"
                            onChange={(event) => setPhoneNumber(event.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                        <input className={classes["password"]}
                            placeholder="Mật khẩu"
                            type="password"
                            onChange={(event) => setPassword(event.target.value)}
                            onKeyDown={handleKeyDown}
                        />

                        <button className={classes["create-acc"]} onClick={handleSaveUser}>Tạo tài khoản</button>
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

export default SignUp;