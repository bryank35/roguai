/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.3 hoodie_robot.glb -T
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/models/templates/Humanoid_Mecha/hoodie_robot-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.polySurface21_lambert10_0.geometry} material={materials.lambert10} />
      <mesh geometry={nodes.polySurface21_lambert11_0.geometry} material={materials.lambert11} />
      <mesh geometry={nodes.polySurface21_lambert1_0.geometry} material={materials['lambert1.002']} />
      <mesh geometry={nodes.polySurface21_lambert2_0.geometry} material={materials.lambert2} />
      <mesh geometry={nodes.polySurface21_lambert3_0.geometry} material={materials.lambert3} />
      <mesh geometry={nodes.polySurface21_lambert4_0.geometry} material={materials.lambert4} />
      <mesh geometry={nodes.polySurface21_lambert5_0.geometry} material={materials.lambert5} />
      <mesh geometry={nodes.polySurface21_lambert6_0.geometry} material={materials.lambert6} />
      <mesh geometry={nodes.polySurface21_lambert7_0.geometry} material={materials.lambert7} />
      <mesh geometry={nodes.polySurface21_lambert8_0.geometry} material={materials.lambert8} />
      <mesh geometry={nodes.polySurface21_lambert9_0.geometry} material={materials.lambert9} />
      <mesh geometry={nodes.polySurface21_pasted__lambert2_0.geometry} material={materials.pasted__lambert2} />
    </group>
  )
}

useGLTF.preload('/models/templates/Humanoid_Mecha/hoodie_robot-transformed.glb')
