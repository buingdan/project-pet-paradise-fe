import { Rate } from 'antd';
import { ArrowRightOutlined, LeftOutlined, RightOutlined, UpOutlined } from "@ant-design/icons"
import classes from "./Home.module.scss"
import stuff1 from "../../assets/images/stuff1.png"
import stuff2 from "../../assets/images/stuff2.png"
import stuff3 from "../../assets/images/stuff3.png"
import stuff4 from "../../assets/images/stuff4.png"
import stuff5 from "../../assets/images/stuff5.png"
import stuff6 from "../../assets/images/stuff6.png"
import stuff7 from "../../assets/images/stuff7.png"
import stuff8 from "../../assets/images/stuff8.png"
import product from "../../assets/images/product.png"



function Home() {
    return (
        <div className={classes["wrapper"]}>
            <button className={classes["scroll-up"]}><UpOutlined /></button>
            <div className={classes["banner"]}>
                <p>CUNG CẤP THÚ CƯNG </p>
                <h2>GIẢM GIÁ LÊN ĐẾN 50%</h2>
                <button>KHÁM PHÁ NGAY <ArrowRightOutlined /></button>
            </div>
            <div className={classes["stuff"]}>
                <ul>
                    <li className={classes["list"]}>
                        <img src={stuff1} />
                        <div className={classes["list-block"]}>
                            <p>Hạt</p>
                        </div>
                    </li>
                    <li className={classes["list"]}>
                        <img src={stuff2} />
                        <div className={classes["list-block"]}>
                            <p>Bàn cào</p>
                        </div>
                    </li>
                    <li className={classes["list"]}>
                        <img src={stuff3} />
                        <div className={classes["list-block"]}>
                            <p>Đồ chơi</p>
                        </div>
                    </li>
                    <li className={classes["list"]}>
                        <img src={stuff4} />
                        <div className={classes["list-block"]}>
                            <p>Cát vệ sinh</p>
                        </div>
                    </li>
                    <li className={classes["list"]}>
                        <img src={stuff5} />
                        <div className={classes["list-block"]}>
                            <p>Pate</p>
                        </div>
                    </li>
                    <li className={classes["list"]}>
                        <img src={stuff6} />
                        <div className={classes["list-block"]}>
                            <p>Khay vệ sinh</p>
                        </div>
                    </li>
                    <li className={classes["list"]}>
                        <img src={stuff7} />
                        <div className={classes["list-block"]}>
                            <p>Balo</p>
                        </div>
                    </li>
                    <li className={classes["list"]}>
                        <img src={stuff8} />
                        <div className={classes["list-block"]}>
                            <p>Chuồng</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className={classes["slider"]}>
                <div className={classes["tittle"]}>
                    <p>DANH SÁCH CÚN</p>
                </div>
                <ul>
                    <li className={classes["card"]}>
                        <img src={product} />
                        <div className={classes["card-detail"]}>
                            <p>New Petkit Pura MAX</p>
                            <Rate allowHalf defaultValue={2.5} />
                            <div className={classes["price"]}>
                                <p>20000000</p>
                                <span>₫</span>
                            </div>
                        </div>
                    </li>
                    <li className={classes["card"]}>
                        <img src={product} />
                        <div className={classes["card-detail"]}>
                            <p>New Petkit Pura MAX</p>
                            <Rate allowHalf defaultValue={2.5} />
                            <div className={classes["price"]}>
                                <p>20000000</p>
                                <span>₫</span>
                            </div>
                        </div>
                    </li>
                    <li className={classes["card"]}>
                        <img src={product} />
                        <div className={classes["card-detail"]}>
                            <p>New Petkit Pura MAX</p>
                            <Rate allowHalf defaultValue={2.5} />
                            <div className={classes["price"]}>
                                <p>20000000</p>
                                <span>₫</span>
                            </div>
                        </div>
                    </li>
                    <li className={classes["card"]}>
                        <img src={product} />
                        <div className={classes["card-detail"]}>
                            <p>New Petkit Pura MAX</p>
                            <Rate allowHalf defaultValue={2.5} />
                            <div className={classes["price"]}>
                                <p>20000000</p>
                                <span>₫</span>
                            </div>
                        </div>
                    </li>
                    <li className={classes["card"]}>
                        <img src={product} />
                        <div className={classes["card-detail"]}>
                            <p>New Petkit Pura MAX</p>
                            <Rate allowHalf defaultValue={2.5} />
                            <div className={classes["price"]}>
                                <p>20000000</p>
                                <span>₫</span>
                            </div>
                        </div>
                    </li>

                </ul>
                <button className={classes["prev-Slide"]}><LeftOutlined /></button>
                <button className={classes["next-Slide"]}><RightOutlined /></button>
            </div>
            <div className={classes["slider"]}>
                <div className={classes["tittle"]}>
                    <p>DANH SÁCH MÈO</p>
                </div>
                <ul>
                    <li className={classes["card"]}>
                        <img src={product} />
                        <div className={classes["card-detail"]}>
                            <p>New Petkit Pura MAX</p>
                            <Rate allowHalf defaultValue={2.5} />
                            <div className={classes["price"]}>
                                <p>20000000</p>
                                <span>₫</span>
                            </div>
                        </div>
                    </li>
                    <li className={classes["card"]}>
                        <img src={product} />
                        <div className={classes["card-detail"]}>
                            <p>New Petkit Pura MAX</p>
                            <Rate allowHalf defaultValue={2.5} />
                            <div className={classes["price"]}>
                                <p>20000000</p>
                                <span>₫</span>
                            </div>
                        </div>
                    </li>
                    <li className={classes["card"]}>
                        <img src={product} />
                        <div className={classes["card-detail"]}>
                            <p>New Petkit Pura MAX</p>
                            <Rate allowHalf defaultValue={2.5} />
                            <div className={classes["price"]}>
                                <p>20000000</p>
                                <span>₫</span>
                            </div>
                        </div>
                    </li>
                    <li className={classes["card"]}>
                        <img src={product} />
                        <div className={classes["card-detail"]}>
                            <p>New Petkit Pura MAX</p>
                            <Rate allowHalf defaultValue={2.5} />
                            <div className={classes["price"]}>
                                <p>20000000</p>
                                <span>₫</span>
                            </div>
                        </div>
                    </li>
                    <li className={classes["card"]}>
                        <img src={product} />
                        <div className={classes["card-detail"]}>
                            <p>New Petkit Pura MAX</p>
                            <Rate allowHalf defaultValue={2.5} />
                            <div className={classes["price"]}>
                                <p>20000000</p>
                                <span>₫</span>
                            </div>
                        </div>
                    </li>

                </ul>
                <button className={classes["prev-Slide"]}><LeftOutlined /></button>
                <button className={classes["next-Slide"]}><RightOutlined /></button>
            </div>
            <div className={classes["slider"]}>
                <div className={classes["tittle"]}>
                    <p>PHỤ KIỆN</p>
                </div>
                <ul>
                    <li className={classes["card"]}>
                        <img src={product} />
                        <div className={classes["card-detail"]}>
                            <p>New Petkit Pura MAX</p>
                            <Rate allowHalf defaultValue={2.5} />
                            <div className={classes["price"]}>
                                <p>20000000</p>
                                <span>₫</span>
                            </div>
                        </div>
                    </li>
                    <li className={classes["card"]}>
                        <img src={product} />
                        <div className={classes["card-detail"]}>
                            <p>New Petkit Pura MAX</p>
                            <Rate allowHalf defaultValue={2.5} />
                            <div className={classes["price"]}>
                                <p>20000000</p>
                                <span>₫</span>
                            </div>
                        </div>
                    </li>
                    <li className={classes["card"]}>
                        <img src={product} />
                        <div className={classes["card-detail"]}>
                            <p>New Petkit Pura MAX</p>
                            <Rate allowHalf defaultValue={2.5} />
                            <div className={classes["price"]}>
                                <p>20000000</p>
                                <span>₫</span>
                            </div>
                        </div>
                    </li>
                    <li className={classes["card"]}>
                        <img src={product} />
                        <div className={classes["card-detail"]}>
                            <p>New Petkit Pura MAX</p>
                            <Rate allowHalf defaultValue={2.5} />
                            <div className={classes["price"]}>
                                <p>20000000</p>
                                <span>₫</span>
                            </div>
                        </div>
                    </li>
                    <li className={classes["card"]}>
                        <img src={product} />
                        <div className={classes["card-detail"]}>
                            <p>New Petkit Pura MAX</p>
                            <Rate allowHalf defaultValue={2.5} />
                            <div className={classes["price"]}>
                                <p>20000000</p>
                                <span>₫</span>
                            </div>
                        </div>
                    </li>
                </ul>
                <button className={classes["prev-Slide"]}><LeftOutlined /></button>
                <button className={classes["next-Slide"]}><RightOutlined /></button>
            </div>
            <div className={classes["slider"]}>
                <div className={classes["tittle"]}>
                    <p>THỰC PHẨM</p>
                </div>
                <ul>
                    <li className={classes["card"]}>
                        <img src={product} />
                        <div className={classes["card-detail"]}>
                            <p>New Petkit Pura MAX</p>
                            <Rate allowHalf defaultValue={2.5} />
                            <div className={classes["price"]}>
                                <p>20000000</p>
                                <span>₫</span>
                            </div>
                        </div>
                    </li>
                    <li className={classes["card"]}>
                        <img src={product} />
                        <div className={classes["card-detail"]}>
                            <p>New Petkit Pura MAX</p>
                            <Rate allowHalf defaultValue={2.5} />
                            <div className={classes["price"]}>
                                <p>20000000</p>
                                <span>₫</span>
                            </div>
                        </div>
                    </li>
                    <li className={classes["card"]}>
                        <img src={product} />
                        <div className={classes["card-detail"]}>
                            <p>New Petkit Pura MAX</p>
                            <Rate allowHalf defaultValue={2.5} />
                            <div className={classes["price"]}>
                                <p>20000000</p>
                                <span>₫</span>
                            </div>
                        </div>
                    </li>
                    <li className={classes["card"]}>
                        <img src={product} />
                        <div className={classes["card-detail"]}>
                            <p>New Petkit Pura MAX</p>
                            <Rate allowHalf defaultValue={2.5} />
                            <div className={classes["price"]}>
                                <p>20000000</p>
                                <span>₫</span>
                            </div>
                        </div>
                    </li>
                    <li className={classes["card"]}>
                        <img src={product} />
                        <div className={classes["card-detail"]}>
                            <p>New Petkit Pura MAX</p>
                            <Rate allowHalf defaultValue={2.5} />
                            <div className={classes["price"]}>
                                <p>20000000</p>
                                <span>₫</span>
                            </div>
                        </div>
                    </li>
                </ul>
                <button className={classes["prev-Slide"]}><LeftOutlined /></button>
                <button className={classes["next-Slide"]}><RightOutlined /></button>
            </div>
        </div>
    );
}

export default Home;