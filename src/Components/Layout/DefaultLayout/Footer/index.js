import { FacebookOutlined, InstagramOutlined, YoutubeOutlined, TwitterOutlined } from "@ant-design/icons"
import logo from "../../../../assets/images/logo.png"
import appstore from "../../../../assets/images/appstore.png"
import classes from "./Footer.module.scss"
function Footer() {
    return (
        <div id={classes["footer"]}>
            <div className={classes["content"]}>
                <div className={classes["infor"]}>
                    <div className={classes["logo"]} >
                        <img src={logo} />
                        <p>We Have Everything For Cat Here!</p>
                    </div>
                    <div className={classes["subcribe"]} >
                        <h3>Subscribe To Our Newsletter</h3>
                        <p>New blogs about cats every week!</p>
                        <div className={classes["search"]}>
                            <input placeholder="YOUR EMAIL ADDRESS" />
                            <button>SUBCRIBE</button>
                        </div>
                    </div>
                </div>
                <div className={classes["intro"]} >
                    <div className={classes["order"]}>
                        <h3>Where's my order?</h3>
                        <button>TRACK ORDER</button>
                        <p>Please note, it may take longer
                            than usual to fulfill orders due
                            to the impacts of COVID-19.</p>
                    </div>
                    <div className={classes["about-us"]}>
                        <h3>Our Company</h3>
                        <p>About us</p>
                        <p>Careers</p>
                        <p>Contact</p>
                        <p>Store locations</p>
                    </div>
                </div>
                <div className={classes["social"]}>
                    <div className={classes["shipping"]}>
                        <h3>Shipping</h3>
                        <p>About Free Shipping</p>
                        <p>Shipping Information</p>
                    </div>
                    <div className={classes["social-media"]}>
                        <h3>Social Media</h3>
                        <div className={classes["icon"]}>
                            <FacebookOutlined />
                            <InstagramOutlined />
                            <YoutubeOutlined />
                            <TwitterOutlined />
                        </div>
                        <p>Show us your cat with:</p>
                        <p>#petparadiseshop</p>
                        <p>#thepetparadiseshop</p>
                    </div>
                </div>
                <div className={classes["outro"]}>
                    <div className={classes["shopping-app"]}>
                        <h3>Shopping App</h3>
                        <p>Try our View in Your Room
                            feature, manage registries
                            and save payment info.
                        </p>
                        <img src={appstore} />
                    </div>
                    <div className={classes["policies"]}>
                        <h3>Shipping Policy</h3>
                        <p>Refund Policy</p>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                    </div>
                </div>
            </div>
            <div className={classes["coppyright"]}>
                <p>Copyright © 2022 The Pet Paradise Shop.
                    All rights reserved</p>
            </div>
        </div>
    );
}

export default Footer;