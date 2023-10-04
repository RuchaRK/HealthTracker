import * as React from 'react';
import { ListPage } from '../Components/ListPage';

export const Food = () => {
  const [diet, setDiet] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setIsError] = React.useState(false);

  const fetchData = async () => {
    try {
      const data = await fetch('/api/food');
      const response = await data.json();

      if (response?.message === 'Success') {
        setDiet(response.foodItems);
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

  const column = ['Name', 'Calories', 'Proteins(in gm)', 'Carbohydrates(in gm)', 'Fat(in gm)'];

  const listData = diet.map((data) => [
    data.name,
    data.calories,
    data.proteinsInGrams,
    data.carbohydratesInGrams,
    data.fatInGrams
  ]);

  console.log(listData);

  return (
    <ListPage
      column={column}
      data={listData}
      title="Plan your Diet today."
      description="The only bad workout is the one that didn't come with a good meal afterward."
      image="/images/food.png"
    />
  );
};
