import * as React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { addNewExercise, deleteExercise, fetchAllExercises } from '../Actions/exerciseActions';
import { ListPage } from '../Components/ListPage';
import { Model } from '../Components/Model';
import {
  ButtonClose,
  ButtonContainer,
  ButtonSave,
  FormContainer,
  Input,
  Title
} from '../Components/Model.styles';

export const Exercise = () => {
  const dispatch = useDispatch();
  const exercise = useSelector((state) => state.exercise);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({});

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const saveFormData = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  console.log(formData);

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
          <ButtonContainer>
            <ButtonSave
              onClick={() => {
                dispatch(addNewExercise(formData));
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
