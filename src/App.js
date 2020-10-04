import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, Grid, Cell } from 'react-mdl';
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

    <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                        src="https://raw.githubusercontent.com/carooflee/React-Portfolio/master/public/profilepic.jpg"
                        alt="Profile Picture"
                        className="ProfilePic"></img>

                        <div className="BannerText">
                            <h1>Caroline Lee</h1>
                            <h2>Full Stack Web Developer</h2>
                            <h3>A Constant Work in Progress,</h3>
                            <h3>Progressing Through Constant Work</h3> 
                            <hr />
                            <p>HTML | CSS | Javascript | React | NodeJS | Express | MySQL</p>
                        </div>
                    </Cell>
                </Grid>

            </div>
</div>
  );
}

export default App;
