import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import ReactMDL from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Caroline Lee" scroll>
            <Navigation>
                <Link to="/landingpage">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
          
            </Navigation>
        </Header>
        <Drawer title="Caroline Lee">
            <Navigation>
                <Link to="/landingpage">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
               
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main></Main>
        </Content>
    </Layout>
</div>
  );
}

export default App;
