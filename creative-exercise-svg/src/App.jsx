import { useState } from 'react'
import './App.css'
import './index.css'
import AnimatedSVG from "./AnimatedSVG.jsx";
import Polygons from "./Polygons.jsx";

function App() {

  return (
      <div>
          <Polygons/>
          <h2>Animated SVG</h2>
          <AnimatedSVG/>
      </div>
  )
}

export default App
