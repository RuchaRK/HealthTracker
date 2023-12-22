export const addNewDiet = (foodObj) => async (dispatch) => {
  try {
    const response = await fetch('/api/food', {
      method: 'POST',
      body: JSON.stringify(foodObj),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    if (data.error) {
      dispatch({ type: 'ADD_DIET_FAILURE', payload: data.error });
      return;
    }
    dispatch({ type: 'ADD_DIET_SUCCESS', payload: data.foodItems });
  } catch (error) {}
};

export const fetchDiets = () => async (dispatch) => {
  try {
    const response = await fetch('/api/food');

    const data = await response.json();

    dispatch({ type: 'GET_DIET_SUCCESS', payload: data.foodItems });
    if (data.error) {
      dispatch({ type: 'GET_DIET_FAILURE', payload: data.error });
      return;
    }
  } catch (error) {
    dispatch({ type: 'GET_DIET_FAILURE', payload: error });
  }
};

export const deleteDiet = (id) => async (dispatch) => {
  try {
    const response = await fetch(`/api/food/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    });
    const data = await response.json();
    if (data.error) {
      dispatch({ type: 'DELETE_DIET_FAILURE', payload: data.error });
      return;
    }
    dispatch({ type: 'DELETE_DIET_SUCCESS', payload: data.foodItems });
  } catch (error) {
    dispatch({ type: 'DELETE_DIET_FAILURE', payload: error });
  }
};
