import * as React from 'react';
import { Error } from '../Components/Error';
import { ListPage } from '../Components/ListPage';
import { Loader } from '../Components/Loader';
import { Model } from '../Components/Model';
import { useDispatch, useSelector } from 'react-redux';
import { addNewExercise, fetchAllExercises, deleteExercise } from '../Actions/exerciseActions';
import { AiOutlineDelete } from 'react-icons/ai';
import {
  ButtonSave,
  ButtonClose,
  Title,
  FormContainer,
  ButtonContainer,
  Input
} from '../Components/Model.styles';

export const Exercise = () => {
  const dispatch = useDispatch();
  const { exercise } = useSelector((state) => state.exercise);
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

  React.useEffect(() => {
    dispatch(fetchAllExercises());
  }, [dispatch]);

  return (
    <>
      <ListPage
        column={['Name', 'Duration(minutes)', 'Calories Burned']}
        data={exercise.map((data) => [
          data.name,
          data.durationInMinutes,
          data.caloriesBurned,
          <button key={data._id} onClick={() => dispatch(deleteExercise(data._id))}>
            <AiOutlineDelete />
          </button>
        ])}
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
          {error && <p style={{ color: 'red' }}>Somthing went wrong while adding Goal</p>}
          <ButtonContainer>
            <ButtonSave
              onClick={() => {
                addNewExercise(formData);
                closeModal();
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
