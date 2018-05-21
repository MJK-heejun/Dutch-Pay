import { Icon, Layout } from 'antd';
const { Header } = Layout;
import * as React from 'react';


interface ILocalState {
  collapsed: boolean;
}


class CustomHeader extends React.Component {
  public state:ILocalState = {
    collapsed: false,
  };
  
  public render() {
      return (
        <Header style={{ background: '#fff', padding: 0 }}>
        <Icon
          className="trigger"
          type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
        />
        </Header>
      );
  }
}

export default CustomHeader;