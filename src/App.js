import React from 'react';
import { useTrackMouse } from './hooks/useTrackMouse';

function App() {
  const position = useTrackMouse();

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ backgroundColor: '#fefefe', height: '100vh', width: '100%' }}
    >
      <h1>
        {position.x} : {position.y}
      </h1>
    </div>
  );
}

export default App;
