import { Col, Menu, Row } from "antd"
import React from "react"
import { Link } from "react-router-dom"
import Layout from "../core/Layout"
import {
    ShoppingCartOutlined,
    UserOutlined,
    OrderedListOutlined
} from "@ant-design/icons"

import { Typography, Descriptions } from "antd"
import { isAuth } from "../../helpers/auth"
import { Jwt } from "../../store/models/auth"

const { Title } = Typography

const AdminDashboard = () => {
    const {
        user: { name, email }
    } = isAuth() as Jwt

    const adminLinks = () => (
        <>
            <Title level={5}>Manager Link</Title>
            <Menu>
                <Menu.Item>
                    <ShoppingCartOutlined />
                    <Link to="/create/category">Add Sort</Link>
                </Menu.Item>
                <Menu.Item>
                    <UserOutlined />
                    <Link to="/create/product">Add Production</Link>
                </Menu.Item>
                <Menu.Item>
                    <OrderedListOutlined />
                    <Link to="/admin/orders">List</Link>
                </Menu.Item>
            </Menu>
        </>
    )

    const adminInfo = () => (
        <Descriptions title="管理员信息" bordered>
            <Descriptions.Item label="昵称">{name}</Descriptions.Item>
            <Descriptions.Item label="邮件">{email}</Descriptions.Item>
            <Descriptions.Item label="角色">Manager</Descriptions.Item>
        </Descriptions>
    )

    return (
        <Layout title="管理员 Dashboard" subTitle="">
            <Row>
                <Col span="4">{adminLinks()}</Col>
                <Col span="20">{adminInfo()}</Col>
            </Row>
        </Layout>
    )
}

export default AdminDashboard
