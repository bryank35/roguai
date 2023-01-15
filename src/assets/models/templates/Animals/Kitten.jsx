/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.3 kitten.glb -T
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/models/templates/Animals/kitten-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.material} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.body} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.body} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/templates/Animals/kitten-transformed.glb')
