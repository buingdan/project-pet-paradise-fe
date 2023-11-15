import React, { useState } from 'react';
import logo from "../../assets/images/logo.png"
import { Link } from "react-router-dom";
import classes from "./Admin.module.scss"
import { MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, Button, theme, Space, Table, Tag } from 'antd';
const { Header, Sider, Content } = Layout;

const { Column, ColumnGroup } = Table;
const data = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

function Admin() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const handleUserIconClick = () => {
    // if (isLoggedIn) {

    // }
    setShowUserMenu(!showUserMenu);
  };
  const handleLogoutClick = () => {
    console.log("Đăng xuất");
    setIsLoggedIn(false);
    setShowUserMenu(false);
  };
  return (
    <div id={classes["admin"]}>
      <div className={classes["wrapper"]}>
        <div className={classes["header-inner"]}>
          <div className={classes["logo"]}>
            <img src={logo} />
          </div>
          <div className={classes["icon"]}>
            <UserOutlined onClick={handleUserIconClick} />
            {showUserMenu && (
              <ul className={classes["user-menu"]}>
                <li><a href="#"><Link to="/login">Đăng nhập</Link></a></li>
                <li onClick={handleLogoutClick}><a href='#'><Link to="/signup">Đăng xuất</Link></a></li>
              </ul>
            )}
          </div>
        </div>
        <div className={classes["admin-content"]}>
          <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
              <div className="demo-logo-vertical" />
              <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={[
                  {
                    key: '1',
                    icon: <UserOutlined />,
                    label: 'nav 1',
                  },
                  {
                    key: '2',
                    icon: <VideoCameraOutlined />,
                    label: 'nav 2',
                  },
                  {
                    key: '3',
                    icon: <UploadOutlined />,
                    label: 'nav 3',
                  },
                ]}
              />
            </Sider>
            <Layout>
              <Header
                style={{
                  padding: 0,
                  background: colorBgContainer,
                }}
              >
                <Button
                  type="text"
                  icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                  onClick={() => setCollapsed(!collapsed)}
                  style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                  }}
                />
              </Header>
              <Content
                style={{
                  margin: '24px 16px',
                  padding: 24,
                  minHeight: 280,
                  background: colorBgContainer,
                }}
              >
                <Table dataSource={data}>
                  <ColumnGroup title="Name">
                    <Column title="First Name" dataIndex="firstName" key="firstName" />
                    <Column title="Last Name" dataIndex="lastName" key="lastName" />
                  </ColumnGroup>
                  <Column title="Age" dataIndex="age" key="age" />
                  <Column title="Address" dataIndex="address" key="address" />
                  <Column
                    title="Tags"
                    dataIndex="tags"
                    key="tags"
                    render={(tags) => (
                      <>
                        {tags.map((tag) => (
                          <Tag color="blue" key={tag}>
                            {tag}
                          </Tag>
                        ))}
                      </>
                    )}
                  />
                  <Column
                    title="Action"
                    key="action"
                    render={(_, record) => (
                      <Space size="middle">
                        <a>Invite {record.lastName}</a>
                        <a>Delete</a>
                      </Space>
                    )}
                  />
                </Table>
              </Content>
            </Layout>
          </Layout>
        </div>
      </div>
    </div>
  );
};
export default Admin;