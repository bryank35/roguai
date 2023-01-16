/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.3 selva_hypercar.glb -T
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/templates/Cars/selva_hypercar-transformed.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(()=>{
    actions['Animation'].play();
    // console.log(Object.keys(actions))
  },[])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Selva_Hypercar_concept_by_Max_Hordin_2019">
          <group name="Empty002_21" position={[0.34, 0.3, 2]} rotation={[0, 0.27, -0.05]} scale={0.39}>
            <group name="1004_20" position={[0.59, -0.73, -5.18]} rotation={[0.02, -0.27, 0.05]}>
              <mesh name="Object_67" geometry={nodes.Object_67.geometry} material={materials.plastic_black} />
            </group>
          </group>
          <group name="Empty003_23" position={[-0.34, 0.3, 2]} rotation={[0, -0.27, 0.05]} scale={0.39}>
            <group name="1003_22" position={[-0.59, -0.74, -5.18]} rotation={[0.01, 0.27, -0.05]}>
              <mesh name="Object_70" geometry={nodes.Object_70.geometry} material={materials.plastic_black} />
            </group>
          </group>
          <group name="Empty005_25" position={[0, 0.66, -1.92]} rotation={[-0.83, 0, 0]} scale={0.39}>
            <group name="Cylinder002_24" scale={[-0.05, -0.26, -0.07]}>
              <mesh name="Object_73" geometry={nodes.Object_73.geometry} material={materials.chrome} />
              <mesh name="Object_74" geometry={nodes.Object_74.geometry} material={materials.plastic_black} />
            </group>
          </group>
          <group name="Empty011_29" position={[0, 0.75, -1.92]} rotation={[-0.83, 0, 0]} scale={0.39}>
            <group name="Cylinder004_28" position={[0, -0.17, -0.18]} rotation={[0.83, 0, 0]}>
              <mesh name="Object_83" geometry={nodes.Object_83.geometry} material={materials.chrome} />
            </group>
          </group>
          <group name="Empty012_31" position={[0, 0.77, -2.02]} scale={0.39}>
            <group name="Cylinder003_30" position={[0, -0.29, 0.27]} rotation={[-0.83, 0, 0]} scale={[-0.05, -0.26, -0.07]}>
              <mesh name="Object_86" geometry={nodes.Object_86.geometry} material={materials.paint} />
              <mesh name="Object_87" geometry={nodes.Object_87.geometry} material={materials.chrome} />
              <mesh name="Object_88" geometry={nodes.Object_88.geometry} material={materials.plastic_black} />
            </group>
          </group>
          <group name="1001_0" position={[0, 1.13, -2.14]} scale={[-0.43, -0.49, -0.44]}>
            <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials.paint} />
            <mesh name="Object_5" geometry={nodes.Object_5.geometry} material={materials.plastic_black} />
          </group>
          <group name="Circle003_1" position={[0, 0.36, -1.47]} rotation={[0, 0, -Math.PI / 2]} scale={0.39}>
            <mesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials.plastic_black} />
          </group>
          <group name="Circle006_2" position={[0, 0.36, -1.47]} rotation={[0, 0, -Math.PI / 2]} scale={0.39}>
            <mesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials.chrome} />
            <mesh name="Object_11" geometry={nodes.Object_11.geometry} material={materials.black_black} />
            <mesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials.metal} />
            <mesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials.plastic_black} />
          </group>
          <group name="Circle016_3" position={[0.85, 0.36, -1.47]} rotation={[-Math.PI / 2, 0, 0]} scale={0.42}>
            <mesh name="Object_14" geometry={nodes.Object_14.geometry} material={materials.black_gloss} />
            <mesh name="Object_15" geometry={nodes.Object_15.geometry} material={materials.plastic_black} />
            <mesh name="Object_16" geometry={nodes.Object_16.geometry} material={materials.metal} />
          </group>
          <group name="Circle020_4" scale={0.39}>
            <mesh name="Object_18" geometry={nodes.Object_18.geometry} material={materials.plastic_black} />
            <mesh name="Object_19" geometry={nodes.Object_19.geometry} material={materials.plastic_black} />
            <mesh name="Object_20" geometry={nodes.Object_20.geometry} material={materials.plastic_black} />
          </group>
          <group name="Circle043_5" rotation={[0, 0, -Math.PI / 2]} scale={0.39}>
            <mesh name="Object_22" geometry={nodes.Object_22.geometry} material={materials.plastic_black} />
          </group>
          <group name="Circle069_6" rotation={[0, 0, -Math.PI / 2]} scale={0.39}>
            <mesh name="Object_24" geometry={nodes.Object_24.geometry} material={materials.emission_white} />
            <mesh name="Object_25" geometry={nodes.Object_25.geometry} material={materials.plastic_black} />
            <mesh name="Object_26" geometry={nodes.Object_26.geometry} material={materials.metal} />
            <mesh name="Object_27" geometry={nodes.Object_27.geometry} material={materials.black_gloss} />
            <mesh name="Object_28" geometry={nodes.Object_28.geometry} material={materials.glass} />
            <mesh name="Object_29" geometry={nodes.Object_29.geometry} material={materials.black_black} />
            <mesh name="Object_30" geometry={nodes.Object_30.geometry} material={materials.emission_red} />
          </group>
          <group name="Cube_7" position={[0, 0.73, -0.94]} scale={[0.24, 0.09, 0.32]}>
            <mesh name="Object_32" geometry={nodes.Object_32.geometry} material={materials.plastic_black} />
          </group>
          <group name="Cylinder019_9" position={[0, 0.76, -2.03]} rotation={[-0.83, 0, 0]} scale={[-0.02, -0.1, -0.03]}>
            <mesh name="Object_36" geometry={nodes.Object_36.geometry} material={materials.chrome} />
          </group>
          <group name="Cylinder_8" position={[0, 0.67, -0.75]} rotation={[Math.PI / 2, 0, 0]} scale={0.18}>
            <mesh name="Object_34" geometry={nodes.Object_34.geometry} material={materials.plastic_black} />
          </group>
          <group name="Empty001_19" position={[-0.85, 0.34, 1.21]} rotation={[0, 0.38, 0]} scale={0.39}>
            <group name="Circle023_15" position={[4.36, 0, 0]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={-1.07}>
              <mesh name="Object_53" geometry={nodes.Object_53.geometry} material={materials.black_gloss} />
              <mesh name="Object_54" geometry={nodes.Object_54.geometry} material={materials.plastic_black} />
              <mesh name="Object_55" geometry={nodes.Object_55.geometry} material={materials.metal} />
            </group>
            <group name="Plane001_18" position={[4.54, 0, 0]}>
              <group name="Circle005_16" position={[-4.61, 0, 0]} rotation={[0, 0, -Math.PI / 2]} scale={0.53}>
                <mesh name="Object_60" geometry={nodes.Object_60.geometry} material={materials.brake_disk} />
                <mesh name="Object_61" geometry={nodes.Object_61.geometry} material={materials.metal} />
                <mesh name="Object_62" geometry={nodes.Object_62.geometry} material={materials.plastic_black} />
              </group>
              <group name="rer_tyres002_17" position={[-2.37, 0, 0]} scale={2.46}>
                <mesh name="Object_64" geometry={nodes.Object_64.geometry} material={materials['tyre.001']} />
              </group>
              <mesh name="Object_57" geometry={nodes.Object_57.geometry} material={materials.plastic_black} />
              <mesh name="Object_58" geometry={nodes.Object_58.geometry} material={materials.chrome} />
            </group>
          </group>
          <group name="Empty007_27" position={[0.39, 0.72, 0.39]} rotation={[1.83, -0.96, 0]} scale={0.39}>
            <group name="Circle007_26" rotation={[0.01, 0, 0]} scale={0.25}>
              <mesh name="Object_77" geometry={nodes.Object_77.geometry} material={materials.plastic_black} />
              <mesh name="Object_78" geometry={nodes.Object_78.geometry} material={materials.leather} />
              <mesh name="Object_79" geometry={nodes.Object_79.geometry} material={materials.metal} />
              <mesh name="Object_80" geometry={nodes.Object_80.geometry} material={materials.black_gloss} />
            </group>
          </group>
          <group name="Empty_14" position={[0.85, 0.34, 1.21]} rotation={[0, 0.44, 0]} scale={0.39}>
            <group name="Circle001_10" position={[0.02, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={1.07}>
              <mesh name="Object_39" geometry={nodes.Object_39.geometry} material={materials.black_gloss} />
              <mesh name="Object_40" geometry={nodes.Object_40.geometry} material={materials.plastic_black} />
              <mesh name="Object_41" geometry={nodes.Object_41.geometry} material={materials.metal} />
            </group>
            <group name="Plane048_13" position={[0.2, 0, 0]}>
              <group name="Circle002_11" position={[-4.61, 0, 0]} rotation={[0, 0, -Math.PI / 2]} scale={0.53}>
                <mesh name="Object_46" geometry={nodes.Object_46.geometry} material={materials.brake_disk} />
                <mesh name="Object_47" geometry={nodes.Object_47.geometry} material={materials.metal} />
                <mesh name="Object_48" geometry={nodes.Object_48.geometry} material={materials.plastic_black} />
              </group>
              <group name="rer_tyres001_12" position={[-2.37, 0, 0]} scale={2.46}>
                <mesh name="Object_50" geometry={nodes.Object_50.geometry} material={materials['tyre.001']} />
              </group>
              <mesh name="Object_43" geometry={nodes.Object_43.geometry} material={materials.plastic_black} />
              <mesh name="Object_44" geometry={nodes.Object_44.geometry} material={materials.chrome} />
            </group>
          </group>
          <group name="LicensePlate_Geo_lodA001_32" position={[0.01, 0.57, -2.16]} rotation={[1.46, 0, 0]} scale={0.39}>
            <mesh name="Object_90" geometry={nodes.Object_90.geometry} material={materials['Bugatti_ChironRewardGold_2016LicensePlateDefaultA_Material.001']} />
          </group>
          <group name="Plane002_33" position={[0, 1.74, -0.14]} rotation={[-0.04, 0, 0]} scale={[0.47, 0.49, 0.44]}>
            <mesh name="Object_92" geometry={nodes.Object_92.geometry} material={materials.black_black} />
          </group>
          <group name="Plane003_34" position={[0, 1.74, -0.14]} rotation={[-0.04, 0, 0]} scale={[0.47, 0.49, 0.44]}>
            <mesh name="Object_94" geometry={nodes.Object_94.geometry} material={materials.black_black} />
          </group>
          <group name="Plane004_46" position={[0, 0.47, 0.42]} rotation={[-3.03, 0, Math.PI / 2]} scale={-0.41}>
            <mesh name="Object_134" geometry={nodes.Object_134.geometry} material={materials.plastic_black} />
          </group>
          <group name="Plane024_38" position={[0.92, 0.36, -1.47]} rotation={[-0.5, 0, 0]} scale={0.39}>
            <group name="Circle018_36" position={[-4.61, 0, 0]} rotation={[0.5, 0, -Math.PI / 2]} scale={0.53}>
              <mesh name="Object_100" geometry={nodes.Object_100.geometry} material={materials.plastic_black} />
              <mesh name="Object_101" geometry={nodes.Object_101.geometry} material={materials.metal} />
              <mesh name="Object_99" geometry={nodes.Object_99.geometry} material={materials.brake_disk} />
            </group>
            <group name="rer_tyres_37" position={[-2.37, 0, 0]} rotation={[0.5, 0, 0]} scale={2.58}>
              <mesh name="Object_103" geometry={nodes.Object_103.geometry} material={materials['tyre.001']} />
            </group>
            <mesh name="Object_96" geometry={nodes.Object_96.geometry} material={materials.plastic_black} />
            <mesh name="Object_97" geometry={nodes.Object_97.geometry} material={materials.chrome} />
          </group>
          <group name="Plane044_40" position={[0, 0.74, -2.14]} scale={[-0.44, -0.49, -0.44]}>
            <mesh name="Object_105" geometry={nodes.Object_105.geometry} material={materials.glass} />
            <mesh name="Object_106" geometry={nodes.Object_106.geometry} material={materials.black_black} />
            <mesh name="Object_107" geometry={nodes.Object_107.geometry} material={materials.emission_white} />
          </group>
          <group name="Plane062_41" position={[0, 0.47, 0.43]} rotation={[-3.03, 0, -Math.PI / 2]} scale={-0.41}>
            <mesh name="Object_109" geometry={nodes.Object_109.geometry} material={materials.paint} />
            <mesh name="Object_110" geometry={nodes.Object_110.geometry} material={materials.plastic_black} />
            <mesh name="Object_111" geometry={nodes.Object_111.geometry} material={materials.emission_white} />
            <mesh name="Object_112" geometry={nodes.Object_112.geometry} material={materials.chrome} />
            <mesh name="Object_113" geometry={nodes.Object_113.geometry} material={materials.leather} />
            <mesh name="Object_114" geometry={nodes.Object_114.geometry} material={materials.metal} />
          </group>
          <group name="Plane081_42" position={[0, 0.47, 0.42]} rotation={[-3.03, 0, Math.PI / 2]} scale={-0.41}>
            <mesh name="Object_116" geometry={nodes.Object_116.geometry} material={materials.plastic_black} />
            <mesh name="Object_117" geometry={nodes.Object_117.geometry} material={materials.leather} />
            <mesh name="Object_118" geometry={nodes.Object_118.geometry} material={materials.black_gloss} />
            <mesh name="Object_119" geometry={nodes.Object_119.geometry} material={materials.metal} />
            <mesh name="Object_120" geometry={nodes.Object_120.geometry} material={materials.emission_red} />
            <mesh name="Object_121" geometry={nodes.Object_121.geometry} material={materials.black_black} />
            <mesh name="Object_122" geometry={nodes.Object_122.geometry} material={materials.glass} />
            <mesh name="Object_123" geometry={nodes.Object_123.geometry} material={materials.emission_white} />
          </group>
          <group name="Plane082_43" position={[0, 1.74, -0.14]} rotation={[-0.04, 0, 0]} scale={[0.47, 0.49, 0.44]}>
            <mesh name="Object_125" geometry={nodes.Object_125.geometry} material={materials.glass} />
            <mesh name="Object_126" geometry={nodes.Object_126.geometry} material={materials.plastic_black} />
          </group>
          <group name="Plane116_44" position={[0, 1.74, -0.14]} rotation={[-0.04, 0, 0]} scale={[0.47, 0.49, 0.44]}>
            <mesh name="Object_128" geometry={nodes.Object_128.geometry} material={materials.glass} />
            <mesh name="Object_129" geometry={nodes.Object_129.geometry} material={materials.black_black} />
            <mesh name="Object_130" geometry={nodes.Object_130.geometry} material={materials.plastic_black} />
          </group>
          <group name="Plane157_45" scale={0.39}>
            <mesh name="Object_132" geometry={nodes.Object_132.geometry} material={materials.stich} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/templates/Cars/selva_hypercar-transformed.glb')