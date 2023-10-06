import * as React from 'react';
import { Error } from '../Components/Error';
import { ListPage } from '../Components/ListPage';
import { Loader } from '../Components/Loader';
import { Model } from '../Components/Model';
import {
  ButtonSave,
  ButtonClose,
  Title,
  FormContainer,
  ButtonContainer,
  Input
} from '../Components/Model.styles';

export const Food = () => {
  const [diet, setDiet] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setIsError] = React.useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({});

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const saveFormData = (event) => {
    console.log(event.target.value);
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const addData = async (foodObj) => {
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

      if (data) {
        setDiet(data.allFoodItems);
        closeModal();
      }
    } catch (error) {
      setIsError(true);
    }
  };

  const fetchData = async () => {
    try {
      const data = await fetch('/api/food');
      const response = await data.json();

      if (response?.message === 'Success') {
        setDiet(response.foodItems);
      }
    } catch (error) {
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <Error/>;
  }
  const column = ['Name', 'Calories', 'Proteins(in gm)', 'Carbohydrates(in gm)', 'Fat(in gm)'];

  const listData = diet.map((data) => [
    data.name,
    data.calories,
    data.proteinsInGrams,
    data.carbohydratesInGrams,
    data.fatInGrams
  ]);

  return (
    <>
      <ListPage
        column={column}
        data={listData}
        title="Plan your Diet today."
        description="The only bad workout is the one that didn't come with a good meal afterward."
        image="/images/food.png"
        openForm={openModal}
      />

      <Model isOpen={modalIsOpen} onRequestClose={closeModal}>
        <FormContainer>
          <Title>New Food</Title>
          Name: <Input type="text" name="name" onChange={(event) => saveFormData(event)} />
          Calories:
          <Input type="text" name="calories" onChange={(event) => saveFormData(event)} />
          Proteins (in grams):
          <Input type="number" name="proteinsInGrams" onChange={(event) => saveFormData(event)} />
          Carbohydrates (in grams):
          <Input
            type="text"
            name="carbohydratesInGrams"
            onChange={(event) => saveFormData(event)}
          />
          Fats (in grams):
          <Input type="text" name="fatInGrams" onChange={(event) => saveFormData(event)} />
          {error && <p style={{color: "red"}}>Somthing went wrong while adding Goal</p>}
          <ButtonContainer>
            <ButtonSave
              onClick={() => {
                addData(formData);
              }}>
              Save
            </ButtonSave>
            <ButtonClose onClick={closeModal}>close</ButtonClose>
          </ButtonContainer>
        </FormContainer>
      </Model>
    </>
  );
};
