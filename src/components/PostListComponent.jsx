import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

import PostComponent from "./PostComponent";

@observer
class PostList extends React.Component {
  @observable newTodoTitle = "";

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          New Todo:
          <input
            type="text"
            value={this.newTodoTitle}
            onChange={this.handleInputChange}
          />
          <button type="submit">Add</button>
        </form>
        <hr />
        <ul>
          {
            console.log(this.props.store.todos.map)}
          }
          {
            this.props.store.todos.map(post => (
              <PostComponent todo={post} key={post.id} />
            ))
          }
        </ul>
        Tasks left: {this.props.store.unfinishedTodoCount}
      </div>
    );
  }

  @action
  handleInputChange = e => {
    this.newTodoTitle = e.target.value;
  };

  @action
  handleFormSubmit = e => {
    this.props.store.addTodo({ title: this.newTodoTitle });
    this.newTodoTitle = "";
    e.preventDefault();
  };
}

export default PostList;
