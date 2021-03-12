import {
    FETCH_POST
} from "../actions/types";

export default function rootReducer(state = {}, action) {

    switch (action.type) {

        case FETCH_POST:
            return { ...state, [action.post.slug || action.post.id]: action.post };

        default:
            return state;
    }
}
