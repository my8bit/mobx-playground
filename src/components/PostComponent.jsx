import React, { Component } from "react";
import { observer } from "mobx-react";

const Post = observer(({ todo }) => (
  <li>
  	this is the post is about {todo.title}
  </li>
));

export default Post;
