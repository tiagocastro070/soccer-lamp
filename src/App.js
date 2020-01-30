import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addButton, completeButton, removeButton } from "./redux/actions/actions.js";
import ListItem from "./components/List.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import { Store } from "./redux/store.js";

class App extends Component {
  state = {
    myTodos: this.props.todos
  };

  modifyStore() {
    console.log(Store.getState());
    removeButton(0);
    console.log(Store.getState());
  }
  
  render() {
    const { todos } = this.props;

    return (
      <div className="App">
        <h1 className="text-center">Hello Redux</h1>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-6">
              <div className="card">
                <div className="card-header">
                  <div className="form-inline justify-content-between">
                    <form action="">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="newtodo"
                          placeholder="Add new to do"
                        />
                      </div>
                      <button className="btn btn-primary">Add</button>
                    </form>
                  </div>
                </div>
                <div className="my-todos">
                  <ul className="list-group list-group-flush">
                    {/* <li><button onClick={() => dispatch({ type: "SOMETHING" })} /></li> */}
                    { todos.map( (todo, listKey) => (
                      <li className="list-group-item" key={listKey}>
                        <div className="row">
                          <div className="col">{todo.todoname}</div>
                          <div className="col">
                            <button onClick={ () => completeButton(0) }>✔️</button>
                            <button onClick={ () => { this.modifyStore() } }>❌</button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    todos: store.toDoState.todos
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators( {addButton, completeButton, removeButton}, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
// export default App;
