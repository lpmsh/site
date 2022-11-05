import { useThree } from '@react-three/fiber';
import { Text3D, Center } from "@react-three/drei";
import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';


function Scene({ margin = 0.5 }) {
  var textX = -4;
  const { width, height } = useThree((state) => state.viewport);
  
  return (
    <>
      <Center rotation={[-0.5, 0.2, .3]}>
        <Text3D
          curveSegments={32}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.1}
          height={0.5}
          lineHeight={0.5}
          letterSpacing={-0.06}
          size={1.5}
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