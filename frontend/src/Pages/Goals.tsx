import * as React from 'react';
import { ListPage } from '../Components/ListPage';
import { format } from 'date-fns';
import { Model } from '../Components/Model';
import {
  ButtonSave,
  ButtonClose,
  Title,
  FormContainer,
  ButtonContainer,
  Input
} from '../Components/Model.styles';
import { useDispatch, useSelector } from 'react-redux';
const { addNewGoal, fetchGoals, deleteGoal } = require('../Actions/goalActions');
import { AiOutlineDelete } from 'react-icons/ai';

export const Goals = () => {
  const dispatch = useDispatch();
  const { goal } = useSelector((store) => store.goal);
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
    dispatch(fetchGoals());
  }, [dispatch]);

  return (
    <>
      <ListPage
        column={[
          'Name',
          'Calories Type',
          'Description',
          'Target Date',
          'Target Calories',
          'Status'
        ]}
        data={goal.map((data) => [
          data.name,
          data.caloriesType,
          data.description,
          format(new Date(data.targetDate), 'EEEE, do MMM yyyy'),
          data.targetCalories,
          data.status,
          <button key={data._id} onClick={() => dispatch(deleteGoal(data._id))}>
            <AiOutlineDelete />
          </button>
        ])}
        title="You are never too old to set a new Goal."
        description="The only limit to your impact is your imagination and commitment."
        image="/images/goal.png"
        openForm={openModal}
      />

      <Model isOpen={modalIsOpen} onRequestClose={closeModal}>
        <FormContainer>
          <Title>New Food</Title>
          Name: <Input type="text" name="name" onChange={(event) => saveFormData(event)} />
          Calories Type:
          <Input type="text" name="caloriesType" onChange={(event) => saveFormData(event)} />
          Description:
          <Input type="text" name="description" onChange={(event) => saveFormData(event)} />
          Target Date:
          <Input type="date" name="targetDate" onChange={(event) => saveFormData(event)} />
          Target-Calories:
          <Input type="number" name="targetCalories" onChange={(event) => saveFormData(event)} />
          Status:
          <Input type="text" name="status" onChange={(event) => saveFormData(event)} />
          <ButtonContainer>
            <ButtonSave
              onClick={() => {
                addNewGoal(formData);
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
