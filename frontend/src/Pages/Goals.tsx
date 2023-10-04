import * as React from 'react';
import { ListPage } from '../Components/ListPage';

export const Goals = () => {
  const [goals, setGoals] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setIsError] = React.useState(false);

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
    return <h3>Data still loading </h3>;
  }
  if (error) {
    return <h3>Error occurred</h3>;
  }

  const column = ['Name', 'Calories', 'Proteins', 'Carbohydrates', 'Fat'];

  const listData = goals.map((data) => [
    data.name,
    data.calories,
    data.proteinsInGrams,
    data.carbohydratesInGrams,
    data.fatInGrams
  ]);

  return (
    <ListPage
      column={column}
      data={listData}
      title="You are never too old to set a new Goal."
      description="The only limit to your impact is your imagination and commitment."
      image="/images/goal.png"
    />
  );
};
