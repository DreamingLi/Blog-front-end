import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Menu, Icon, Layout } from 'antd';
import ListPost from './component/list'
import Pub from './component/pub'
import Login from './component/login';
import Reg from './component/reg';
import Post from './component/post';
import 'antd/lib/menu/style';
import 'antd/lib/icon/style';
import 'antd/lib/layout/style';
import { List, Card } from 'antd';

const { Header, Content, Footer } = Layout;

const data = [
  {
    title: 'FIRST',
    content: "Separation of front-end and back-end"
  },
  {
    title: 'SECOND',
    content:'React for front-end, Django for back-end'
  },
  {
    title: 'THIRD',
    content: 'Restful api'
  },
  {
    title: 'FOURTH',
    content: 'No session for authentication'
  },
  {
    title: 'FIFTH',
    content: 'Using bcrypt hashing function to protect password'
  },
  {
    title: 'SIXTH',
    content: 'Using Antd open source components'
  },
  {
    title: 'SEVENTH',
    content: 'Enterprise NGINX + uWSGI + Django deployment'
  },
];
function Index() {
  return  <div>
    <List
  grid={{
    gutter: 16,
    xs: 1,
    sm: 2,
    md: 4,
    lg: 4,
    xl: 6,
    xxl: 3,
  }}
  dataSource={data}
  renderItem={item => (
    <List.Item>
      <Card title={item.title}>{item.content}</Card>
    </List.Item>
  )}
  />
  </div>;
}

  

function Always() {
  return <div id="footer">Blog System Yinjia</div>;
}

function Root() {
  return (
    <Router>
      <Layout className="layout">
        <Header>
          <Menu defaultSelectedKeys={['home']} mode="horizontal" theme="dark" style={{ lineHeight: '64px' }}>
            <Menu.Item key="home"><Link to="/"><Icon type="home" />HOME</Link></Menu.Item>
            <Menu.Item key="login"><Link to="/login"><Icon type="login" />LOGIN</Link></Menu.Item>
            <Menu.Item key="reg"><Link to="/reg"><Icon type="smile" />REGISTER</Link></Menu.Item>
            <Menu.Item key="pub"><Link to="/pub"><Icon type="upload" />PUBLISH</Link></Menu.Item>
            <Menu.Item key="list"><Link to="/list"><Icon type="bars" />BLOGS</Link></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <Route exact path="/" component={Index} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/reg" component={Reg} />
            <Route exact path="/pub" component={Pub} />
            <Route exact path="/list" component={ListPost} />
            <Route exact path="/post/:id" component={Post} />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          <Route component={Always} />
        </Footer>
      </Layout>
    </Router>
  );
}

ReactDom.render(<Root />, document.getElementById('root'));


