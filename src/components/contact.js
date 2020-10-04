import React, {Component} from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return(
            <div className="contactBody">
                <Grid className="contactGrid">
                    <Cell col={6}>
                        <h2>Caroline Lee</h2>
                        <img 
                        src="https://raw.githubusercontent.com/carooflee/React-Portfolio/master/public/profilepic.jpg"
                        alt="Contact Photo"
                        style={{height: '250px'}}/>
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>If you would like to reach out to me for any reason, please use any of the means listed and I will get back to you as soon as possible.</p>
                    </Cell>
                    <Cell col={6}>
                        <h3>Contact Me</h3>
                        <hr />
                    <div className="contactList">
                    <List>
                        <ListItem>
                            <ListItemContent className="contactInfo">
                                <i className="fa fa-phone-square" aria-hidden="true"/>
                                832.477.3333
                                </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent className="contactInfo">
                                <i className="fa fa-envelope" aria-hidden="true"/>
                                carolinechloelee@gmail.com
                                </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent className="contactInfo">
                            <i className="fab fa-github" aria-hidden="true"/>
                               <a href="https://github.com/carooflee" className="link"> GitHub </a>
                                </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent className="contactInfo">
                            <i className="fab fa-linkedin" aria-hidden="true" />
                               <a href="https://www.linkedin.com/in/caroline-lee-7b79531a3/" className="link">LinkedIn</a>
                                </ListItemContent>
                        </ListItem>


                    </List>
                    </div>
                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default Contact;