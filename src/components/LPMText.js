import { useThree, useFrame } from '@react-three/fiber';
import { Text3D, Center, useAspect } from "@react-three/drei";
import React, { useState, useRef, useEffect } from 'react';
import { getSpaceUntilMaxLength } from '@testing-library/user-event/dist/utils';
import { gsap } from 'gsap';
import { getDefaultZIndex } from '@mantine/core';
import { MeshDistanceMaterial } from 'three';


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

  function hoverStart(){
    gsap.to(lpmText.current.scale, {
      x: lpmText.current.scale?.x,
      y: lpmText.current.scale?.y,
      z: 4,
      duration: 3,
    });
  }

  

  function hoverEnd(){
    gsap.to(lpmText.current.scale, {
      x: lpmText.current.scale?.x,
      y: lpmText.current.scale?.y,
      z: 2,
      duration: 3,
      ease: "power1.out",
    }); 
  }

  console.log(lpmText.current?.rotation);
  const [zoomed, setZoomed] = useState(false);
  useEffect(() => {
    hoverStart();
    setTimeout(() => {
      hoverEnd();
    }, 3500)
  }, []);

  return (
    <>
      <Center className="canvasScene">
        <Text3D
          ref={lpmText}
          rotation={[-0.4, 0.2, 0.2]} // -0.4, 0.2, 0.2
          onPointerEnter={(e) => {
            hoverStart();
          }}
          onPointerOut={(e) => {
            hoverEnd();
          }}
          
          curveSegments={32}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.1}
          width={3}
          lineHeight={0}
          letterSpacing={-0.06}
          size={2} //nomral: 2.5
          scale={[
            Math.min(2, viewport.width / 9),
            Math.min(2, viewport.width / 9),
            2,
          ]} //normal: [2, 2, 4]
          font="/Inter_Bold.json"
        >
          {`LPM`}
          <meshBasicMaterial wireframe={true} />
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