import axios from "./customize-axios";

const postCreateUser = ( username, password, email, phoneNumber, fullName) =>{
    return axios.post("/account/createAccount", {username, password, email, phoneNumber, fullName})
}

const loginApi = (username, password) =>{
    return axios.post("auth/authenticate", { username, password})
}

const getAllUsers = () => {
    return axios.get("admin/account/findAll")
}

export {postCreateUser, loginApi, getAllUsers}