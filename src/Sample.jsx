
import { Canvas } from '@react-three/fiber'
import { useState } from 'react'
import {  Box,  OrbitControls,  Stage, RoundedBox } from '@react-three/drei' 



export default function Sample() {

const shapes = [

  <Box key={2}   args={[.2, 5, 15]}>
     <meshStandardMaterial color='darkblue'/>
  </Box>,
  <Box key={2} args={[.2, 5, 15]}>
  <meshStandardMaterial color='dodgerblue'/>
  </Box>,
  <Box key={2} args={[.2, 5, 15]}>
     <meshStandardMaterial color='lime'/>
  </Box>,
    <RoundedBox
    key={3}
    args={[.3, 5, 12]} // Width, height, depth. Default is [1, 1, 1]
    radius={0.05} // Radius of the rounded corners. Default is 0.05
    smoothness={4} // The number of curve segments. Default is 4
    bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
    creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
   
  >
    <meshStandardMaterial color="#246424"/>
  </RoundedBox>,
    <RoundedBox
    key={3}
    args={[.3, 5, 12]} // Width, height, depth. Default is [1, 1, 1]
    radius={0.05} // Radius of the rounded corners. Default is 0.05
    smoothness={4} // The number of curve segments. Default is 4
    bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
    creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
   
  >
    <meshStandardMaterial color="#245424"/>
  </RoundedBox>,
  <RoundedBox
  key={3}
  args={[.3, 5, 12]} // Width, height, depth. Default is [1, 1, 1]
  radius={0.05} // Radius of the rounded corners. Default is 0.05
  smoothness={4} // The number of curve segments. Default is 4
  bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
  creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
 
>
  <meshStandardMaterial color="#243424"/>
</RoundedBox>

  
]

  const [ currentShape, setCurrentShape ] = useState(0);

  const change = () => {
    setCurrentShape(previous => (previous + 1) % shapes.length)
  }

  return (
    <div id="canvas-container" style={{
        height: 300,
        width: 700,
        display: 'inline-flex',

       
    }}>
        <button style={{
          height: 50,
          width: 225,
          fontSize: 24,
          marginTop: 125,
          margin: 50,
          fontFamily: 'monospace'
    }} onClick={change}>push it</button>
    <Canvas style={{
      width: 1000,
      height: 250
    }}>
        <ambientLight />
        <mesh>
          <OrbitControls 
           enableDamping
           enablePan
           enableRotate
           enableZoom
           />
        <Stage 
        shadows='contact'
        preset='rembrandt'
        intensity={0}>
        {shapes[currentShape]}
        </Stage>
        </mesh>
    </Canvas>
    </div>
  )
}