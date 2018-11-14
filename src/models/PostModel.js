import { observable } from "mobx";
import { types } from "mobx-state-tree";

export const PostModel = types.model({
    title: "",
    done: false,
    id: 0,
    // id: 0 // TODO investigate why it's failing without this line
});
