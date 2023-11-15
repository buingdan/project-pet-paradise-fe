import { Menu, Rate, Pagination, Select } from 'antd';
import product from "../../assets/images/product.png"
import classes from "./ProductPage.module.scss"
function getItem(label, key, children) {
    return {
        key,
        children,
        label,
    };
}
function ProductPage() {
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
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    return (
        <div id={classes["productpage"]}>
            <div className={classes["wrapper"]}>
                <div className={classes["menu"]}>
                    <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        items={items}
                    />
                </div>
                <div className={classes["product"]}>
                    <div className={classes["sort"]}>
                        <span>Sắp xếp: </span>
                        <Select
                            defaultValue="Sắp xếp"
                            onChange={handleChange}
                            options={[
                                {
                                    label: 'Default',
                                    value: 'jack',
                                },
                                {
                                    label: 'Sắp Xếp Theo Giá: Cao đến thấp',
                                    value: 'jack',
                                },
                                {
                                    label: 'Sắp Xếp Theo Giá: Thấp đến cao',
                                    value: 'lucy',
                                },
                            ]}
                        />
                    </div>
                    <div className={classes["detail"]}>
                        <div className={classes["card-content"]}>
                            <img src={product} />
                            <div className={classes["card-detail"]}>
                                <p>New Petkit Pura MAX</p>
                                <Rate allowHalf defaultValue={2.5} />
                                <div className={classes["price"]}>
                                    <p>20.000.000</p>
                                    <span>₫</span>
                                </div>
                            </div>
                        </div>
                        <div className={classes["card-content"]}>
                            <img src={product} />
                            <div className={classes["card-detail"]}>
                                <p>New Petkit Pura MAX</p>
                                <Rate allowHalf defaultValue={2.5} />
                                <div className={classes["price"]}>
                                    <p>20.000.000</p>
                                    <span>₫</span>
                                </div>
                            </div>
                        </div>
                        <div className={classes["card-content"]}>
                            <img src={product} />
                            <div className={classes["card-detail"]}>
                                <p>New Petkit Pura MAX</p>
                                <Rate allowHalf defaultValue={2.5} />
                                <div className={classes["price"]}>
                                    <p>20.000.000</p>
                                    <span>₫</span>
                                </div>
                            </div>
                        </div>
                        <div className={classes["card-content"]}>
                            <img src={product} />
                            <div className={classes["card-detail"]}>
                                <p>New Petkit Pura MAX</p>
                                <Rate allowHalf defaultValue={2.5} />
                                <div className={classes["price"]}>
                                    <p>20.000.000</p>
                                    <span>₫</span>
                                </div>
                            </div>
                        </div>
                        <div className={classes["card-content"]}>
                            <img src={product} />
                            <div className={classes["card-detail"]}>
                                <p>New Petkit Pura MAX</p>
                                <Rate allowHalf defaultValue={2.5} />
                                <div className={classes["price"]}>
                                    <p>20.000.000</p>
                                    <span>₫</span>
                                </div>
                            </div>
                        </div>
                        <div className={classes["card-content"]}>
                            <img src={product} />
                            <div className={classes["card-detail"]}>
                                <p>New Petkit Pura MAX</p>
                                <Rate allowHalf defaultValue={2.5} />
                                <div className={classes["price"]}>
                                    <p>20.000.000</p>
                                    <span>₫</span>
                                </div>
                            </div>
                        </div>
                        <div className={classes["card-content"]}>
                            <img src={product} />
                            <div className={classes["card-detail"]}>
                                <p>New Petkit Pura MAX</p>
                                <Rate allowHalf defaultValue={2.5} />
                                <div className={classes["price"]}>
                                    <p>20.000.000</p>
                                    <span>₫</span>
                                </div>
                            </div>
                        </div>
                        <div className={classes["card-content"]}>
                            <img src={product} />
                            <div className={classes["card-detail"]}>
                                <p>New Petkit Pura MAX</p>
                                <Rate allowHalf defaultValue={2.5} />
                                <div className={classes["price"]}>
                                    <p>20.000.000</p>
                                    <span>₫</span>
                                </div>
                            </div>
                        </div>
                        <div className={classes["card-content"]}>
                            <img src={product} />
                            <div className={classes["card-detail"]}>
                                <p>New Petkit Pura MAX</p>
                                <Rate allowHalf defaultValue={2.5} />
                                <div className={classes["price"]}>
                                    <p>20.000.000</p>
                                    <span>₫</span>
                                </div>
                            </div>
                        </div>
                        <div className={classes["card-content"]}>
                            <img src={product} />
                            <div className={classes["card-detail"]}>
                                <p>New Petkit Pura MAX</p>
                                <Rate allowHalf defaultValue={2.5} />
                                <div className={classes["price"]}>
                                    <p>20.000.000</p>
                                    <span>₫</span>
                                </div>
                            </div>
                        </div>
                        <div className={classes["card-content"]}>
                            <img src={product} />
                            <div className={classes["card-detail"]}>
                                <p>New Petkit Pura MAX</p>
                                <Rate allowHalf defaultValue={2.5} />
                                <div className={classes["price"]}>
                                    <p>20.000.000</p>
                                    <span>₫</span>
                                </div>
                            </div>
                        </div>
                        <div className={classes["card-content"]}>
                            <img src={product} />
                            <div className={classes["card-detail"]}>
                                <p>New Petkit Pura MAX</p>
                                <Rate allowHalf defaultValue={2.5} />
                                <div className={classes["price"]}>
                                    <p>20.000.000</p>
                                    <span>₫</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Pagination defaultCurrent={1} total={50} />
                </div>

            </div>
        </div>
    );
}

export default ProductPage;