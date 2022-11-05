import './App.css';
import Scene from './components/threeScene';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import React, {useState} from 'react';
import UnderConstruction from './components/UnderConstruction'



function App() {
  var width = window.innerWidth
  var height = window.innerHeight
  const [isShown, setIsShown] = useState(false);

  return (
    <div>
      <div>
        <button
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}>
          Hover over me!
        </button>
        {isShown && (
          <div>
            I'll appear when you hover over the button
          </div>
        )}
      </div>
      <div className='main'>
        <Canvas orthographic camera={{ position: [0, 0, 100], zoom: 100 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} />
          <Scene />
          <Html>
           
            <UnderConstruction/>
            
          </Html>
          {/* <axesHelper scale={2} position={[0, 0, 0]} onUpdate={(self) => self.setColors('#ff2080', '#20ff80', '#2080ff')} /> */}
          <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
