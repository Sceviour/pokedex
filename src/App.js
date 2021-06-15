import React, { useState } from 'react';
import NavigationContainer from './containers/navigation';
import APICallContainer from './containers/apicall';

function App() {
  const [ selectedID, setSelectedID ] = useState(1);
  return (
    <> 
      <APICallContainer selectedID={selectedID} />
      <NavigationContainer selectedID={selectedID} setSelectedID={setSelectedID} />
    </>
  );
}

export default App;
