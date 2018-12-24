import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { increment, decrement } from './AppActions';
import './main.css';

const mapStateToProps = state => ({
  counter: state.counter,
});

const mapDispatchToProps = dispatch => ({
  plus: () => dispatch(increment()),
  minus: () => dispatch(decrement()),
});

const ConnectedApp = ({ counter, plus, minus }) => (
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

ConnectedApp.propTypes = {
  counter: PropTypes.number.isRequired,
  plus: PropTypes.func.isRequired,
  minus: PropTypes.func.isRequired,
};

const connection = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const App = connection(ConnectedApp);

export default App;
