import { FETCH_COMMENTS, ADD_COMMENT } from './actionTypes';
const url = 'http://localhost:3001/comments';

export const fetchComments = () => {
  return async (dispatch) => {
    const data = await fetch(url);
    const comments = await data.json();
    dispatch(onCommentsFetched(comments));
  }
}

export const addComment = (comment) => {
  return async (dispatch) => {
    const result = await fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      }, 
      body: JSON.stringify(comment),
    });

    if (result.status === 201) {
      dispatch(onCommentAdded(comment));
    }
  }
}

const onCommentsFetched = (comments) => {
  return {
    type: FETCH_COMMENTS,
    payload: comments,
  }
}

const onCommentAdded = (comment) => {
  return {
    type: ADD_COMMENT,
    payload: comment,
  }
}