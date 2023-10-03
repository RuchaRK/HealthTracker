import * as React from 'react';
import { ListPage } from '../Components/listPage';

export const Exercise = () => {
  const [exercises, setExercises] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setIsError] = React.useState(false);

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
    return <h3>Data still loading </h3>;
  }
  if (error) {
    return <h3>Error occurred</h3>;
  }

  const column = ['Name', 'Duration(minutes)', 'Calories Burned'];

  const listData = exercises.map((data) => [
    data.name,
    data.durationInMinutes,
    data.caloriesBurned
  ]);

  return (
    <ListPage
      column={column}
      data={listData}
      title="Exercise"
      description="Life has its ups and downs we call it squats."
      image="/images/exercisePic.png"
    />
  );
};
