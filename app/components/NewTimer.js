import React, { PropTypes } from 'react';
import { reduxForm, Field } from 'redux-form';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { MyTextField } from './customField/MyTextField';
import cn from './NewTimer.css';

const NewTimer = ({ handleSubmit }) =>
  <div className={cn.root}>
    <Paper zDepth={3} style={styles.paper}>
      <h1>Create a new timer</h1>
      <form onSubmit={handleSubmit}>
        <Field
          name="projectName"
          hintText="Project Name"
          floatingLabelText="Project Name"
          component={MyTextField}
        />
        <br />
        <Field
          name="customerName"
          hintText="Customer Name"
          floatingLabelText="Customer Name"
          component={MyTextField}
        />
        <div className={cn.buttonContainer}>
          <RaisedButton label="Create" primary />
        </div>
      </form>
    </Paper>
  </div>;

NewTimer.propTypes = {
  handleSubmit: PropTypes.func
};

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

export default reduxForm({
  form: 'projectForm'
})(NewTimer);
