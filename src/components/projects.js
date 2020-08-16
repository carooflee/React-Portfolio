import React, { Component } from "react";
import {
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardText
} from "react-mdl";

class Projects extends Component {
  render() {
    return (
        <div className="projects-grid">
        <Grid>
          <Cell col={4}>
              <Card shadow={0} style={{ width: "512px", margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover",
                  }}
                >
                  Six Feet or Further
                </CardTitle>
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris sagittis pellentesque lacus eleifend lacinia...
                </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
              </Cell>

              <Cell col={4}>
              <Card shadow={0} style={{ width: "512px", margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover",
                  }}
                >
                  Six Feet or Further
                </CardTitle>
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris sagittis pellentesque lacus eleifend lacinia...
                </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
              </Cell>

              <Cell col={4}>
              <Card shadow={0} style={{ width: "512px", margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover",
                  }}
                >
                  Six Feet or Further
                </CardTitle>
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris sagittis pellentesque lacus eleifend lacinia...
                </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
          </Cell>
        </Grid>
       </div>
    );
  }
}

export default Projects;
