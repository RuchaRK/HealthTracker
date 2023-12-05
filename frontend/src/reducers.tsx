const initialState = { exercise: [], diet: [], goal: [], loading: true, error: null };

export const exerciseReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_EXERCISE_SUCCESS':
      return {
        ...state,
        exercise: action.payload,
        loading: false,
        error: null
      };
    case 'ADD_EXERCISE_FAILURE':
      return {
        ...state,
        loading: false,
        error: 'Error while adding new exercise details,please try again.'
      };

    case 'GET_EXERCISE_SUCCESS':
      return {
        ...state,
        exercise: action.payload,
        loading: false,
        error: null
      };

    case 'GET_EXERCISE_FAILURE':
      return {
        ...state,
        loading: false,
        error: 'Error while fetching the exercise list,please try again.'
      };
    case 'DELETE_EXERCISE_SUCCESS':
      return {
        ...state,
        exercise: action.payload,
        loading: false,
        error: null
      };
    case 'DELETE_EXERCISE_FAILURE':
      return {
        ...state,
        loading: false,
        error: 'Error while deleting the exercise details,please try again.'
      };

    case 'ADD_DIET_SUCCESS':
      return {
        ...state,
        diet: action.payload,
        loading: false,
        error: null
      };
    case 'ADD_DIET_FAILURE':
      return {
        ...state,
        loading: false,
        error: 'Error while adding new exercise details,please try again.'
      };

    case 'GET_DIET_SUCCESS':
      return {
        ...state,
        diet: action.payload,
        loading: false,
        error: null
      };

    case 'GET_DIET_FAILURE':
      return {
        ...state,
        loading: false,
        error: 'Error while fetching the exercise list,please try again.'
      };
    case 'DELETE_DIET_SUCCESS':
      return {
        ...state,
        diet: action.payload,
        loading: false,
        error: null
      };
    case 'DELETE_DIET_FAILURE':
      return {
        ...state,
        loading: false,
        error: 'Error while deleting the exercise details,please try again.'
      };

    case 'ADD_GOAL_SUCCESS':
      return {
        ...state,
        goal: action.payload,
        loading: false,
        error: null
      };
    case 'ADD_GOAL_FAILURE':
      return {
        ...state,
        loading: false,
        error: 'Error while adding new exercise details,please try again.'
      };

    case 'GET_GOAL_SUCCESS':
      return {
        ...state,
        goal: action.payload,
        loading: false,
        error: null
      };

    case 'GET_GOAL_FAILURE':
      return {
        ...state,
        loading: false,
        error: 'Error while fetching the exercise list,please try again.'
      };
    case 'DELETE_GOAL_SUCCESS':
      return {
        ...state,
        goal: action.payload,
        loading: false,
        error: null
      };
    case 'DELETE_GOAL_FAILURE':
      return {
        ...state,
        loading: false,
        error: 'Error while deleting the exercise details,please try again.'
      };

    default:
      return state;
  }
};
