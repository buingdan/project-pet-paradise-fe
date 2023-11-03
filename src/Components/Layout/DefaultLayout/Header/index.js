import { SearchOutlined, UserOutlined, ShoppingCartOutlined, DownOutlined } from "@ant-design/icons"
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
                        <input placeholder="Tìm kiếm..." />
                        <button>TÌM KIẾM</button>
                    </div>
                    <div className={classes["icon"]}>
                        <UserOutlined />
                        <ShoppingCartOutlined />
                    </div>
                </div>
                <div className={classes["header-menu"]}>
                    <ul>
                        <li><a href="#">TRANG CHỦ</a></li>
                        <li>
                            <a href="#">DANH MỤC CÚN <DownOutlined /></a>
                            <ul className={classes["submenu-dogs"]}>
                                    <li><a href="#">CHÓ ALASKA MALAMUTE</a></li>
                                    <li><a href="#">CHÓ BẮC KINH</a></li>
                                    <li><a href="#">CHÓ BEAGLE</a></li>
                                    <li><a href="#">CHÓ BICHON</a></li>
                                    <li><a href="#">CHÓ BULL PHÁP</a></li>
                                    <li><a href="#">CHÓ CORGI</a></li>
                                    <li><a href="#">CHÓ GOLDEN RETRIEVER</a></li>
                                    <li><a href="#">CHÓ HUSKY SIBERIAN</a></li>
                                    <li><a href="#">CHÓ LẠP XƯỞNG</a></li>
                                    <li><a href="#">CHÓ PHỐC SÓC - POMERANIAN</a></li>
                                    <li><a href="#">CHÓ POODLE</a></li>
                                    <li><a href="#">CHÓ PUG</a></li>
                                    <li><a href="#">CHÓ SAMOYED</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">DANH MỤC MÈO <DownOutlined /></a>
                            <ul className={classes["submenu-cats"]}>
                                <li><a href="#">MÈO ANH (DÀI + NGẮN)</a></li>
                                <li><a href="#">MÈO CHÂN NGẮN</a></li>
                                <li><a href="#">MÈO TAI CỤP</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">PHỤ KIỆN <DownOutlined /></a>
                            <ul className={classes["submenu-accessories"]}>
                                <li><a href="#">ÁO</a></li>
                                <li><a href="#">BÀN CÀO</a></li>
                                <li><a href="#">BÁT</a></li>
                                <li><a href="#">DÂY DẮT</a></li>
                                <li><a href="#">ĐỒ CHƠI</a></li>
                                <li><a href="#">KHAY VỆ SINH</a></li>
                                <li><a href="#">VÒNG CỔ</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">THỰC PHẨM <DownOutlined /></a>
                            <ul className={classes["submenu-foods"]}>
                                <li><a href="#">BÁNH THƯỞNG</a></li>
                                <li><a href="#">HẠT</a></li>
                                <li><a href="#">PATE</a></li>
                                <li><a href="#">SỮA</a></li>
                                <li><a href="#">THỰC PHẨM CHỨC NĂNG</a></li>
                            </ul>
                        </li>
                        <li><a href="#">BALO</a></li>
                        <li><a href="#">CÁT VỆ SINH</a></li>
                        <li><a href="#">CHUỒNG</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;

