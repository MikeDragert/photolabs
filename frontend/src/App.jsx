import React, { useState } from 'react';

import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModel from './routes/PhotoDetailsModal';

import './App.scss';
import './styles/HomeRoute.scss'

// Note: Rendering a single component to build components in isolation
const App = () => {  
  const intitialState = {empty: true};
  const [displayPhotoDetails, setDisplayPhotoDetails] = useState(intitialState);
  const setDisplayModel = function(photoDetails) {
    if (photoDetails) {
      setDisplayPhotoDetails({empty: false, photoDetails});
    } else {
      setDisplayPhotoDetails(intitialState);
    }
  }

  return (
    <div className="App">
      <HomeRoute setDisplayModel={setDisplayModel}/>
      {!displayPhotoDetails.empty && <PhotoDetailsModel photoDetails={displayPhotoDetails.photoDetails} setDisplayModel={() => setDisplayModel()}/>}
    </div>
  );
};

export default App;
