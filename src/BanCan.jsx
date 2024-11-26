/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 BanCan.glb 
*/

import React, { useEffect } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

export function BanCan(props) {
  const { nodes, materials } = useGLTF('/models/BanCan.glb')
    // Load the texture
    const labelTexture = useTexture('/textures/bananaCanTex.jpg') // Replace with your texture path
  
    useEffect(() => {
      labelTexture.flipY = false;
      labelTexture.needsUpdate = true // Ensure the change takes effect
  
    })
  return (
    <group {...props} dispose={null}>
      <group scale={1.085}>

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

useGLTF.preload('/models/BanCan.glb')
export default BanCan;
