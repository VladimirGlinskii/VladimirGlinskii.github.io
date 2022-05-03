import Navbar from '@components/navbar';
import { FC } from 'react';
import './app.scss';
import MainPage from '@pages/main';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

const App: FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/'
            element={<Navigate replace to="/about" />} />
          <Route path='/about' element={<MainPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
