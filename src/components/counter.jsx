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
    //state is private to a component
    //props is the data passed to the component from another
    //props cannot be modified by the child component
    //Thumb Rule >>> The component that owns a state, is the one that can modify it.
    count: this.props.value,
    tags: ["tag1", "tag2", "tag3"],
    // tags: [],
  };

  classes = {
    //classes variable that can be accessed int render() for react elements using style attribute and enclosed as {this.classes}
    fontSize: 50, //camel case
    fontWeight: "bold",
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>No tags</p>;
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
    //no parameter method which can be called with just passing a reference to events in the dom
    //use arrow function to avoid rebinding of 'this' to a function everytime by binding it in the constructor; arrow functions have inuilt rebinding hence tis is always available
    // this.state.count += 1;
    this.setState({ count: this.state.count + 1 });
  };

  handleParameter = (id) => {
    //parameterized method can't be called directly as this.handleParameter(id); has to be called but => func. as () => this.handleParameter({id:1})
    console.log(id);
  };

  render() {
    //render method is used to return the Dom elements which are converted to React.createElement on the dom to render the html; done by Babel which converts modern JS to basic dom structure
    return (
      <div>
        {this.props.children}
        {/* to render anything that is passed within the component selector tags from the parent component  */}

        <span className={this.getBadgeClasses()} style={this.classes}>
          {/* className can be used to give predefined classes or classes returned by a function {this.functionName()} */}
          {this.formatCount()}
          {/* call a function by enclosing it in {} */}
        </span>

        <button
          onClick={() => {
            this.props.onIncrement(this.props.id);
          }}
          //   passing reference of the function to the button onCLick attribute when no parameter needs to be passed to the function
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>

        <button
          onClick={() => this.handleParameter({ id: 1 })}
          //   this.handleIncrement(id) >>> not allowed;, instead use an arrow function to call methods with parameters; this is similar to using a doer function, without any params, that internally calls the parameterized method
          className="btn btn-secondary btn-sm m-2"
        >
          Parameter click
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.id)}
          //   using the onDelete attribute that has been provided by the parent
          //this is being done to enable an event in the child to cause an effect in the parent (generally to modify the props from the child)
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>

        {/* {this.state.tags.length === 0 && <p>Create new tag</p>}
        {this.renderTags()} */}
        {/* since ngIf directive is not supported in react, for conditional rendering we can use && operator or get the DOM element as returned by a function which considers the conditions */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += this.props.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props;
    return value === 0 ? <h1>Zero</h1> : <h1>{value}</h1>;
  }
}

export default Counter; //export keyword is added so that the component can be used outside but importing it
//default export -> default keyword is used to indicate that this is the item vailable for export by default; import Counter from './counter'
//named export -> if default keyword is not used >>> import {name} from './counter';
