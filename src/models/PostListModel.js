import { observable, computed, action } from "mobx";
import { getSnapshot } from "mobx-state-tree";
import { PostModel } from "./PostModel";

export class PostListModelClass {
  @observable todos = [];

  @computed
  get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length;
  }

  @action
  addTodo(data) {
    const postObj = {
    	...data,
    	id: (new Date()).getTime()
    };
    // console.log(post);
    const post = PostModel.create(postObj);
    console.log(getSnapshot(post));
    this.todos.push(PostModel.create(post));
  }
}
