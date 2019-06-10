import React, { PureComponent } from 'react';
import { Layout } from 'antd';
import Sidebar from '../components/Sidebar/Sidebar';

const { Content, Footer } = Layout

class BasicLayout extends PureComponent{

    render(){
        const { children } = this.props;
        
        return (
            <Layout style={{height:"100vh"}}>
                <Sidebar/>
                <Layout>
                    <Content>
                        <div className="content-container">
                            {children}
                        </div>
                    </Content>
                    <Footer>Created by Alexandre Pol - 2019</Footer>
                </Layout>
            </Layout>
        )
    }
}

export default BasicLayout;