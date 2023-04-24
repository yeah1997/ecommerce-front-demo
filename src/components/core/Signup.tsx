import React from 'react'
import Layout from './Layout'
import { Form, Input, Button } from 'antd';

const Signup = () => {
  return (
      <Layout title="Sigin In" subTitle="">
          <Form>
              <Form.Item name="name" label="Username">
                  <Input />
              </Form.Item>
              <Form.Item name="password" label="Password">
                  <Input />
              </Form.Item>
              <Form.Item name="email" label="E-mail">
                  <Input />
              </Form.Item>
              <Form.Item >
                  <Button type="primary" htmlType="submit">Submit</Button>
              </Form.Item>
          </Form>
      </Layout>
  )
}

export default Signup
