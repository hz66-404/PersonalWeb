import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ModelViewer from './ModelViewer';


function App() {
  return (
    <div>
      <h1>My 3D Model</h1>
      <ModelViewer />
    </div>
  );
}

export default App
