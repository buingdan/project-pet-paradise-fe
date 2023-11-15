import classes from "./Cart.module.scss"
import product from "../../assets/images/product.png"
import { Menu, InputNumber  } from "antd"
import {RightOutlined } from "@ant-design/icons"
function getItem(label, key, children) {
    return {
        key,
        children,
        label,
    };
}
function Cart() {
    const items = [
        getItem('DANH MỤC CÚN', 'sub1', [
            getItem('CHÓ ALASKA MALAMUTE', '1'),
            getItem('CHÓ BẮC KINH', '2'),
            getItem('CHÓ BEAGLE', '3'),
            getItem('CHÓ BICHON', '4'),
            getItem('CHÓ BULL PHÁP', '5'),
            getItem('CHÓ CORGI', '6'),
            getItem('CHÓ GOLDEN RETRIEVER', '7'),
            getItem('CHÓ HUSKY SIBERIAN', '8'),
            getItem('CHÓ LẠP XƯỞNG', '9'),
            getItem('CHÓ PHỐC SÓC - POMERANIAN', '10'),
            getItem('CHÓ POODLE', '11'),
            getItem('CHÓ PUG', '12'),
            getItem('CHÓ SAMOYED', '13'),
        ]),
        getItem('DANH MỤC MÈO', 'sub2', [
            getItem('MÈO ANH (DÀI + NGẮN)', '14'),
            getItem('MÈO CHÂN NGẮN', '15'),
            getItem('MÈO TAI CỤP', '16'),
        ]),
        getItem('PHỤ KIỆN', 'sub3', [
            getItem('ÁO', '17'),
            getItem('BÀN CÀO', '18'),
            getItem('BÁT', '19'),
            getItem('DÂY DẮT', '20'),
            getItem('ĐỒ CHƠI', '21'),
            getItem('KHAY VỆ SINH', '22'),
            getItem('VÒNG CỔ', '23'),
        ]),
        getItem('THỰC PHẨM', 'sub4', [
            getItem('BÁNH THƯỞNG', '24'),
            getItem('HẠT', '25'),
            getItem('PATE', '26'),
            getItem('SỮA', '27'),
            getItem('THỰC PHẨM CHỨC NĂNG', '28'),
        ]),
        getItem('BALO', '29'),
        getItem('CÁT VỆ SINH', '30'),
        getItem('CHUỒNG', '31'),
    ]
    return (
        <div id={classes["cart"]}>
            <div className={classes["wrapper"]}>
                <div className={classes["menu"]}>
                    <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        items={items}
                    />
                </div>
                <div className={classes["cart-detail"]}>
                    <div className={classes["img-product"]}>
                        <img src={product} />
                    </div>
                    <div className={classes["infor-product"]}>
                        <h1>Alaska Nâu Đỏ Béo Ú</h1>
                        <div className={classes["price"]}>
                            <p>20.000.000</p>
                            <span>₫</span>
                        </div>
                        <div className={classes["quantity"]}>
                            <span>Số lượng:</span>
                            <InputNumber min={1} max={10} defaultValue={3} />
                            <button>MUA NGAY <RightOutlined /></button>
                        </div>
                        <div className={classes["describe"]}>
                            <h4>Mã đơn hàng:</h4>
                            <h4>Tình trạng:</h4>
                            <h4>Danh mục:</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;