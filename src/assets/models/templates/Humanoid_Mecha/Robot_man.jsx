/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.3 robot_man.glb -T
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/models/templates/Humanoid_Mecha/robot_man-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh geometry={nodes.low_combinepCylinder16_body_0.geometry} material={materials.body} />
        <mesh geometry={nodes.polySurface107_aodai_0.geometry} material={materials.aodai} />
        <mesh geometry={nodes.polySurface21_aodai_0.geometry} material={materials.aodai} />
        <mesh geometry={nodes.polySurface93_aodai_0.geometry} material={materials.aodai} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/templates/Humanoid_Mecha/robot_man-transformed.glb')
