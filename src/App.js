import './App.css';
import LPM3D from './components/LPMText';
import { Canvas } from '@react-three/fiber';
import { Html, OrbitControls, PresentationControls, useHelper } from '@react-three/drei';
import React, {useState, useRef } from 'react';
import UnderConstruction from './components/UnderConstruction'
import { DirectionalLightHelper } from 'three';



function App() {
  var width = window.innerWidth
  var height = window.innerHeight
  const [isShown, setIsShown] = useState(false);

  return (
    <div>
      <div className='main' style={{width: "100vw", height: "100vh"}}>
          <Canvas orthographic camera={{ position: [0, 0, 100], zoom: 100 }}>
            <PresentationControls global snap={true} zoom={1} rotation={[0, .2, 0]} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 10]}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} />
            <LPM3D/>
            {/* <axesHelper scale={2} position={[0, 0, 0]} onUpdate={(self) => self.setColors('#ff2080', '#20ff80', '#2080ff')} /> */}
            {/* <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} /> */}
            </PresentationControls>
          </Canvas>
      </div>
    </div>
  );
}

export default App;
