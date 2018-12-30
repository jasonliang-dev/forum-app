import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import compose from 'ramda/src/compose';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import NewThreadForm from './NewThreadForm';
import environment from '../../environment';
import { inspect } from '../../utils';

const styles = theme => ({
  paper: {
    marginTop: theme.spacing.unit * 4,
    padding: theme.spacing.unit * 3,
  },
});

const handleSubmit = history => values => {
  axios
    .post(`${environment.endpoint}/threads`, values)
    .then(() => history.push('/'))
    .catch(inspect);
};

const NewThread = ({ classes, history }) => (
  <Paper className={classes.paper}>
    <Typography variant="h6">New Thread</Typography>
    <NewThreadForm onSubmit={handleSubmit(history)} />
  </Paper>
);

NewThread.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
};

export default compose(
  withRouter,
  withStyles(styles),
)(NewThread);
