import React, { Component } from 'react';

export default class HigherOrderComponent extends Component {
  state = {
    userData: [
      { id: '1', name: 'Joe', user_type: 'Developer', age: 31, years: 11 },
      { id: '2', name: 'Hill', user_type: 'Designer', age: 26, years: 4 },
      { id: '3', name: 'John', user_type: 'Teacher', age: 24, years: 2 },
      { id: '4', name: 'Sam', user_type: 'Entrepreneur', age: 58, years: 25 },
      { id: '5', name: 'Jack', user_type: 'Designer', age: 43, years: 18 }
    ],
    filterType: 'Designer',
    filterName: 'J'
  };

  renderListItem(item) {
    return (
      <li key={item.id}>
        <span>Id: {item.id}</span>
        <span>Name: {item.name}</span>
        <span>User Type: {item.user_type}</span>
        {/* <span>Age: {item.age} </span>
        <span>Years: {item.years} </span> */}
      </li>
    );
  }

  render() {
    // Destructuring i.e, extracting properties.
    const { userData, filterType, filterName} = this.state;

    // Filtering list by using 'Designer' type.
    const filteredListByType = userData
      .filter((item) => item.user_type === filterType)
      .map(this.renderListItem);

    // Filtering list names that starts with letter 'J'.
    const filteredListByName = userData
      .filter((item) => item.name.startsWith(filterName))
      .map(this.renderListItem);

    // Filtering list by age b/w 28 and 50.
    const filteredListByAge = userData
      .filter((item) => item.age > 28 && item.age <= 50)
      .map(this.renderListItem);

    // Total no. of years.
    const totalYears = userData
      .filter((item) => item.user_type === 'Designer')
      .reduce((total, item) => total + item.years, 0);

    return (
      <React.Fragment>
        <h1>Display all items</h1>
        <div className="display-box">
          <ul>
            {userData.map(this.renderListItem)}
          </ul>

          <h1>Display based on user type</h1>
          <ul>{filteredListByType}</ul>

          <h1>Filter all data starting with letter 'J'</h1>
          <ul>{filteredListByName}</ul>

          <h1>Filtered all data based on age between 28 and 50.</h1>
          <ul>{filteredListByAge}</ul>
          
          <h1>Find the total years of the designers</h1>
          <p>{totalYears}</p>
        </div>
      </React.Fragment>
    );
  }
}
