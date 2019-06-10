import React, { PureComponent } from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

class AboutContainer extends PureComponent{
    render(){
        return (
            <div>
                <Title level={3}>About</Title>
            </div>
        )
    }
}

export default AboutContainer;