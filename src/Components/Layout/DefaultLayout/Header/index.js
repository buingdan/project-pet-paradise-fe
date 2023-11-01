import { SearchOutlined, UserOutlined, ShoppingCartOutlined } from "@ant-design/icons"
import classes from "./Header.module.scss"
import logo from "../../../../assets/images/logo.png"
function Header() {
    return (
        <div id={classes["header"]}>
            <div className={classes["wrapper"]}>
                <div className={classes["header-inner"]}>
                    <div className={classes["logo"]}>
                        <img src={logo} />
                    </div>
                    <div className={classes["search"]}>
                        <SearchOutlined />
                        <input placeholder="What can we help you find?" />
                        <button>SEARCH</button>
                    </div>
                    <div className={classes["icon"]}>
                        <UserOutlined />
                        <ShoppingCartOutlined />
                    </div>
                </div>
                <div className={classes["header-menu"]}>
                    <ul>
                        <li><a href="#">CAT ACCESSORIES</a></li>
                        <li><a href="#">CAT FOOD</a></li>
                        <li><a href="#">CAT FURNITURE</a></li>
                        <li><a href="#">CAT PROOF HOME</a></li>
                        <li><a href="#">CAT FEEDERS</a></li>
                        <li><a href="#">CAT LITTLE BOXES</a></li>
                        <li><a href="#">CAT HOUSES</a></li>
                        <li><a href="#">BLOGS</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;