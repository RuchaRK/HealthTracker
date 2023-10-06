import * as React from 'react';
import { Error } from '../Components/Error';
import { ListPage } from '../Components/ListPage';
import { Loader } from '../Components/Loader';
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

export const Goals = () => {
  const [goals, setGoals] = React.useState([]);
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
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const addData = async (goalsObj) => {
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
      if (data) {
        setGoals(data.allGoals);
        closeModal();
      }
    } catch (error) {
      setIsError(true);
    }
  };

  const fetchData = async () => {
    try {
      const data = await fetch('/api/goals');
      const response = await data.json();

      if (response?.message === 'Success') {
        setGoals(response.allGoals);
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

  const column = [
    'Name',
    'Calories Type',
    'Description',
    'Target Date',
    'Target Calories',
    'Status'
  ];

  const listData = goals.map((data) => [
    data.name,
    data.caloriesType,
    data.description,
    format(new Date(data.targetDate), 'EEEE, do MMM yyyy'),
    data.targetCalories,
    data.status
  ]);

  return (
    <>
      <ListPage
        column={column}
        data={listData}
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
