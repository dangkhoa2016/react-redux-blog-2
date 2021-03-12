import {
    FETCH_POSTS,
} from "../actions/types";

export default function rootReducer(state = [], action) {
    switch (action.type) {

        case FETCH_POSTS:
            var total = action.posts.last_page || 0;
            if (!total)
                total = Math.ceil(action.posts.total / action.posts.limit);
            return action.posts ? { posts: action.posts.data || action.posts.items, total } : {};

        default:
            return state;
    }
}
