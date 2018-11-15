import React, { Component } from "react";
import { observer } from "mobx-react";

const Post = observer(({ todo }) => (
  <li>
  	<h1>{todo.title}</h1>
  	<h4>{todo.description}</h4>
  	<p> {todo.body}</p>
  	<p>
  		{todo.tagList.map((tag, idx) => (<span key={idx}>{tag},&nbsp;</span>))}
  	</p>
  </li>
));

export default Post;
