import './App.css';
import Thing from './threejs/threeScene';
import { Canvas } from '@react-three/fiber';




function App() {
  var width = window.innerWidth
  var height = window.innerHeight

  return (
    <div className='main' style={{ position: "absolute", width: 1406, height: 1500}}>
      <Canvas camera={{ position: [0, 0, 10]}}>
        <Thing/>
      </Canvas>
      {/* <h1>{width} {height}</h1> */}

 
    </div>
  );
}

export default App;
