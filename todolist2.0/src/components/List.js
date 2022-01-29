import * as actionTypes from "../store/actions";
import React, { Component } from "react";
import { connect } from "react-redux";


class List extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddNote(e.target.note.value);
    e.target.note.value = "";
  };

  render() {
    return (
      <>
        <header className="App-header">
          <h1>Notes to myself</h1>
          <p>
            I have currently{" "}
            <span className="number-of-notes">
              {this.props.todo.length}
            </span>{" "}
            notes
          </p>
        </header>
        <main>
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Write here your task" name="note" />
            <button type="submit">Add task</button>
          </form>
          <ul className="list">
            {this.props.todo.map((item) => (
              <li
                key={item.id}
                className={item.complete ? "item-text strike" : "item-text"}
                onClick={() => this.props.onCompleteNote(item.id)}
              >
                {item.text}{" "}
                <span
                  className="delete-button"
                  onClick={() => this.props.onDeleteNote(item.id)}
                >
                    🗑️
                </span>
              </li>
            ))}
          </ul>
        </main>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todo: state.notes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddNote: (text) =>
      dispatch({
        type: actionTypes.ADD_NOTE,
        data: text,
      }),
    onDeleteNote: (id) =>
      dispatch({
        type: actionTypes.DELETE_NOTE,
        item: id,
      }),
    onCompleteNote: (id) =>
      dispatch({ type: actionTypes.COMPLETE_NOTE, completedID: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
