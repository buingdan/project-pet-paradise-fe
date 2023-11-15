import { Link } from 'react-router-dom';
import classes from "./Login.module.scss"
import logo from "../../assets/images/logo.png"
import bglogin from "../../assets/images/bglogin.png"

function Login() {
    return (
        <div id={classes["login"]}>
            <div className={classes["wrapper"]}>
                <div className={classes["nav"]}>
                    <img src={logo} />
                    <p>Trợ giúp?</p>
                </div>
                <div className={classes["content"]}>
                    <img src={bglogin} />
                    <div className={classes["form"]}>
                        <p>Đăng nhập</p>
                        <div className={classes["signup"]}>
                            <p>Bạn chưa có tài khoản?</p>
                            <a href="#" ><Link to="/signup">Đăng ký</Link></a>
                        </div>
                        <input className={classes["account"]} placeholder="Số điện thoại/ Email" />
                        <input className={classes["password"]} placeholder="Mật khẩu" />
                        <button className={classes["submit"]}>Đăng nhập</button>
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;