import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { userRoutes } from './routes/userRoutes';
import './assets/data/dataMenu'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {userRoutes.map(({ path, component }, index) => {
          return <Route key={index} path={path} element={component} />
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
