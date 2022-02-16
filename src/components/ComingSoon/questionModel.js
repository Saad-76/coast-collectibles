
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Question(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("./models/QuestionMark.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_1.geometry}
        material={nodes.mesh_1.material}
      />
    </group>
  );
}

useGLTF.preload("./models/QuestionMark.gltf");