import { Link } from "react-router-dom"
import classes from "./SignUp.module.scss"
import logo from "../../assets/images/logo.png"
import bglogin from "../../assets/images/bglogin.png"

function SignUp() {
    return (
        <div id={classes["signup"]}>
            <div className={classes["wrapper"]}>
                <div className={classes["nav"]}>
                    <img src={logo} />
                    <p>Trợ giúp?</p>
                </div>
                <div className={classes["content"]}>
                    <img src={bglogin} />
                    <div className={classes["form"]}>
                        <p>Đăng ký</p>
                        <div className={classes["signin"]}>
                            <p>Tin về Pet Paradise Shop?</p>
                            <a href="#"><Link to="/login">Đăng nhập</Link></a>
                        </div>
                        <div className={classes["create-name"]}>
                            <input className={classes["first-name"]} placeholder="Họ" />
                            <input className={classes["last-name"]} placeholder="Tên" />
                        </div>
                        <input className={classes["email"]} placeholder="Địa chỉ email" />
                        <input className={classes["phone"]} placeholder="Số điện thoại" />
                        <div className={classes["create-password"]}>
                            <input className={classes["password"]} placeholder="Mật khẩu" />
                            <input className={classes["password-auth"]} placeholder="Xác nhận lại mật khẩu" />
                        </div>
                        <button className={classes["create-acc"]}>Tạo tài khoản</button>
                        <div className={classes["connect"]}>
                            <span>Bằng cách đăng ký, bạn đồng ý với Pet Paradise's</span>
                            <a href="#">Điều khoản dịch vụ</a>
                            <span>&</span>
                            <a href="#">Chính sách bảo mật</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;