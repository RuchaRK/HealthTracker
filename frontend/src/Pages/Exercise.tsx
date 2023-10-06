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

export const Exercise = () => {
  const [exercises, setExercises] = React.useState([]);
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

  const addData = async (exerciseObj) => {
    console.log(exerciseObj);
    try {
      const response = await fetch('/api/exercises', {
        method: 'POST',
        body: JSON.stringify(exerciseObj),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      if (data) {
        setExercises(data.allExercises);
        closeModal();
      }
    } catch (error) {
      setIsError(true);
    }
  };

  const fetchData = async () => {
    try {
      const data = await fetch('/api/exercises');

      const response = await data.json();

      if (response?.message === 'Success') {
        setExercises(response.allExercises);
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
  const column = ['Name', 'Duration(minutes)', 'Calories Burned'];

  const listData = exercises.map((data) => [
    data.name,
    data.durationInMinutes,
    data.caloriesBurned
  ]);

  return (
    <>
      <ListPage
        column={column}
        data={listData}
        title="Lets start by burning some calories!!!"
        description="Don't wish for a good body, work for it..."
        image="/images/exercise1.png"
        openForm={openModal}
      />

      <Model isOpen={modalIsOpen} onRequestClose={closeModal}>
        <FormContainer>
          <Title>New Exercise</Title>
          Name : <Input type="text" name="name" onChange={(event) => saveFormData(event)} />
          Duration :
          <Input type="text" name="durationInMinutes" onChange={(event) => saveFormData(event)} />
          Calories Burned(pre Minute) :
          <Input
            type="number"
            name="caloriesBurnedPerMinute"
            onChange={(event) => saveFormData(event)}
          />
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
