import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import cn from './NewTimer.css';

export const NewTimer = () =>
  <div className={cn.root}>
    <Paper zDepth={3} style={styles.paper}>
      <h1>Create a new timer</h1>
      <TextField
        hintText="Project Name"
        floatingLabelText="Project Name"
      />
      <div className={cn.buttonContainer}>
        <RaisedButton label="Create" primary />
      </div>
    </Paper>
  </div>;

const styles = {
  paper: {
    width: '60%',
    minHeight: '60%',
    height: 'auto',
    padding: 30,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column'
  }
};
