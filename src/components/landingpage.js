import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Home extends Component {
    render() {
        return(
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
                    {/* <Cell col={4}>
                        <p className="BannerParagraph">While still in a state of learning, I offer the ability to program in HTML, CSS, Javscript, Node, Express, and MySQL. What I lack in knowledge I make up for in tenacity and perserverance, both traits necessary to push forward through the toughest coding challenges.</p>
                    </Cell>
                    <Cell col={4}>
                        <p className="BannerParagraph">Nothing is an over-night process. Success is not a matter of innate talent, it's built from the lessons that come when you fail and the decision to never let those failures mitigate your future successes.</p>
                    </Cell>
                    <Cell col={4}>
                        <p className="BannerParagraph">Teamwork makes the dreamwork: I bring to the table effective communication and an open mind, and have no issue asking for help when the need arises. I believe these things make me an invaluable member of any team.</p>
                    </Cell> */}
                </Grid>

            </div>
        )
    }
}

export default Home;