import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const projectsData = [
  {
    id: 1,
    title: 'My First Project',
    timeOn: '1h45',
    was_pay: false,
    customer_name: 'First Customer',
    weekOn: 0
  },
  {
    id: 2,
    title: 'My Second Project',
    timeOn: '4h',
    was_pay: true,
    customer_name: 'Second Customer',
    weekOn: 1
  },
  {
    id: 3,
    title: 'My Third Project',
    timeOn: '56h12',
    was_pay: false,
    customer_name: 'Third Customer',
    weekOn: 2
  },
  {
    id: 4,
    title: 'My Fourth Project',
    timeOn: '4h',
    was_pay: true,
    customer_name: 'Fourth Customer',
    weekOn: 1
  },
  {
    id: 5,
    title: 'My 5 Project',
    timeOn: '56h12',
    was_pay: false,
    customer_name: '5 Customer',
    weekOn: 2
  },
];

const styles = {
  root: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    height: '100vh'
  },
  container: {
    width: '90%',
    flexWrap: 'wrap',
    display: 'flex',
    justifyContent: 'space-around',
    heigth: '100%',
    overflowX: 'auto',
    overflowY: 'hidden',
    marginTop: '2%',
    paddingBottom: 200
  },
  card: {
    width: 300,
    marginTop: 3,
    height: 350
  }
};


export const ProjectsLists = () =>
  <div style={styles.root}>
    <div style={styles.container}>
      {projectsData.map((project, i) => (
        <Card key={i} style={styles.card}>
          <CardHeader
            title={project.customer_name}
            subtitle="Web App"
            avatar="http://www.material-ui.com/images/jsa-128.jpg"
          />
          {/* <CardMedia>
            {project.timeOn}
          </CardMedia> */}
          <CardTitle title={project.title} />
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
          <CardActions>
            <FlatButton label="Action1" />
            <FlatButton label="Action2" />
          </CardActions>
        </Card>
      ))}
    </div>
  </div>;
