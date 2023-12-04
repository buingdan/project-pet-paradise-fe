import { Rate } from "antd";
import {
  ArrowRightOutlined,
  LeftOutlined,
  RightOutlined,
  UpOutlined,
} from "@ant-design/icons";
import classes from "./Home.module.scss";
import { useState, useEffect } from "react";
import { fetchProductsByCategory } from "../../services/ProductService";

function Home() {
  const [products1, setProducts1] = useState([]);
  const [products2, setProducts2] = useState([]);
  const [products3, setProducts3] = useState([]);
  const [products4, setProducts4] = useState([]);
  const [currentPage1, setCurrentPage1] = useState(0);
  const [currentPage2, setCurrentPage2] = useState(0);
  const [currentPage3, setCurrentPage3] = useState(0);
  const [currentPage4, setCurrentPage4] = useState(0);

const fetchData = async (categoryId, currentPage, setProducts) => {
    try {
      const response = await fetchProductsByCategory(categoryId, currentPage);
      setProducts(response.data.content);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData(1, currentPage1, setProducts1, setCurrentPage1);
    fetchData(2, currentPage2, setProducts2, setCurrentPage2);
    fetchData(3, currentPage3, setProducts3, setCurrentPage3);
    fetchData(4, currentPage4, setProducts4, setCurrentPage4);
  }, [currentPage1, currentPage2, currentPage3, currentPage4]);

  const handlePrevSlide = (category) => {
    switch (category) {
      case 1:
        setCurrentPage1((prevPage) => Math.max(prevPage - 1, 0));
        break;
      case 2:
        setCurrentPage2((prevPage) => Math.max(prevPage - 1, 0));
        break;
      case 3:
        setCurrentPage3((prevPage) => Math.max(prevPage - 1, 0));
        break;
      case 4:
        setCurrentPage4((prevPage) => Math.max(prevPage - 1, 0));
        break;
      default:
        break;
    }
  };

  const handleNextSlide = (category) => {
    switch (category) {
      case 1:
        setCurrentPage1((prevPage) => prevPage + 1);
        break;
      case 2:
        setCurrentPage2((prevPage) => prevPage + 1);
        break;
      case 3:
        setCurrentPage3((prevPage) => prevPage + 1);
        break;
      case 4:
        setCurrentPage4((prevPage) => prevPage + 1);
        break;
      default:
        break;
    }
  };
  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={classes["wrapper"]}>
      <button className={classes["scroll-up"]} onClick={handleScrollUp}>
        <UpOutlined />
      </button>
      <div className={classes["banner"]}>
        <p>CUNG CẤP THÚ CƯNG </p>
        <h2>GIẢM GIÁ LÊN ĐẾN 50%</h2>
        <button>
          KHÁM PHÁ NGAY <ArrowRightOutlined />
        </button>
      </div>
      <div className={classes["stuff"]}>
        <ul>
          <li className={classes["list"]}>
            <img
              src="https://matpetfamily.com/wp-content/uploads/2020/04/A8D46AD5-8553-4AC0-A09B-4ADDC5218D07.jpeg"
              alt=""
            />
            <div className={classes["list-block"]}>
              <p>Cún</p>
            </div>
          </li>
          <li className={classes["list"]}>
            <img
              src="https://matpetfamily.com/wp-content/uploads/2023/11/photo_2023-11-21_10-17-51-e1700542643648.jpg"
              alt=""
            />
            <div className={classes["list-block"]}>
              <p>Mèo</p>
            </div>
          </li>
          <li className={classes["list"]}>
            <img
              src="https://matpetfamily.com/wp-content/uploads/2020/10/kiotviet_d15c1f7486eebcf8a252f0e5330e6e77.jpg"
              alt=""
            />
            <div className={classes["list-block"]}>
              <p>Phụ kiện</p>
            </div>
          </li>
          <li className={classes["list"]}>
            <img
              src="https://matpetfamily.com/wp-content/uploads/2021/12/4c3e3ce224aaeef4b7bb.jpg"
              alt=""
            />
            <div className={classes["list-block"]}>
              <p>Thực phẩm</p>
            </div>
          </li>
        </ul>
      </div>
      <div className={classes["slider"]}>
        <div className={classes["tittle"]}>
          <p>DANH SÁCH CÚN</p>
        </div>
        <ul>
          {products1 &&
            products1.map((item) => (
              <li className={classes["card"]} alt={item.productName}>
                <img src={item[0].image} />
                <div className={classes["card-detail"]}>
                  <p>{item[0].productName}</p>
                  <Rate allowHalf defaultValue={item[0].voteAverage} />
                  <div className={classes["price"]}>
                    <p>{item[1]}</p>
                    <span>₫</span>
                  </div>
                </div>
              </li>
            ))}
        </ul>
        <button className={classes["prev-Slide"]} onClick={() => handlePrevSlide(1)}>
          <LeftOutlined />
        </button>
        <button className={classes["next-Slide"]} onClick={() => handleNextSlide(1)}>
          <RightOutlined />
        </button>
      </div>
      <div className={classes["slider"]}>
        <div className={classes["tittle"]}>
          <p>DANH SÁCH MÈO</p>
        </div>
        <ul>
          {products2 &&
            products2.map((item) => (
              <li className={classes["card"]} alt={item.productName}>
                <img src={item[0].image} />
                <div className={classes["card-detail"]}>
                  <p>{item[0].productName}</p>
                  <Rate allowHalf defaultValue={item[0].voteAverage} />
                  <div className={classes["price"]}>
                    <p>{item[1]}</p>
                    <span>₫</span>
                  </div>
                </div>
              </li>
            ))}
        </ul>
        <button className={classes["prev-Slide"]} onClick={() => handlePrevSlide(2)}>
          <LeftOutlined />
        </button>
        <button className={classes["next-Slide"]} onClick={() => handleNextSlide(2)}>
          <RightOutlined />
        </button>
      </div>
      <div className={classes["slider"]}>
        <div className={classes["tittle"]}>
          <p>PHỤ KIỆN</p>
        </div>
        <ul>
          {products3 &&
            products3.map((item) => (
              <li className={classes["card"]} alt={item.productName}>
                <img src={item[0].image} />
                <div className={classes["card-detail"]}>
                  <p>{item[0].productName}</p>
                  <Rate allowHalf defaultValue={item[0].voteAverage} />
                  <div className={classes["price"]}>
                    <p>{item[1]}</p>
                    <span>₫</span>
                  </div>
                </div>
              </li>
            ))}
        </ul>
        <button className={classes["prev-Slide"]} onClick={() => handlePrevSlide(3)}>
          <LeftOutlined />
        </button>
        <button className={classes["next-Slide"]} onClick={() => handleNextSlide(3)}>
          <RightOutlined />
        </button>
      </div>

      <div className={classes["slider"]}>
        <div className={classes["tittle"]}>
          <p>THỰC PHẨM</p>
        </div>
        <ul>
          {products4 &&
            products4.map((item) => (
              <li className={classes["card"]} alt={item.productName}>
                <img src={item[0].image} />
                <div className={classes["card-detail"]}>
                  <p>{item[0].productName}</p>
                  <Rate allowHalf defaultValue={item[0].voteAverage} />
                  <div className={classes["price"]}>
                    <p>{item[1]}</p>
                    <span>₫</span>
                  </div>
                </div>
              </li>
            ))}
        </ul>
        <button className={classes["prev-Slide"]} onClick={() => handlePrevSlide(4)}>
          <LeftOutlined />
        </button>
        <button className={classes["next-Slide"]} onClick={() => handleNextSlide(4)}>
          <RightOutlined />
        </button>
      </div>
    </div>
  );
}

export default Home;
