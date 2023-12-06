import { format } from 'date-fns';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewGoal, deleteGoal, fetchGoals } from '../Actions/goalActions';
import { ListPage } from '../Components/ListPage';
import { Model } from '../Components/Model';
import {
  ButtonClose,
  ButtonContainer,
  ButtonSave,
  FormContainer,
  Input,
  Title,
  Select
} from '../Components/Model.styles';

import { AiOutlineDelete } from 'react-icons/ai';

export const Goals = () => {
  const dispatch = useDispatch();
  const goal = useSelector((store) => store.goal);
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

  React.useEffect(() => {
    dispatch(fetchGoals());
  }, [dispatch]);

  console.log(formData);
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
          <Select name="caloriesType" onClick={(event) => saveFormData(event)}>
            <option value="Consumed">Consumed</option>
            <option value="Burned">Burned</option>
          </Select>
          Description:
          <Input type="text" name="description" onChange={(event) => saveFormData(event)} />
          Target Date:
          <Input type="date" name="targetDate" onChange={(event) => saveFormData(event)} />
          Target-Calories:
          <Input type="number" name="targetCalories" onChange={(event) => saveFormData(event)} />
          Status:
          <Select name="status" onClick={(event) => saveFormData(event)}>
            <option value="InProgress">InProgress</option>
            <option value="Achieved">Achieved</option>
            <option value="Abandoned">Abandoned</option>
          </Select>
          <ButtonContainer>
            <ButtonSave
              onClick={() => {
                dispatch(addNewGoal(formData));
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
