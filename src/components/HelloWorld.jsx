import React, { Component } from 'react';
import './HelloWorld.css';

class HelloWorld extends Component {
  render() {
    return (
      <section className="hello">
        <span className="hello__eyebrow">Module 1 · JSX Basics</span>
        <h1 className="hello__title">
          Hello World!
          <span className="hello__wave" role="img" aria-label="waving hand">
            👋
          </span>
        </h1>
        <p className="hello__subtitle">
          My very first React class component — rendered through JSX.
        </p>
      </section>
    );
  }
}

export default HelloWorld;
