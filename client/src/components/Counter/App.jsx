import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { increment, decrement } from './AppActions';

export const DisconnectedApp = ({ counter, plus, minus }) => (
  <div
    style={{
      margin: 20,
    }}
  >
    <button type="button" onClick={plus}>
      +
    </button>
    <div className="count">{counter}</div>
    <button type="button" onClick={minus}>
      -
    </button>
  </div>
);

DisconnectedApp.propTypes = {
  counter: PropTypes.number.isRequired,
  plus: PropTypes.func.isRequired,
  minus: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  counter: state.counter,
});

const mapDispatchToProps = dispatch => ({
  plus: () => dispatch(increment()),
  minus: () => dispatch(decrement()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DisconnectedApp);
