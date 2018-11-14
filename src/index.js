import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";
import PostList from "./components/PostListComponent";
import { PostListModelClass, PostListModelMobxState } from "./models/PostListModel";

const store = new PostListModelClass();
// const store = PostListModelMobxState.create({ posts: {} });

render(
  <div>
    <DevTools />
    <PostList store={store} />
  </div>,
  document.getElementById("root")
);

store.addTodo({ title: "Get Coffee" });
store.addTodo({ title: "Write simpler code" });
store.todos[0].finished = true;
