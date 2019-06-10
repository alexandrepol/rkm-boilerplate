import React, { PureComponent } from 'react';
import { Typography } from 'antd';

const { Title } = Typography;


class GeneralContainer extends PureComponent{
    render(){
        return (
            <div>
                <Title level={3}>GeneralContainer</Title>
            </div>
        )
    }
}

export default GeneralContainer;