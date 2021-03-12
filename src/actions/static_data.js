
import {
    FETCH_CATEGORIES,
    FETCH_ARCHIVES,
    FETCH_TAGS,
    FETCH_CONTACT
} from "./types";

const state = {
    archives: [
        { month: 'October 2018', count: 6 },
        { month: 'September 2018', count: 8 },
        { month: 'August 2018', count: 16 },
        { month: 'July 2018', count: 60 },
        { month: 'June 2018', count: 30 },
    ],
    categories: [
        { name: 'Photography', count: 33 },
        { name: 'Fashion', count: 3 },
        { name: 'Technology', count: 6 },
        { name: 'Travel', count: 303 },
    ],
    tags: [
        { keyword: 'animals' },
        { keyword: 'human' },
        { keyword: 'people' },
        { keyword: 'cat' },
        { keyword: 'dog' },
        { keyword: 'nature' },
        { keyword: 'leaves' },
        { keyword: 'food' },
    ],
    contact: {
        tel: '+2 392 3929 210',
        address: '203 Fake St. Mountain View, San Francisco, California, USA',
        email: 'dev@dangkhoa2016.tk',
        website: 'https://react-redux-blog2.dangkhoa2016.tk'
    }
};

export function getCategories() {
    return function (dispatch) {
        return dispatch({
            type: FETCH_CATEGORIES,
            categories: state['categories'],
        });
    }
}

export function getArchives() {
    return function (dispatch) {
        return dispatch({
            type: FETCH_ARCHIVES,
            archives: state['archives'],
        });
    }
}

export function getTags() {
    return function (dispatch) {
        return dispatch({
            type: FETCH_TAGS,
            tags: state['tags'],
        });
    }
}

export function getContact() {
    return function (dispatch) {
        return dispatch({
            type: FETCH_CONTACT,
            contact: state['contact'],
        });
    }
}
