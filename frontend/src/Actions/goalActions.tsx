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
    dispatch({ type: 'ADD_GOAL_SUCCESS', payload: data.allGoals });
  } catch (error) {
    dispatch({ type: 'ADD_GOAL_FAILURE', payload: error });
  }
};

export const fetchGoals = () => async () => {
  try {
    const response = await fetch('/api/goals');
    const data = await response.json();
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
    dispatch({ type: 'DELETE_GOAL_SUCCESS', payload: data.allGoals });
  } catch (error) {
    dispatch({ type: 'DELETE_GOAL_FAILURE', payload: error });
  }
};
