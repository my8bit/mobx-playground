import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";
import PostList from "./components/PostListComponent";
import { PostListModelClass, PostListModelMobxState } from "./models/PostListModel";

const store = PostListModelMobxState.create({ posts: [] });
import { Route } from 'mobx-router';

// fetch('https://conduit.productionready.io/api/users/login', {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ user: { email: "uniqueuser@uniqueuser.com", password: 'uniqueuseruniqueuser'}})
//   })
// 	.then(response => response.json())
// 	.then(raw => {
// 		console.log(raw)
// 		const token = raw.user.token;
	
// 	fetch('https://conduit.productionready.io/api/user', { 
// 	   method: 'put', 
// 	   headers: new Headers({
// 	      'Authorization': `Token ${token}`, 
//     	  'Content-Type': 'application/json'
// 	   }), 
// 	   body: JSON.stringify({ user: { bio: (new Date()).getTime() + "" }})
// 	 })

// });

// function *bootstrap() { // TODO babel config adjust for await and generators
// 	const rootAPI = "https://conduit.productionready.io/api/";

// 	const token = yield fetch('${rootAPI}users/login', {
// 		method: 'POST',
// 		headers: {
// 		  'Accept': 'application/json',
// 		  'Content-Type': 'application/json'
// 		},
// 		body: JSON.stringify({ user: { email: "uniqueuser@uniqueuser.com", password: 'uniqueuseruniqueuser'}})
// 	})
// 	.then(response => response.json());

// 	const posts = yield fetch('${rootAPI}user', { 
// 	   method: 'put', 
// 	   headers: new Headers({
// 	      'Authorization': `Token ${token}`, 
//     	  'Content-Type': 'application/json'
// 	   }), 
// 	   body: JSON.stringify({ user: { bio: (new Date()).getTime() + "" }})
// 	 })
// }
// console.log(bootstrap().next().value.then())

render(
  <div>
    <DevTools />
    <PostList store={store} />
  </div>,
  document.getElementById("root")
);

store.addTodo({ title: "Get Coffee", description: "This is the description", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", tagList: ["some", "tags", "ofthis"]  });
store.addTodo({ title: "Write simpler code", description: "This is the description", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", tagList: ["some", "tags", "ofthis"]  });
// store.todos[0].finished = true;
