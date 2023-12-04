import {Table } from "antd";
import "antd/dist/antd.css";
import { useState, useEffect } from "react";
import {getAllUsers} from "../../../services/UserService"
function TableUser (){
    const {dataSource, setDataSource} = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(null);
    const [pageSize, setPageSize] = useState(null);

  
    useEffect(() => {
      setLoading(true);
      const fetchData = async () => {
        try {
          const response = await getAllUsers();
          setDataSource(response.data);
          console.log(">>>check",response);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }, []); 

    if (error) {
        return <div>Error: {error.message}</div>;
      }
  
    const columns = [
        {
            key: "1",
            title: "STT",
            dataIndex: "id"
        },
        {
            key: "2",
            title: "Tên đăng nhập",
            dataIndex: "username"
        },
        {
            key: "3",
            title: "Tên đầy đủ",
            dataIndex: "fullName"
        },
        {
            key: "4",
            title: "Email",
            dataIndex: "email"
        },
        {
            key: "5",
            title: "Phân quyền",
            dataIndex: "role",
            render:(role)=>{
                return <p>{role?"User" : "Admin"}</p>
            }
        },
        {
            key: "6",
            title: "Trạng thái",
            dataIndex: "isActive",
            render:(isActive)=>{
                return <p>{isActive?"Đang hoạt động" : "Không hoạt động"}</p>
            }
        },
        {
            key: "7",
            title: "Số điện thoại",
            dataIndex: "phoneNumber"
        },
    ]
    return (
        <Table
        loading={loading}
        columns={columns}
        dataSource={dataSource}
        pagination={{
            current: page,
            pageSize: pageSize,
            onChange:(page, pageSize)=>{
                setPage(page)
                setPageSize(pageSize)
            }
        }}
        >
        </Table>
    )
}
export default TableUser
