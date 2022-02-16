import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("./models/Question.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base.geometry}
        material={nodes.Base.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Question1.geometry}
        material={nodes.Question1.material}
      />
    </group>
  );
}

useGLTF.preload("./models/Question.gltf");