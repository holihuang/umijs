import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { history } from 'umi';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import style from './index.less';

export default function () {
  function handleClk() {
    history.push('/');
  }
  function onFinish(values: any) {
    console.log(values, 'finish...');
    history.push('/');
  }
  return (
    <div className={style.form}>
      <Form name="login" initialValues={{ remember: true }} onFinish={onFinish}>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'please input your password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item
            name="remember"
            rules={[
              {
                required: true,
                message: 'please check',
              },
            ]}
            valuePropName="checked"
            noStyle
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <a href="">Forgot password</a>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
