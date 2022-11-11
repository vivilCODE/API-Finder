import './App.css';
import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Nav from './components/nav/Index';
import HomeView from './components/homeView/Index'
import FavoritesView from './components/favoritesView/Index'

function App() {
  const [apiResponse, setApiResponse] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<HomeView apiResponse={apiResponse} setApiResponse={setApiResponse}/>}/>
        <Route path='/favorites' element={<FavoritesView/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
