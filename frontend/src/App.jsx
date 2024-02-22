import React from 'react';

import HomeRoute from './components/HomeRoute';

import './App.scss';
import './styles/HomeRoute.scss'


// Note: Rendering a single component to build components in isolation
const App = () => {  
  return (
    <div className="App">
      <HomeRoute />
    </div>
  );
};

export default App;
