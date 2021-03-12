import axios from 'axios';
import { FETCH_POSTS } from "./types";
const API_URL = process.env.REACT_APP_API_URL;
const API_URL_CONTENTFUL = process.env.REACT_APP_API_URL_CONTENTFUL;

var queryList = `
query Get_Posts($page_index: Int, $page_size: Int) {
    posts_paging_info(page_index: $page_index, page_size: $page_size) {
        data {
          id, title, summary, photo, comments{id}, createdAt, updatedAt, status, user { id, email, name }
        }, current_page, last_page, total
    }
}
`;

var queryListContentful = `
query Get_Posts($limit: Int, $skip: Int) {
  blogPostCollection(limit: $limit, skip: $skip, where: { status: "active" }) {
    total
    skip
    limit
    items {
      publishDate
      slug
      tags
      title
      heroImage {
        url
      }
      description
      linkedFrom {
        commentCollection {
          total
        }
      }
      author {
        name
        email
      }
    }
  }
}
`;

var default_page_size = 3;
export function getPostsFromAPI(page_index, page_size) {
    page_size = page_size || default_page_size;
    return async function (dispatch) {
        const response = await axios.post(API_URL, { query: queryList, variables: { page_size, page_index: (page_index || 1) } });
        return dispatch(getPosts(response.data.data.posts_paging_info));
    };
}

function getPosts(posts_paging_info) {
    return {
        type: FETCH_POSTS,
        posts: posts_paging_info,
    };
}


var page_size_Contentful = 4;
const config_contentful = {
  headers: {
    'Authorization': `Bearer ${process.env.REACT_APP_API_TOKEN}`,
  }
};

export function getPostsFromAPIContentful(page_index, page_size) {
    page_index = page_index || 1;
    if (page_index < 1)
        page_index = 1;
    page_size = page_size || page_size_Contentful;
    var skip = (page_index - 1) * page_size;

    return async function (dispatch) {
        const response = await axios.post(API_URL_CONTENTFUL, { query: queryListContentful, variables: { limit: page_size, skip } }, config_contentful);
        return dispatch(getPosts(response.data.data.blogPostCollection));
    };
}
