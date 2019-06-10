import React, { PureComponent } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

class Sidebar extends PureComponent{
    render(){
        return (
            <Sider
            breakpoint="lg"
            collapsedWidth="0"
            >
                <div className="logo" />
                <Menu theme="dark" mode="inline">
                    <Menu.Item key="general  v">
                        <Icon type="dashboard" />
                        <span className="nav-text">General</span>
                        <Link to="/" />
                    </Menu.Item>
                    <Menu.Item key="about">
                        <Icon type="question" />
                        <span className="nav-text">About</span>
                        <Link to="/about" />
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }
}

export default Sidebar;