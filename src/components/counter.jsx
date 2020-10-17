import React, { Component } from "react"; //imrc

class Counter extends Component {
  //cc
  //CTRL+D to edit the same string at multiple occurences
  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this); //has to be done id this is to be binded with a non arrow function
  //   }

  state = {
    //state has all properties that are to be used in te application; can be accessed in the render methor using {this.state}
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
    // tags: [],
  };

  classes = {
    //classes variable that can be accessed int render() for react elements using style attribute and enclosed as {this.classes}
    fontSize: 50, //camel case
    fontWeight: "bold",
  };

  renderTags() {
    if (this.state.tags.length == 0) return <p>No tags</p>;
    return (
      <ul>
        {this.state.tags.map((
          tag //alternative of angular ngFor; react does not understand looping of the DOM elements; uses map to create multiple DOM elements mapped to an array
        ) => (
          //inline style used with style attribute with {{}}
          <li key={tag} style={{ fontSize: 30 }}>
            {tag}
          </li>
        ))}
      </ul>
    );
  }

  handleIncrement = () => {
    //use arrow function to avoid rebinding of 'this' to a function everytime by binding it in the constructor; arrow functions have inuilt rebinding hence tis is always available
    this.state.count += 1;
    console.log(this.state.count);
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()} style={this.classes}>
          {/* className can be used to give predefined classes or classes returned by a function {this.functionName()} */}
          {this.formatCount()}
          {/* call a function by enclosing it in {} */}
        </span>
        <button
          onClick={this.handleIncrement}
          //   passing reference of the function to the button onCLick attribute
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {this.state.tags.length == 0 && <p>Create new tag</p>}
        {this.renderTags()}
        {/* since ngIf directive is not supported in react, for conditional rendering we can use && operator or get the DOM element as returned by a function which considers the conditions */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += this.state.count === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : <h1>{count}</h1>;
  }
}

export default Counter;
