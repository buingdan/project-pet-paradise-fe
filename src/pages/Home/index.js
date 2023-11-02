import { ArrowRightOutlined } from "@ant-design/icons"
import classes from "./Home.module.scss"
import stuff1 from "../../assets/images/stuff1.png"
import stuff2 from "../../assets/images/stuff2.png"
import stuff3 from "../../assets/images/stuff3.png"
import stuff4 from "../../assets/images/stuff4.png"
import stuff5 from "../../assets/images/stuff5.png"
import stuff6 from "../../assets/images/stuff6.png"
import stuff7 from "../../assets/images/stuff7.png"
import stuff8 from "../../assets/images/stuff8.png"


function Home() {
    return (
        <div className={classes["wrapper"]}>
            <div className={classes["banner"]}>
                <p>CAT SUPPLIES </p>
                <h2>SALE UP TO 50%</h2>
                <button>Explore Now <ArrowRightOutlined /></button>
            </div>
            <div className={classes["stuff"]}>
                <ul>
                    <li className={classes["list"]}>
                        <img src={stuff1} />
                        <div className={classes["list-block"]}>
                            <p>Cat Food</p>
                        </div>
                    </li>
                    <li className={classes["list"]}>
                        <img src={stuff2} />
                        <div className={classes["list-block"]}>
                            <p>Cat Accessories</p>
                        </div>
                    </li>
                    <li className={classes["list"]}>
                        <img src={stuff3} />
                        <div className={classes["list-block"]}>
                            <p>Cat Furniture</p>
                        </div>
                    </li>
                    <li className={classes["list"]}>
                        <img src={stuff4} />
                        <div className={classes["list-block"]}>
                            <p>Cat Proof Home</p>
                        </div>
                    </li>
                    <li className={classes["list"]}>
                        <img src={stuff5} />
                        <div className={classes["list-block"]}>
                            <p>Cat Feeder</p>
                        </div>
                    </li>
                    <li className={classes["list"]}>
                        <img src={stuff6} />
                        <div className={classes["list-block"]}>
                            <p>Cat Little Boxes</p>
                        </div>
                    </li>
                    <li className={classes["list"]}>
                        <img src={stuff7} />
                        <div className={classes["list-block"]}>
                            <p>Cat Grooming</p>
                        </div>
                    </li>
                    <li className={classes["list"]}>
                        <img src={stuff8} />
                        <div className={classes["list-block"]}>
                            <p>Cat Houses</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className={classes["slider"]}>
                <div className={classes["tittle"]}>
                    <p>Deals Of The Month</p>
                </div>
                <ul>
                    <li className={classes["card"]}></li>
                    <li className={classes["card"]}></li>
                    <li className={classes["card"]}></li>
                    <li className={classes["card"]}></li>
                    <li className={classes["card"]}></li>

                </ul>
            </div>
            <div className={classes["arivals"]}>
                <div className={classes["tittle"]}>
                    <p>New Arrivals</p>
                </div>
                <ul>
                    <li className={classes["card"]}></li>
                    <li className={classes["card"]}></li>
                    <li className={classes["card"]}></li>
                    <li className={classes["card"]}></li>
                    <li className={classes["card"]}></li>

                </ul>
            </div>
            <div className={classes["best-selling"]}>
                <div className={classes["tittle"]}>
                    <p>Best-selling</p>
                </div>
                <ul>
                    <li className={classes["card"]}></li>
                    <li className={classes["card"]}></li>
                    <li className={classes["card"]}></li>
                    <li className={classes["card"]}></li>
                    <li className={classes["card"]}></li>

                </ul>
            </div>
        </div>
    );
}

export default Home;