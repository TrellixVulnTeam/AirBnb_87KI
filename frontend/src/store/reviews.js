//imports
import { csrfFetch } from "./csrf";


//Types

const GET_CURRENT_REVIEWS = '/reviews/reviewInfo'
const CREATE_REVIEW = '/reviews/addReview'
const DELETE_REVIEW = '/reviews/deleteReview'



//Actions
const actionGetCurrentReviews = (reviews) => {
  return {
    type: GET_CURRENT_REVIEWS,
    reviews
  }
}

const actionCreateReview = (review) => {
  return {
    type: CREATE_REVIEW,
    review
  }
};

const actionDeleteReview = (id) => {
  return {
    type: DELETE_REVIEW,
    id
  }
};

// ******************* Thunk Section *****************

// *************** GET REVIEWS
export const thunkGetCurrentReviews = (spotId) => async (dispatch) => {
  // console.log('THUNK CODE STARTS RUNNING, RIGHT BEFORE FETCH'
  const response = await csrfFetch(`/api/spots/${spotId}/reviews`)
  // console.log('THIS IS THE RESPONSE RETURNED FROM FETCH;', response)

  if (response.ok) {
    const reviews = await response.json();
    console.log('THIS IS THE LIST DATA AFTER RES.JSON-ING THE RESPONSE', reviews);

    console.log('BEFORE THE THUNK DISPATCHES THE ACTION')
    dispatch(actionGetCurrentReviews(reviews));
    console.log('AFTER THE THUNK DISPATCHES THE ACTION')
    return response
  }
  return response
  // await response.json();
};



// *************** CREATE/POST
export const thunkCreateReview = (review) => async (dispatch) => {
  const response = await csrfFetch('/api/reviews', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(review)
  })
  if (response.ok) {
    const newReview = await response.json()
    dispatch(actionCreateReview(newReview))
    return newReview
  }
  const err = await response.json()
  return err
};




// *************** Delete
export const thunkDeleteReview = (reviewId) => async dispatch => {
  const response = await csrfFetch(`/api/reviews/${reviewId}`, {
    method: 'DELETE',
    body: JSON.stringify(reviewId)
  })
  if (response.ok) {
    const deleteReview = await response.json()
    dispatch(actionDeleteReview(deleteReview))
    return 'deleted'
  }
  return response
}





// ********************* Reducers ********************

const reviewReducer = (state = {}, action) => {
  let newState;

  switch (action.type) {

    case GET_CURRENT_REVIEWS:
      newState = { ...state }
      console.log('action-------',action)
      console.log('action.reviews--------',action.reviews)
      action.reviews.forEach(review => {
        newState[review.id] = review
      })
      return newState


    case CREATE_REVIEW: { //complete
      newState = { ...state };
      newState[action.review.id] = action.review
      return newState;
    }


    case DELETE_REVIEW: {  //complete
      newState = { ...state }
      delete newState[action.id]
      return newState
    }

    default:
      return state;
  }
}

export default reviewReducer
