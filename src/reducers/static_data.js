import {
    FETCH_CATEGORIES,
    FETCH_ARCHIVES,
    FETCH_TAGS,
    FETCH_CONTACT
} from "../actions/types";

export default function rootReducer(state = [], action) {
    switch (action.type) {
        case FETCH_CATEGORIES:
            return {...state, categories: action.categories};

        case FETCH_ARCHIVES:
            return {...state, archives: action.archives};

        case FETCH_TAGS:
            return {...state, tags: action.tags};

        case FETCH_CONTACT:
            return {...state, contact: action.contact};

        default:
            return state;
    }
}
