import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { SearchOutlined, UserOutlined, ShoppingCartOutlined, DownOutlined } from "@ant-design/icons"
import classes from "./Header.module.scss"
import { ToastContainer, toast } from 'react-toastify';
import logo from "../../../../assets/images/logo.png"
import { UserContext } from "../../../../context/UserContext"

function Header() {
    const { logout, user } = useContext(UserContext);
    const navigate = useNavigate();
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [hideMenu, setHideMenu] = useState(false);

    const handleMouseEnter = () => {
        setShowUserMenu(true);
      };
    
      const handleMouseLeave = () => {
        setShowUserMenu(false);
      };

    const handleLogoutClick = () => {
        logout();
        navigate("/");
        toast.success("Đăng xuất thành công!")
    };

    useEffect(() => {
        if (window.location.pathname === "/product") {
            setHideMenu(true)
        }
    }, [])

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
                    <div
                        className={classes["icon"]}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                    >
                        {/* {user && user.username && <span>{user.username}</span>} */}
                        <UserOutlined />
                        {showUserMenu && (
                            <ul className={classes["user-menu"]} style={{ display: showUserMenu ? 'block' : 'none' }}>
                                {user && user.auth === true
                                    ? <li><Link to="/" onClick={handleLogoutClick}>Đăng xuất</Link></li>
                                    : <li><Link to="/login">Đăng nhập</Link></li>
                                }
                            </ul>
                        )}
                        <ShoppingCartOutlined />
                    </div>
                </div>
                {!hideMenu &&
                    <div className={classes["header-menu"]}>
                        <ul>
                            <li><a href="#">TRANG CHỦ</a></li>
                            <li>
                                <a href="#">DANH MỤC CÚN <DownOutlined /></a>
                                <ul className={classes["submenu-dogs"]}>
                                    <li><Link to="/product">CHÓ ALASKA MALAMUTE</Link></li>
                                    <li><Link to="/product">CHÓ BẮC KINH</Link></li>
                                    <li><Link to="/product">CHÓ BEAGLE</Link></li>
                                    <li><Link to="/product">CHÓ BICHON</Link></li>
                                    <li><Link to="/product">CHÓ BULL PHÁP</Link></li>
                                    <li><Link to="/product">CHÓ CORGI</Link></li>
                                    <li><Link to="/product">CHÓ GOLDEN RETRIEVER</Link></li>
                                    <li><Link to="/product">CHÓ HUSKY SIBERIAN</Link></li>
                                    <li><Link to="/product">CHÓ LẠP XƯỞNG</Link></li>
                                    <li><Link to="/product">CHÓ PHỐC SÓC - POMERANIAN</Link></li>
                                    <li><Link to="/product">CHÓ POODLE</Link></li>
                                    <li><Link to="/product">CHÓ PUG</Link></li>
                                    <li><Link to="/product">CHÓ SAMOYED</Link></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">DANH MỤC MÈO <DownOutlined /></a>
                                <ul className={classes["submenu-cats"]}>
                                    <li><Link to="/product">MÈO ANH (DÀI + NGẮN)</Link></li>
                                    <li><Link to="/product">MÈO CHÂN NGẮN</Link></li>
                                    <li><Link to="/product">MÈO TAI CỤP</Link></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">PHỤ KIỆN <DownOutlined /></a>
                                <ul className={classes["submenu-accessories"]}>
                                    <li><Link to="/product">ÁO</Link></li>
                                    <li><Link to="/product">BÀN CÀO</Link></li>
                                    <li><Link to="/product">BÁT</Link></li>
                                    <li><Link to="/product">DÂY DẮT</Link></li>
                                    <li><Link to="/product">ĐỒ CHƠI</Link></li>
                                    <li><Link to="/product">KHAY VỆ SINH</Link></li>
                                    <li><Link to="/product">VÒNG CỔ</Link></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">THỰC PHẨM <DownOutlined /></a>
                                <ul className={classes["submenu-foods"]}>
                                    <li><Link to="/product">BÁNH THƯỞNG</Link></li>
                                    <li><Link to="/product">HẠT</Link></li>
                                    <li><Link to="/product">PATE</Link></li>
                                    <li><Link to="/product">SỮA</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                }
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

export default Header;

