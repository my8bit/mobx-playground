import { observable, computed, action } from "mobx";
import { types, getSnapshot } from "mobx-state-tree";
import { PostModel } from "./PostModel";

export const PostListModelMobxState = types.model({
	// posts: types.map(PostModel) // TODO try with Map
	posts: types.array(PostModel)
})
.actions(self => ({
	addTodo(post) { // TODO refactor later
		self.posts.push(post);
		// console.log(post);
	}
}));
