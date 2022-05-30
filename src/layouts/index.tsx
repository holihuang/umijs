import React, { useEffect, useState } from 'react';
import { Layout, Menu, Breadcrumb, ConfigProvider } from 'antd';
import {
  // MenuFoldOutlined,
  // MenuUnfoldOutlined,
  // UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Link, history } from 'umi';
import zhCN from 'antd/lib/locale/zh_CN';
import style from './index.less';

const { Header, Content, Footer, Sider } = Layout;

interface Props {
  children: any;
}

export default function (props: Props) {
  console.log(props);
  useEffect(() => {
    // history.push('/list')
  }, []);

  const [collapsed, setCollapsed] = useState(false);

  function handleCollapsed() {
    setCollapsed(!collapsed);
  }

  function handleJump(opt: any) {
    const { key } = opt || {};
    history.push(`/${key}`);
    return;
  }

  // const collapsedProps = {
  //     className: style.trigger,
  //     onClick: handleCollapsed,
  // }

  function getItem(label: string, key: string, icon: any, children: any) {
    return {
      key,
      icon,
      children,
      label,
    };
  }

  const items: any = [
    getItem('User', 'user', <UserOutlined />, [
      getItem('Tom', 'user/tom', <VideoCameraOutlined />, [
        getItem('One', 'user/tom/one', null, null),
        getItem('two', 'user/tom/two', null, null),
      ]),
      getItem('Bill', 'user/bill', null, null),
      getItem('Alex', 'user/alex', null, null),
    ]),
    getItem('List', 'list', <UploadOutlined />, null),
    getItem('Team', 'team', <TeamOutlined />, null),
  ];

  return (
    // <div className={style.wrapper}>
    //     <div className={style.head}>head</div>
    //     <div className={style.content}>
    //         <div className={style.side}>
    //             <Link to="list" className={style.link}>list</Link>
    //             <Link to="detail" className={style.link}>detail</Link>
    //         </div>
    //         <div>{props.children}</div>
    //     </div>
    // </div>
    // <Layout className={style.layout}>
    //     <Sider trigger={null} collapsible collapsed={collapsed} onCollapse={handleCollapsed}>
    //         <div className={style.logo} />
    //         <Menu theme='dark' onSelect={handleJump} defaultSelectedKeys={['detail']} mode="inline" items={[
    //             {
    //                 key: 'list',
    //                 icon: <UserOutlined />,
    //                 label: 'list',
    //             },
    //             {
    //                 key: 'detail',
    //                 icon: <VideoCameraOutlined />,
    //                 label: 'detail'
    //             },
    //         ]} />
    //     </Sider>
    //     <Layout>
    //         <Header className={style.header} style={{ padding: 0 }}>
    //             {
    //                 // collapsed ? <MenuFoldOutlined {...collapsedProps} /> : <MenuUnfoldOutlined {...collapsedProps} />
    //                 React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
    //                     className: style.trigger,
    //                     onClick: handleCollapsed,
    //                 })
    //             }
    //         </Header>
    //         <Content className={style.content}>
    //             {props.children}
    //         </Content>
    //     </Layout>
    // </Layout>
    <ConfigProvider locale={zhCN}>
      <Layout className={style.layout}>
        <Sider collapsible collapsed={collapsed} onCollapse={handleCollapsed}>
          <div className={style.logo} />
          <Menu
            theme="dark"
            onSelect={handleJump}
            defaultSelectedKeys={['team']}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout>
          <Header className={style.header} />
          <Content className={style.content}>{props.children}</Content>
          <Footer className={style.footer}>
            Ant design created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}
