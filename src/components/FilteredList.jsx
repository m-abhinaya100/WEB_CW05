import React, { Component } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import List from './List';
import './FilteredList.css';

class FilteredList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      type: 'All',
    };
  }

  onSearch = (event) => {
    this.setState({ search: event.target.value });
  };

  onFilter = (eventKey) => {
    this.setState({ type: eventKey });
  };

  filterItem = (item) => {
    const matchesSearch =
      item.name.toLowerCase().search(this.state.search.toLowerCase()) !== -1;
    const matchesType =
      this.state.type === 'All' || item.type === this.state.type;
    return matchesSearch && matchesType;
  };

  render() {
    const { search, type } = this.state;
    const items = this.props.items || [];
    const filtered = items.filter(this.filterItem);

    return (
      <section className="filtered">
        <header className="filtered__header">
          <span className="filtered__tag">Modules 3 & 4 · Props + Filtering</span>
          <h2 className="filtered__title">Produce Finder</h2>
          <p className="filtered__subtitle">
            Search by name and filter by type — both conditions must match.
          </p>
        </header>

        <div className="filtered__controls">
          <label className="filtered__search" htmlFor="produce-search">
            <span className="filtered__search-icon" aria-hidden="true">
              🔎
            </span>
            <input
              id="produce-search"
              type="search"
              className="filtered__input"
              placeholder="Search produce..."
              value={search}
              onChange={this.onSearch}
              aria-label="Search produce by name"
            />
          </label>

          <DropdownButton
            id="produce-filter"
            title={`Filter: ${type === 'Vegetable' ? 'Vegetables' : type}`}
            onSelect={this.onFilter}
            className="filtered__dropdown"
            pullRight
          >
            <Dropdown.Item
              eventKey="All"
              active={type === 'All'}
            >
              All
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="Fruit"
              active={type === 'Fruit'}
            >
              Fruit
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="Vegetable"
              active={type === 'Vegetable'}
            >
              Vegetables
            </Dropdown.Item>
          </DropdownButton>
        </div>

        <div className="filtered__meta" aria-live="polite">
          Showing <strong>{filtered.length}</strong> of {items.length} items
          {search && (
            <>
              {' '}
              for "<em>{search}</em>"
            </>
          )}
          {type !== 'All' && (
            <>
              {' '}
              in <strong>{type === 'Vegetable' ? 'Vegetables' : type}</strong>
            </>
          )}
        </div>

        <List items={filtered} />
      </section>
    );
  }
}

export default FilteredList;
