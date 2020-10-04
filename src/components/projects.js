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
  CardText, Tabs, Tab
} from "react-mdl";

class Projects extends Component {
render () {
    return (
    <div>
      <Grid className="projectGrid">
        <Cell col={4}>
<Card className="projectCard" shadow={0} style={{ width: "512px", margin: "50px" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAJFBMVEXaQSz////aPyneWUnsq6XsqaPYMRPdVEPYMhbrpp/eXEzdVUUMjj9SAAAAkklEQVR4nO3SgQnDMAxFQUmuHafdf98WOkMwiLsJ/kOKzNeo6KnGzIx8r66Bv8Q1Ml7r9IxH7RltX/SvrugdGO37AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIBz6vSAh1WM3ol1xVynRzxq35Fj971i7U9G5ry6JtZ1Z34BjnoA1vOcw8oAAAAASUVORK5CYII=) center / cover",
                  }}
                >
                  Six Feet or Further
                </CardTitle>
                <CardText>
                A decision-making app for eating out or cooking at home based on the ingredients you have available.
                </CardText>
                <CardActions border>
                  <Button colored><a href="https://github.com/carooflee/Six-Feet-or-Further">GitHub</a></Button>
                  <Button colored><a href="https://carooflee.github.io/Six-Feet-or-Further/">Live Demo</a></Button>
                </CardActions>
                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
              </Cell>
                  <Cell col={4}>
          <Card className="projectCard" shadow={0} style={{ width: "512px", margin: "50px" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(https://borge.com.au/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/s/u/sup_35_yellow-orange.jpg) center / cover",
                  }}
                >
                  React Music Player
                </CardTitle>
                <CardText>
                A react-based music player color-coded with the trans flag.
                </CardText>
                <CardActions border>
                  <Button colored><a href="https://github.com/carooflee/React-Music-Player">GitHub</a></Button>
                  <Button colored><a href="https://reactfully.herokuapp.com/">Live Demo</a></Button>
                </CardActions>
                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
              </Cell>
    
        <Cell col={4}>
              <Card className="projectCard" shadow={0} style={{ width: "512px", margin: "50px" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(https://i.ytimg.com/vi/R3unPcJDbCc/hqdefault.jpg) center / cover",
                  }}
                >
                  Work Day Scheduler
                </CardTitle>
                <CardText>
                An interactive local storage powered planner which is color coded based on the time of the day.
                </CardText>
                <CardActions border>
                  <Button colored><a href="https://github.com/carooflee/WorkDayScheduler">GitHub</a></Button>
                  <Button colored><a href="https://carooflee.github.io/WorkDayScheduler/">Live Demo</a></Button>
                </CardActions>
                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
              </Cell>
         
              <Cell col={4}>
              <Card className="projectCard" shadow={0} style={{ width: "512px", margin: "50px" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(https://www.chelsea-fusion.com/wp-content/uploads/2015/02/Diamond-Decor-Colour-Coated-Glass-Yellow-Green.jpg) center / cover",
                  }}
                >
                  React Employee Table
                </CardTitle>
                <CardText>
                A sortable, filterable table created with React.
                </CardText>
                <CardActions border>
                  <Button colored><a href="https://github.com/carooflee/React-Table">GitHub</a></Button>
                  <Button colored><a href="https://carooflee.github.io/React-Table/">Live Demo</a></Button>
                </CardActions>
                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
              </Cell>
          

              <Cell col={4}>
              <Card className="projectCard" shadow={0} style={{ width: "512px", margin: "50px" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgRCgkGDRYPBQUGDRsICQUKFCYWFhQRExMYKCggGBolGxMTITEhJSkrLi4uFx8zODMsNygtLisBCgoKCwoKGgoPDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAKgBLAMBIgACEQEDEQH/xAAVAAEBAAAAAAAAAAAAAAAAAAAABv/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAWAQEBAQAAAAAAAAAAAAAAAAAABQH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCWAW0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//Z) center / cover",
                  }}
                >
                  Spectrum Messaging
                </CardTitle>
                <CardText>
                A messaging app that communicates the emotion behind a text to the user.
                </CardText>
                <CardActions border>
                  <Button colored><a href="https://github.com/carooflee/spectrum-messaging">GitHub</a></Button>
                  <Button colored><a href="https://spectrum-messaging.herokuapp.com/">Live Demo</a></Button>
                </CardActions>
                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
              </Cell>
          

             <Cell col={4}>
              <Card className="projectCard" shadow={0} style={{ width: "512px", margin: "50px" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(https://i2.wp.com/www.hisour.com/wp-content/uploads/2018/03/African-violet-color.jpg?fit=720%2C720&ssl=1&resize=1280%2C720) center / cover",
                  }}
                >
                  Horror Health
                </CardTitle>
                <CardText>
                A mental health-oriented horror movie app with trigger and catharsis ratings.
                </CardText>
                <CardActions border>
                  <Button colored><a href="https://github.com/carooflee/Horror-Health">GitHub</a></Button>
                  <Button colored><a href="https://carooflee.github.io/Horror-Health/">Live Demo</a></Button>
                </CardActions>
                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
              </Cell>
              </Grid>
              </div>
    )
  }
};


 


export default Projects;
