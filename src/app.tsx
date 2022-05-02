import Navbar from '@components/navbar';
import React from 'react';
import './app.scss';
import MainPage from '@pages/main';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <MainPage />
    </div>
  );
}

export default App;
