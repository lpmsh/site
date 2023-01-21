import { useThree, useFrame } from '@react-three/fiber';
import { Text3D, Center, useAspect } from "@react-three/drei";
import React, { useState, useRef } from 'react';
import { getSpaceUntilMaxLength } from '@testing-library/user-event/dist/utils';
import { gsap } from 'gsap';


export default function LPM3D({ margin = 0.5 }) {
  const {viewport} = useThree();
  var width = window.innerWidth; //646.5
  var height = window.innerHeight; //575.5
  var SCALE_FACTOR = 871160
  var scale = (width * height) / SCALE_FACTOR;

  //scaling factor for 3d LPM
  var scale = useAspect(
    1, 1, 1
  )

  const [hover, setHover] = useState(false);
  
  const lpmText = useRef(null);

  function hoverZoom(){
    gsap.to(lpmText.current.scale, {
      x: lpmText.current.scale?.x,
      y: lpmText.current.scale?.y,
      z: lpmText.current.scale?.z + 2,
      duration: 3,
    });
  }

  

  function hoverEnd(){
    gsap.to(lpmText.current.scale, {
      z: lpmText.current.scale?.z - 1,
      duration: 2,
      ease: "power1.out",
    }); 
  }

  console.log(lpmText.current?.scale);


  return (
    <>
      <Center className="canvasScene">
        <Text3D
          ref={lpmText}
          rotation={[-0.4, 0.2, 0.2]}
          onPointerEnter={(e) => hoverZoom()}
          onPointerOut={(e) => hoverEnd()}
          curveSegments={32}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.1}
          width={3}
          lineHeight={0}
          letterSpacing={-0.06}
          size={2.5} //nomral: 2.5
          scale={[viewport.width / 9, viewport.width / 9, Math.min(4, (viewport.width /9))]} //normal: [2, 2, 4]
          font="/Inter_Bold.json"
        >
          {`LPM`}
          <meshNormalMaterial />
        </Text3D>
      </Center>
    </>
  );
}


/*
    <PresentationControls global snap={false} zoom={1} rotation={[0, -Math.PI / 2, 0]} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]}>
        <RoundedBox args={[5, 5, 5]} radius={0.05} smoothness={4} >
          <meshPhongMaterial color="#B6DCFE" />
        </RoundedBox>

    </PresentationControls>
*/