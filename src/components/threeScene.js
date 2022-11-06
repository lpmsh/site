import { useThree, useFrame } from '@react-three/fiber';
import { Text3D, Center } from "@react-three/drei";
import React, { useState, useRef } from 'react';
import { getSpaceUntilMaxLength } from '@testing-library/user-event/dist/utils';
import { gsap } from 'gsap';


function Scene({ margin = 0.5 }) {
  const [hover, setHover] = useState(false);
  
  const lpmText = useRef(null);
  useFrame((state) => {
    if (!!lpmText.current){
      if (hover){
        

        gsap.to(lpmText.current.scale, {
          y: 1.2,
          duration: 2,
          ease: 3
        })
        
      }else if (hover == false){
        gsap.to(lpmText.current.scale, {
          y: 1,
          duration: 2,
          ease: 3
        }) 
      
      }
    }
  })

  return (
    <>
      <Center position={[0, 0, 0]} className='canvasScene'  rotation={[-0.4, 0.2, .2]}>
        <Text3D
          ref={lpmText}
          onPointerEnter={() => setHover(true)}
          onPointerLeave={() => setHover(false)}
          curveSegments={32}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.1}
          height={0.5}
          lineHeight={0}
          letterSpacing={-0.06}
          size={2.5}
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