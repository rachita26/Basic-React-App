import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      {
        id: 1,
        value: 4,
      },
      {
        id: 2,
        value: 0,
      },
      {
        id: 3,
        value: 0,
      },
      {
        id: 4,
        value: 0,
      },
    ],
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = (counterId) => {
    let counters = [...this.state.counters];
    const counter = this.state.counters.filter((c) => c.id === counterId);
    const i = counters.indexOf(counter[0]);
    counter[0].value++;
    counters[i] = { ...counter[0] };
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button
          className="btn btn-primary btn-lg m-2"
          onClick={this.handleReset}
        >
          Reset
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            id={counter.id}
            key={counter.id}
            value={counter.value}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          >
            {/* whatever is passed in the selector ex: value is stored in the this.props for the Counter element; can be accessed using this.props in the component */}
            {/* passing onDelete event to the child so that when the child raises the event, the parent has a handler i.e. handleDelete to perform the reqd. action */}
            <h4>Counter {counter.id}</h4>
            {/* anything written within the component selector will be rendered in the component if {this.props.children} is used there >>> line56 in counter.jsx */}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
