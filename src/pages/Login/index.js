import classes from "./Login.module.scss"
import logo from "../../assets/images/logo.png"
import bglogin from "../../assets/images/bglogin.png"
import google from "../../assets/images/google.png"
import facebook from "../../assets/images/facebook.png"
import apple from "../../assets/images/apple.png"

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
                            <p>Tin về Pet Paradise Shop</p>
                            <a href="#">Đăng ký</a>
                        </div>
                        <input className={classes["account"]} placeholder="Phone number/ Username/ Email" />
                        <input className={classes["password"]} placeholder="Password" />
                        <button className={classes["submit"]}>Đăng nhập</button>
                        <div className={classes["help"]}>
                            <a href="#">Quên mật khẩu?</a>
                            <a href="#">Đăng nhập với số điện thoại</a>
                        </div>
                        <div className={classes["line"]} >
                            <p>OR</p>
                        </div>
                        <button className={classes["google"]}>
                            <img src={google} />
                            <p>Tiếp tục với Google</p>
                        </button>
                        <button className={classes["facebook"]}>
                            <img src={facebook} />
                            <p>Tiếp tục với Facebook</p>
                        </button>
                        <button className={classes["apple"]}>
                            <img src={apple} />
                            <p>Tiếp tục với Apple</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;