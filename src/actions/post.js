import axios from "axios";
import {
  FETCH_POST
} from "./types";

const API_URL = process.env.REACT_APP_API_URL;
const API_URL_CONTENTFUL = process.env.REACT_APP_API_URL_CONTENTFUL;

var queryDetail = `
query Get_Post($id: ID!) {
  getPost(id: $id) { id, title, summary, content, photo, comments{comment, user {name}}, createdAt, updatedAt, status, user { id, email, name }}
}
`;

var queryDetailContentful = `
query Get_Post($slug: String!) {
  blogPostCollection(limit: 1, where: { slug: $slug }) {
    items {
      publishDate
      slug
      tags
      title
      body
      heroImage {
        url
      }
      description
      linkedFrom {
        commentCollection {
          total
          items {
            comment
            author {
              name
              email
            }
            sys {
              publishedAt
            }
          }
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

export function getPostFromAPI(id) {
  return async function (dispatch) {
    const response = await axios.post(API_URL, { query: queryDetail, variables: { id } });
    return dispatch(getPost(response.data.data.getPost));
  };
}

function getPost(post) {
  return {
    type: FETCH_POST,
    post: post || {},
  };
}

const config_contentful = {
  headers: {
    'Authorization': `Bearer ${process.env.REACT_APP_API_TOKEN}`,
  }
};
export function getPostFromAPIContentful(slug) {
  return async function (dispatch) {
    const response = await axios.post(API_URL_CONTENTFUL, { query: queryDetailContentful, variables: { slug } }, config_contentful);
    return dispatch(getPost(response.data && response.data.data && response.data.data.blogPostCollection.items[0]));
  };
}

