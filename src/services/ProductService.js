import axios from "./customize-axios";

const fetchAllProducts = () =>{
    return axios.get("product/findAllByPageble?page=0&size=5")
}

const fetchProductsByCategory = (categoryId, page = 0, size = 5) => {
    return axios.get(`admin/product/findAllCateByPageble?page=${page}&size=${size}&categoryId=${categoryId}`);
  };

export {fetchAllProducts, fetchProductsByCategory};