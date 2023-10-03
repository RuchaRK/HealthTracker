import './App.css';
import { PageWrapper } from './Components/PageWrapper';
import { Route, Routes } from 'react-router-dom';
import { DashBoard } from './Pages/DashBoard';
import { Exercise } from './Pages/Exercise';
import { Food } from './Pages/Food';
import { Goals } from './Pages/Goals';
import { routeName } from './App.routes';

function App() {
  return (
    <>
      <PageWrapper>
        <Routes>
          <Route path={routeName.DashBoard} element={<DashBoard />} />
          <Route path={routeName.EXERCISE} element={<Exercise />} />
          <Route path={routeName.FOOD} element={<Food />} />
          <Route path={routeName.GOALS} element={<Goals />} />
        </Routes>
      </PageWrapper>
    </>
  );
}

export default App;
