import { Layout } from 'antd';
const { Content } = Layout;
import * as React from 'react';

import './App.css';
import CustomHeader from './components/CustomHeader'
// import CustomSider from './components/CustomSider'


interface ILocalState {
  collapsed: boolean;
}


class App extends React.Component {
  public state:ILocalState = {
    collapsed: false,
  };
  public toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  public render() {
    return (
      <Layout style={{minHeight: '100vh'}}>
        {/* <CustomSider /> */}
        <Layout>
          <CustomHeader />
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff' }}>
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
