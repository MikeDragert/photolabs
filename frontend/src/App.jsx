import React, { useState } from 'react';

import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModel from './routes/PhotoDetailsModal';

import './App.scss';
import './styles/HomeRoute.scss'

// Note: Rendering a single component to build components in isolation
const App = () => {  
  const [showModel, setShowModel] = useState(false);
  const setDisplayModel = function(photoId) {
    if (photoId) {
      setShowModel(true);
    } else {
      setShowModel(false);
    }
  }

  return (
    <div className="App">
      <HomeRoute setDisplayModel={setDisplayModel}/>
      {showModel && <PhotoDetailsModel setDisplayModel={() => setDisplayModel()}/>}
    </div>
  );
};

export default App;
