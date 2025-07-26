import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react';
import { createContext } from 'react';


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import Header from './Components/Header';
import citiesData from './utils/egyptCities.json';

const MyContext = createContext();

function App() {
  
  const [egyptCities, setEgyptCities] = React.useState([]);
  const [selectedCity, setSelectedCity] = React.useState('');
  useEffect(() => {
    setEgyptCities(citiesData);
  }, []);
  const values = {
    egyptCities,
    selectedCity,
    setSelectedCity
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header />
        <Routes>
          <Route path='/' exact={true} element={<Home />} />
        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
