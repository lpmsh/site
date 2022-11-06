import { useThree, useFrame } from '@react-three/fiber';
import { Text3D, Center } from "@react-three/drei";
import React, { useState, useRef } from 'react';
import { getSpaceUntilMaxLength } from '@testing-library/user-event/dist/utils';
import { gsap } from 'gsap';


export default function LPM3D({ margin = 0.5 }) {
  const [hover, setHover] = useState(false);
  
  const lpmText = useRef(null);

  function hoverZoom(){
    gsap.to(lpmText.current.scale, {
      x: 2,
      y: 2,
      z: 2,
      duration: 2
    })
  }

  function hoverEnd(){
    gsap.to(lpmText.current.scale, {
      z: 3,
      duration: 3,
      ease: "power1.out"
    }); 
  }


  return (
    <>
      <Center className='canvasScene'  >
        <Text3D
          ref={lpmText}
          rotation={[-0.4, 0.2, .2]}
          onPointerEnter={(e) => hoverZoom()}
          onPointerOut={(e) => hoverEnd()}
          curveSegments={32}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.1}
          height={0.5}
          lineHeight={0}
          letterSpacing={-0.06}
          size={2.5}
          scale={[2, 2, 3]}
     
          font="/Inter_Bold.json">
          {`LPM`}
          <meshNormalMaterial />
        </Text3D>
      </Center>
    </>
  )
}


/*
    <PresentationControls global snap={false} zoom={1} rotation={[0, -Math.PI / 2, 0]} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]}>
        <RoundedBox args={[5, 5, 5]} radius={0.05} smoothness={4} >
          <meshPhongMaterial color="#B6DCFE" />
        </RoundedBox>

    </PresentationControls>
*/