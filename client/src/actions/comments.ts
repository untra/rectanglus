import { commentsTypes, CommentT } from '../constants'

export default {
  fetchCommentsRequest,
  setComments,
  fetchCommentsFailure,
  createCommentRequest,
  setComment,
  createCommentFailure,
  deleteCommentRequest,
  deleteComment,
  deleteCommentFailure,
  updateCommentRequest,
  updateComment,
  updateCommentFailure
}

export function fetchCommentsRequest(todoId: number) {
  return {
    type: commentsTypes.FETCH_COMMENTS_REQUEST,
    payload: {
      todoId
    }
  }
}

export function setComments(comments: CommentT) {
  return {
    type: commentsTypes.FETCH_COMMENTS_SUCCESS,
    payload: {
      comments
    }
  }
}

export function fetchCommentsFailure() {
  return {
    type: commentsTypes.FETCH_COMMENTS_FAILURE
  }
}

export function createCommentRequest(todoId: number, comment: CommentT) {
  return {
    type: commentsTypes.CREATE_COMMENT_REQUEST,
    payload: {
      todoId,
      comment
    }
  }
}

export function setComment(comment: CommentT) {
  return {
    type: commentsTypes.CREATE_COMMENT_SUCCESS,
    payload: {
      comment
    }
  }
}

export function createCommentFailure() {
  return {
    type: commentsTypes.CREATE_COMMENT_FAILURE
  }
}

export function deleteCommentRequest(todoId: number, id: number) {
  return {
    type: commentsTypes.DELETE_COMMENT_REQUEST,
    payload: {
      todoId,
      id
    }
  }
}

export function deleteComment(id: number) {
  return {
    type: commentsTypes.DELETE_COMMENT_SUCCESS,
    payload: {
      id
    }
  }
}

export function deleteCommentFailure(id: number) {
  return {
    type: commentsTypes.DELETE_COMMENT_FAILURE,
    payload: {
      id
    }
  }
}

export function updateCommentRequest(todoId: number, id: number, changes: []) {
  return {
    type: commentsTypes.UPDATE_COMMENT_REQUEST,
    payload: {
      todoId,
      id,
      changes
    }
  }
}

export function updateComment(comment: CommentT) {
  return {
    type: commentsTypes.UPDATE_COMMENT_SUCCESS,
    payload: {
      comment
    }
  }
}

export function updateCommentFailure(id: number) {
  return {
    type: commentsTypes.UPDATE_COMMENT_FAILURE,
    payload: {
      id
    }
  }
}
