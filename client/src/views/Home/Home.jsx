import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import compose from 'ramda/src/compose';
import withStyles from '@material-ui/core/styles/withStyles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Discussion from './Discussion';
import { getThreads } from './HomeActions';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 4,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 4,
    right: theme.spacing.unit * 4,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

const mapStateToProps = state => ({ ...state.home });

const mapDispatchToProps = dispatch => ({
  fetchThreads: () => dispatch(getThreads),
});

export class DisconnectedHome extends React.Component {
  componentDidMount() {
    const { fetchThreads } = this.props;
    fetchThreads();
  }

  render() {
    const { classes, threads, isLoading, errorOccurred } = this.props;
    if (errorOccurred) {
      return <h1>Error</h1>;
    }

    if (isLoading) {
      return <h1>Loading</h1>;
    }

    return (
      <div className={classes.root}>
        <Fab
          variant="extended"
          color="primary"
          aria-label="Add"
          className={classes.fab}
        >
          <AddIcon className={classes.extendedIcon} />
          Add Topic
        </Fab>
        <Discussion title="Foo" user="foo" />
        {threads.map(thread => (
          <Discussion title={thread.title} user="Unknown" />
        ))}
      </div>
    );
  }
}

DisconnectedHome.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  fetchThreads: PropTypes.func.isRequired,
  threads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  isLoading: PropTypes.bool.isRequired,
  errorOccurred: PropTypes.bool.isRequired,
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withStyles(styles),
)(DisconnectedHome);
