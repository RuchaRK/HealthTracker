import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';
import { fetchAllExercises } from '../Actions/exerciseActions';
import { fetchDiets } from '../Actions/dietActions';
import { fetchGoals } from '../Actions/goalActions';
import { IconContainer } from '../Components/SideBar';
import { ImFire } from 'react-icons/im';
import { MdFoodBank } from 'react-icons/md';
import { IoMdCheckbox } from 'react-icons/io';
import { BsHourglassSplit } from 'react-icons/bs';

export const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  padding: 48px 44px;
`;

export const LeftContainer = styled.div`
  flex: 0.6;
  display: flex;
  gap: 28px;
  flex-direction: column;
  padding: 24px 32px;
  align-items: center;
  justify-content: center;
`;

export const TextAndDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px 12px;
  align-items: center;
  justify-content: center;
  box-shadow: 10px 10px 5px 0px rgba(168, 165, 168, 1);
  border-radius: 12px;
  width: 300px;
  background: white;
`;

export const RightContainer = styled.div`
  flex: 0.4;
  display: flex;
  align-items: end;
  justify-content: flex-end;
`;

export const DashBoard = () => {
  const dispatch = useDispatch();
  const exercises = useSelector((state) => state.exercise);
  const goal = useSelector((state) => state.goal);
  const diet = useSelector((state) => state.diet);

  React.useEffect(() => {
    dispatch(fetchAllExercises());
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(fetchDiets());
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(fetchGoals());
  }, [dispatch]);

  return (
    <MainContainer>
      <LeftContainer>
        <TextAndDataContainer style={{}}>
          <IconContainer>
            <ImFire />
            <h4>Total Calories Burned</h4>
          </IconContainer>
          <p>
            <strong>
              {exercises.length > 0 && exercises.reduce((acc, cum) => acc + cum.caloriesBurned, 0)}
            </strong>
          </p>
        </TextAndDataContainer>
        <TextAndDataContainer>
          <IconContainer>
            <MdFoodBank />
            <h4>Total Calories Consumed</h4>
          </IconContainer>
          <p>
            <strong>
              {diet.length > 0 &&
                diet.reduce((acc, cum) => acc + cum.calories, 0) +
                  (goal.length > 0 &&
                    goal.reduce((acc, cum) => {
                      if (cum.caloriesType === 'Consumed') {
                        return acc + cum.targetCalories;
                      }
                      return acc;
                    }, 0))}
            </strong>
          </p>
        </TextAndDataContainer>
        <TextAndDataContainer>
          <IconContainer>
            <IoMdCheckbox />
            <h4>Total Calories Goal</h4>
          </IconContainer>
          <p>
            <strong>
              {goal.length > 0 &&
                goal.reduce((acc, cum) => {
                  if (cum.caloriesType === 'Burned') {
                    return acc + cum.targetCalories;
                  }
                  return acc;
                }, 0)}
            </strong>
          </p>
        </TextAndDataContainer>
        <TextAndDataContainer>
          <IconContainer>
            <BsHourglassSplit />
            <h4>Remaining Calories to Goal</h4>
          </IconContainer>
          <p>
            <strong>
              {(goal.length > 0 &&
                goal.reduce((acc, cum) => {
                  if (cum.caloriesType === 'Burned') {
                    return acc + cum.targetCalories;
                  }
                  return acc;
                }, 0)) -
                (exercises.length > 0 &&
                  exercises.reduce((acc, cum) => acc + cum.caloriesBurned, 0))}
            </strong>
          </p>
        </TextAndDataContainer>
      </LeftContainer>
      <RightContainer>
        <img src="images/fitness.svg" height="500px" width="500px" />
      </RightContainer>
    </MainContainer>
  );
};
