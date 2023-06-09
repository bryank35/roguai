/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.3 horse.glb -T
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/models/templates/Animals/horse-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-48.6, 0, 38.42]} rotation={[-Math.PI / 2, 0, 0.84]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.mat0} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.mat0} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.mat0} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.mat0} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.mat0} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.mat0} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.mat0} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/templates/Animals/horse-transformed.glb')
