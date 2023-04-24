import React from 'react'
import Layout from './Layout'
import { Form, Input, Button } from 'antd';

const Signin = () => {
  return (
    <Layout title="Login" subTitle=''>
      <Form>
        <Form.Item name="password" label="Password">
          <Input />
        </Form.Item>
        <Form.Item name="email" label="E-mail">
          <Input />
        </Form.Item>
        <Form.Item >
          <Button type="primary" htmlType="submit">Login</Button>
        </Form.Item>
      </Form>
    </Layout>
  )
}

export default Signin
