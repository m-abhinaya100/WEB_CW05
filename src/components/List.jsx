import React, { Component } from 'react';
import './List.css';

class List extends Component {
  render() {
    const items = this.props.items || [];

    if (items.length === 0) {
      return (
        <div className="list list--empty" role="status">
          <span className="list__empty-icon" aria-hidden="true">
            🔍
          </span>
          <p className="list__empty-text">
            No matches yet. Try a different search or change the filter.
          </p>
        </div>
      );
    }

    return (
      <ul className="list" aria-label="Filtered produce results">
        {items.map((item) => (
          <li key={item.name} className="list__item">
            <span
              className={`list__badge list__badge--${item.type.toLowerCase()}`}
              aria-hidden="true"
            >
              {item.type === 'Fruit' ? '🍎' : '🥦'}
            </span>
            <div className="list__body">
              <span className="list__name">{item.name}</span>
              <span className="list__type">{item.type}</span>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default List;
