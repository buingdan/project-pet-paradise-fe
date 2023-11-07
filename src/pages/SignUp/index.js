import {Link} from "react-router-dom"
import classes from "./SignUp.module.scss"
import logo from "../../assets/images/logo.png"
import bglogin from "../../assets/images/bglogin.png"
import google from "../../assets/images/google.png"
import facebook from "../../assets/images/facebook.png"
import apple from "../../assets/images/apple.png"

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
                        <input className={classes["account"]} placeholder="Phone number/ Username/ Email" />
                        <button className={classes["next"]}>Tiếp tục</button>
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