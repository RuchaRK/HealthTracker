export const addNewDiet = (foodObj) => async (dispatch) => {
  console.log(foodObj);
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
    dispatch({ type: 'ADD_DIET_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'ADD_DIET_FAILURE', payload: error });
  }
};

export const fetchDiets = () => async (dispatch) => {
  try {
    const response = await fetch('/api/food');
    const data = await response.json();

    dispatch({ type: 'GET_DIET_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'GET_DIET_FAILURE', payload: error });
  }
};

export const deleteDiet = (id) => async (dispatch) => {
  try {
    const response = await fetch(`/api/items/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    });
    const data = await response.json();
    dispatch({ type: 'DELETE_DIET_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'DELETE_DIET_FAILURE', payload: error });
  }
};
