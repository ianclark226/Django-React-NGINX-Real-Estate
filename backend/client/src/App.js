import React from 'react';
import { Layout } from 'antd';
import "./App.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppFooter  from './components/commons/Footer';
import AppHeader  from './components/commons/Header';
import HomePage from './Pages/HomePage';
import PropertyListPage from './Pages/PropertyListPage';

const {Content, Header, Footer} = Layout;

const App = () => {
  return (
  <Router>
      <Layout className='main-layout'>
        <Header>
          <AppHeader />
        </Header>
        <Content>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/properties" component={PropertyListPage} />
        </Content>
        <Footer>
          <AppFooter />
        </Footer>
      </Layout>
  </Router>
  )

}

export default App;
