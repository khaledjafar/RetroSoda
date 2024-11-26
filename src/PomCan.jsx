import React, { useEffect } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

export function PomCan(props) {
  // Load the GLTF model
  const { nodes, materials } = useGLTF('/models/PomCan.glb')
  
  // Load the texture
  const labelTexture = useTexture('/textures/pomegranateCanTex.jpg') // Replace with your texture path
  
  useEffect(() => {
    labelTexture.flipY = false;
    labelTexture.needsUpdate = true // Ensure the change takes effect

  })
  
  return (
    <group {...props} dispose={null}>
      <group scale={1.085}>

        {/* metal part */}
        <mesh geometry={nodes.Cylinder001.geometry} material={materials.MetalPart}>
          <meshStandardMaterial metalness={0.9} roughness={0.2}/>
        </mesh>


        {/* label part */}
        <mesh geometry={nodes.Cylinder001_1.geometry}>
          <meshStandardMaterial
            map={labelTexture} 
            metalness={0.9}
            roughness={0.4}
          />
        </mesh>


      </group>
    </group>
  )
}

useGLTF.preload('/models/PomCan.glb')
export default PomCan
