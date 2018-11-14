import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";
import PostList from "./components/PostListComponent";
import { PostListModelClass, PostListModelMobxState } from "./models/PostListModel";

// const store = new PostListModelClass();
const store = PostListModelMobxState.create({ posts: [] });

fetch('https://conduit.productionready.io/api/users/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user: { email: "uniqueuser@uniqueuser.com", password: 'uniqueuseruniqueuser'}})
  })
	.then(resp => JSON.parse(resp))
	.then(raw => {
		console.log(raw)

	// fetch('URL_GOES_HERE', { 
	//    method: 'post', 
	//    headers: new Headers({
	//      'Authorization': 'Basic '+btoa('username:password'), 
	//      'Content-Type': 'application/x-www-form-urlencoded'
	//    }), 
	//    body: 'A=1&B=2'
	//  })

});



render(
  <div>
    <DevTools />
    <PostList store={store} />
  </div>,
  document.getElementById("root")
);

store.addTodo({ title: "Get Coffee" });
store.addTodo({ title: "Write simpler code" });
// store.todos[0].finished = true;
