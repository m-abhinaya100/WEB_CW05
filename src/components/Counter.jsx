import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 5,
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  resetCount = () => {
    this.setState({ count: 0 });
  };

  render() {
    const { count } = this.state;

    return (
      <section className="counter">
        <header className="counter__header">
          <span className="counter__tag">Module 2 · State</span>
          <h2 className="counter__title">Interactive Counter</h2>
          <p className="counter__subtitle">
            Powered by <code>this.setState()</code> — React re-renders whenever state changes.
          </p>
        </header>

        <div className="counter__display" aria-live="polite" aria-atomic="true">
          <span className="counter__value">{count}</span>
        </div>

        <div className="counter__controls">
          <button
            type="button"
            className="btn btn--ghost"
            onClick={this.decrementCount}
            aria-label="Decrement count"
          >
            −
          </button>
          <button
            type="button"
            className="btn btn--primary"
            onClick={this.incrementCount}
          >
            Increment
          </button>
          <button
            type="button"
            className="btn btn--ghost"
            onClick={this.resetCount}
          >
            Reset
          </button>
        </div>
      </section>
    );
  }
}

export default Counter;
