export const addNewExercise = (exerciseObj) => async (dispatch) => {
  console.log('inside add new exercise');
  try {
    const response = await fetch('/api/exercises', {
      method: 'POST',
      body: JSON.stringify(exerciseObj),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });
    console.log(response);
    const data = await response.json();
    if (data.error) {
      dispatch({ type: 'ADD_EXERCISE_FAILURE', payload: data.error });
      return;
    }
    console.log(data);
    dispatch({ type: 'ADD_EXERCISE_SUCCESS', payload: data.allExercises });
  } catch (error) {
    dispatch({ type: 'ADD_EXERCISE_FAILURE', payload: error });
  }
};

export const fetchAllExercises = () => async (dispatch) => {
  try {
    const response = await fetch('/api/exercises');

    const data = await response.json();
    dispatch({ type: 'GET_EXERCISE_SUCCESS', payload: data.allExercises });
    if (data.error) {
      dispatch({ type: 'GET_EXERCISE_SUCCESS', payload: data.error });
      return;
    }
  } catch (error) {
    dispatch({ type: 'GET_EXERCISE_SUCCESS', payload: error });
  }
};

export const deleteExercise = (id) => async (dispatch) => {
  try {
    console.log('onside delete');
    const response = await fetch(`/api/exercises/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    });
    const data = await response.json();
    if (data.error) {
      dispatch({ type: 'DELETE_EXERCISE_FAILURE', payload: data.error });
      return;
    }
    dispatch({ type: 'DELETE_EXERCISE_SUCCESS', payload: data.allExercises });
  } catch (error) {
    dispatch({ type: 'DELETE_EXERCISE_FAILURE', payload: error });
  }
};
