import { useThree, useFrame } from '@react-three/fiber';
import { Text3D, Center } from "@react-three/drei";
import React, { useState, useRef } from 'react';


function Scene({ margin = 0.5 }) {
  var textSize = 3;
  const [hover, setHover] = useState(false);
  const lpmText = useRef();

  return (
    <>
      <Center position={[0, 2, 0]} className='3d'  rotation={[-0.4, 0.2, .2]}>
        <Text3D
          ref={lpmText}
     
          curveSegments={32}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.1}
          height={0.5}
          lineHeight={textSize}
          letterSpacing={-0.06}
          size={textSize}
          font="/Inter_Bold.json">
          {`LPM`}
          <meshNormalMaterial />
        </Text3D>
      </Center>
    </>
  )
}

export default Scene;
/*
    <PresentationControls global snap={false} zoom={1} rotation={[0, -Math.PI / 2, 0]} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]}>
        <RoundedBox args={[5, 5, 5]} radius={0.05} smoothness={4} >
          <meshPhongMaterial color="#B6DCFE" />
        </RoundedBox>

    </PresentationControls>
*/