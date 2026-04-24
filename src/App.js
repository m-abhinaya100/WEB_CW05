import React, { Component } from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Counter from './components/Counter';
import FilteredList from './components/FilteredList';

const produce = [
  { name: 'Apple', type: 'Fruit' },
  { name: 'Banana', type: 'Fruit' },
  { name: 'Carrot', type: 'Vegetable' },
  { name: 'Broccoli', type: 'Vegetable' },
  { name: 'Orange', type: 'Fruit' },
  { name: 'Spinach', type: 'Vegetable' },
  { name: 'Blueberry', type: 'Fruit' },
  { name: 'Kale', type: 'Vegetable' },
  { name: 'Strawberry', type: 'Fruit' },
  { name: 'Pepper', type: 'Vegetable' },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App__shell">
          <nav className="App__nav" aria-label="Primary">
            <div className="App__brand">
              <span className="App__logo" aria-hidden="true">
                ⚛︎
              </span>
              <div>
                <p className="App__brand-title">CW-05</p>
                <p className="App__brand-subtitle">React Fundamentals</p>
              </div>
            </div>
          </nav>

          <main className="App__grid">
            <HelloWorld />
            <Counter />
            <FilteredList items={produce} />
          </main>

          <footer className="App__footer">
            <p>
              Built for CW-05 · HelloWorld + Counter + List + FilteredList + App.js
            </p>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
