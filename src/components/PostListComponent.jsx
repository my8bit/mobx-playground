import React, { Component } from "react";
import { observable, action, values } from "mobx";
import { observer } from "mobx-react";

import PostComponent from "./PostComponent";

@observer
class PostList extends React.Component {
  @observable newTodoTitle = "";

  render() {
    // console.log(values(this.props.store.posts));
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          New Todo:
          <input
            type="text"
            value={ this.newTodoTitle }
            onChange={ this.handleInputChange }
          />
          <button type="submit">Add</button>
        </form>
        <hr />
         <ul>
            {
            values(this.props.store.posts).map((post, idx) => (
              <PostComponent todo={post} key={idx} />
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

/*
        <ul>
          {
            console.log(this.props.store.posts.value)}
          }
          {
            {
            this.props.store.posts.map(post => (
              <PostComponent todo={post} key={post.id} />
            ))
            }
          }
        </ul>

*/