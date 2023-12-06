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
    dispatch({ type: 'ADD_DIET_SUCCESS', payload: data.foodItems });
  } catch (error) {
    dispatch({ type: 'ADD_DIET_FAILURE', payload: error });
  }
};

export const fetchDiets = () => async (dispatch) => {
  try {
    console.log('fetching');
    const response = await fetch('/api/food');
    console.log(response);
    const data = await response.json();

    dispatch({ type: 'GET_DIET_SUCCESS', payload: data.foodItems });
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
    dispatch({ type: 'DELETE_DIET_SUCCESS', payload: data.foodItems });
  } catch (error) {
    dispatch({ type: 'DELETE_DIET_FAILURE', payload: error });
  }
};
