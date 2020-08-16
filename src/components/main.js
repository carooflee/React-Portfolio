import React from 'react';
import Home from './landingpage';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';
import { Switch, Route } from 'react-router-dom';

const Main = () => {
    return (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
        <Route path="/contact" component={Contact} />
    </Switch>
    )
}

export default Main;