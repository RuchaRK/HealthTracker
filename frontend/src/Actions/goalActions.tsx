export const addNewGoal = (goalsObj) => async (dispatch) => {
  try {
    const response = await fetch('/api/goals', {
      method: 'POST',
      body: JSON.stringify(goalsObj),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    if (data.error) {
      dispatch({ type: 'ADD_GOAL_FAILURE', payload: data.error });
      return;
    }
    dispatch({ type: 'ADD_GOAL_SUCCESS', payload: data.allGoals });
  } catch (error) {
    dispatch({ type: 'ADD_GOAL_FAILURE', payload: error });
  }
};

export const fetchGoals = () => async (dispatch) => {
  try {
    const response = await fetch('/api/goals');
    const data = await response.json();
    if (data.error) {
      dispatch({ type: 'GET_GOAL_FAILURE', payload: data.error });
      return;
    }
    dispatch({ type: 'GET_GOAL_SUCCESS', payload: data.allGoals });
  } catch (error) {
    dispatch({ type: 'GET_GOAL_FAILURE', payload: error });
  }
};

export const deleteGoal = (id) => async (dispatch) => {
  try {
    const response = await fetch(`/api/goals/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    });
    const data = await response.json();
    if (data.error) {
      dispatch({ type: 'DELETE_GOAL_FAILURE', payload: data.error });
      return;
    }
    dispatch({ type: 'DELETE_GOAL_SUCCESS', payload: data.allGoals });
  } catch (error) {
    dispatch({ type: 'DELETE_GOAL_FAILURE', payload: error });
  }
};
