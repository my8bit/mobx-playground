import { observable } from "mobx";
import { types } from "mobx-state-tree";

export const PostModel = types.model("Post", { // TODO: { article: {} } // TODO: what name means???
    title: "",
    description: "",
    body: "",   // TODO add types
    tagList: types.array(types.string)
});

/*
 *  Structure format is:
 * 
	{
	  "article": {
	    "title": "How to train your dragon",
	    "description": "Ever wonder how?",
	    "body": "You have to believe",
	    "tagList": ["reactjs", "angularjs", "dragons"]
	  }
	}
 */
