import './App.css';
import Scene from './components/threeScene';
import { Canvas } from '@react-three/fiber';
import { Html, OrbitControls, PresentationControls } from '@react-three/drei';
import React, {useState} from 'react';
import UnderConstruction from './components/UnderConstruction'



function App() {
  var width = window.innerWidth
  var height = window.innerHeight
  const [isShown, setIsShown] = useState(false);

  return (
    <div>
      <div className='main' style={{width: "100vw", height: "100vh"}}>
          <Canvas orthographic camera={{ position: [0, 0, 100], zoom: 100 }}>
            {/* <PresentationControls global snap={true} zoom={1} rotation={[0, .2, 0]} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 10]}> */}
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} />
            <Scene />
            <Html>
              <a href='https://www.github.com'>
                <input onClick={(e) => console.log('hello')} type='image' src='./public/icons8-github-48.png'></input>
              </a>
            </Html>
            {/* <axesHelper scale={2} position={[0, 0, 0]} onUpdate={(self) => self.setColors('#ff2080', '#20ff80', '#2080ff')} /> */}
            {/* <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} /> */}
            {/* </PresentationControls> */}
          </Canvas>
      </div>
    </div>
  );
}

export default App;
