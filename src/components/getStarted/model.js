import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("./models/44.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <group 
        position={[0, 0, 0]}
        // position={[241.76, -9.82, -281.83]} 
        rotation={[0, 0, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0.geometry}
          material={nodes.mesh_0.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_1.geometry}
          material={nodes.mesh_0_1.material}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./models/44.gltf");
// export default Data;
