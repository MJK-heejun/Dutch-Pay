import { Icon, Layout, Menu } from 'antd';
import * as React from 'react';
const { Sider } = Layout;


interface ILocalState {
  collapsed: boolean;
}


class CustomSider extends React.Component {
  public state:ILocalState = {
    collapsed: false,
  };
  
  public render() {
      return (
        <Sider
          trigger={null}
          collapsible={true}
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
      );
  }
}

export default CustomSider;