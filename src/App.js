import './App.css';
import LPM3D from './components/LPMText';
import { Canvas } from '@react-three/fiber';
import { Html, OrbitControls, PresentationControls, useHelper } from '@react-three/drei';
import React, {useState, useRef, useEffect } from 'react';
import UnderConstruction from './components/UnderConstruction'
import { DirectionalLightHelper } from 'three';
import Navbar from './components/Navbar';





function App() {
  var width = window.innerWidth;
  var height = window.innerHeight;
  var SCALE_FACTOR = 871160
  var scale = (width * height) / SCALE_FACTOR;
  const [windowWidth, setWidth] = React.useState(window.innerWidth);
  const [windowHeight, setHeight] = React.useState(window.innerHeight); 

  function updateWidthAndHeight(){
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  // useEffect(() => {
  //   window.addEventListener("resize", updateWidthAndHeight);
  //   window.onresize
  //   return () => window.removeEventListener("resize", updateWidthAndHeight);
  // });

  window.onresize = function(){
    updateWidthAndHeight();
    console.log(windowWidth);
    console.log(windowWidth);
  }

  function redirect(){
    window.location.href = "https://www.youtube.com"
  }

  useEffect(() => {
    if (window.location.href == "https://portfolio-site-lpmonaghan06-yahoocom.vercel.app/"){
      redirect();
    }
  });





  
  return (
    <div className="main" style={{ width: "100vw", height: "100vh" }}>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="canvasDiv">
        <Canvas
          className="canvas"
          orthographic
          camera={{
            position: [0, 0, 100],
            zoom: windowWidth / 21.33,
          }}
        >
          <PresentationControls
            global
            snap={true}
            zoom={1}
            rotation={[0, 0.2, 0]}
            polar={[0, Math.PI / 4]}
            azimuth={[-Math.PI / 4, Math.PI / 10]}
          >
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} />
            <LPM3D />
          </PresentationControls>
        </Canvas>
      </div>

      {/********  show axis helpers and enable obrit controls ************/}
      {/* <axesHelper scale={2} position={[0, 0, 0]} onUpdate={(self) => self.setColors('#ff2080', '#20ff80', '#2080ff')} /> */}
      {/* <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} /> */}
      {/************************************************************ */}
    </div>
  );

  const canvas = useRef(null);


}

export default App;
