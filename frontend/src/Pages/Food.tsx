import * as React from 'react';
import { Error } from '../Components/Error';
import { ListPage } from '../Components/ListPage';
import { Loader } from '../Components/Loader';
import { Model } from '../Components/Model';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDiets, deleteDiet, addNewDiet } from '../Actions/dietActions';
import {
  ButtonSave,
  ButtonClose,
  Title,
  FormContainer,
  ButtonContainer,
  Input
} from '../Components/Model.styles';
import { AiOutlineDelete } from 'react-icons/ai';

export const Food = () => {
  const dispatch = useDispatch();
  const { diet } = useSelector((state) => state.diet);
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
    dispatch(fetchDiets());
  }, [dispatch]);

  return (
    <>
      <ListPage
        column={['Name', 'Calories', 'Proteins(in gm)', 'Carbohydrates(in gm)', 'Fat(in gm)']}
        data={diet.map((data) => [
          data.name,
          data.calories,
          data.proteinsInGrams,
          data.carbohydratesInGrams,
          data.fatInGrams,
          <button key={data._id} onClick={() => dispatch(deleteDiet(data._id))}>
            <AiOutlineDelete />
          </button>
        ])}
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
          {error && <p style={{ color: 'red' }}>Somthing went wrong while adding Goal</p>}
          <ButtonContainer>
            <ButtonSave
              onClick={() => {
                addNewDiet(formData);
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
