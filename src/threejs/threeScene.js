
import { RoundedBox, PresentationControls } from "@react-three/drei";


export default function Thing(){
  return(
    
    <PresentationControls global snap={false} zoom={1} rotation={[0, -Math.PI / 2, 0]} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]}>
        <RoundedBox args={[5, 5, 5]} radius={0.05} smoothness={4} >
          <meshPhongMaterial color="#B6DCFE" />
        </RoundedBox>
    </PresentationControls>


  )

}