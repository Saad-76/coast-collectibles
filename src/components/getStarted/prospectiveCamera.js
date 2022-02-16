import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Stage,
  OrbitControls,
  PerspectiveCamera,
  AmbientLight,
} from "@react-three/drei";
// import { Menu } from "./components/Menu";
// import { Submarine } from "./components/Submarine";
// import ModelData from "./components/Model";
import Model from "./model";
import * as THREE from "three";
// import Enviornment from "./enviornment";

// import "../App.css";

const PerspectiveCameraWrapper = () => {
  // const orange = new THREE.Color(0xffa500);
  // const crimson = new THREE.Color(0xdc143c);
  // const teal = new THREE.Color(0x008080);
  // const steelblue = new THREE.Color(0x4682b4);

  // const [currentColor, setCurrentColor] = useState(orange);

  // const handleColorChange = (event, color) => {
  //   event.preventDefault();
  //   if (color === 'crimson') {
  //     setCurrentColor(crimson);
  //   } else if (color === 'teal') {
  //     setCurrentColor(teal);
  //   } else if (color === 'steelblue') {
  //     setCurrentColor(steelblue);
  //   } else {
  //     setCurrentColor(orange);
  //   }
  // };

  return (
    <>
    

        <div
          className="col-md-6"
          style={{ position: "relative", width: 500, height: 800 }}
        >
          <Canvas
          // dpr={[1, 2]}
          // camera={{
          //   fov: 80,
          //   zoom: 1,
          //   near: 2,
          //   far: 1000,
          //   position: new THREE.Vector3(0, 10, 0)
          // }}
          // camera={{ fov: 90 }}
          // position={[0, 10, 10]}
          >
            <PerspectiveCamera
              makeDefault
              // rotation={[Math.PI, 0, 0]}
              fov={80}
              position={new THREE.Vector3(0, 0, 50)}
              near={1}
              far={1000}
            />
            {/* <color attach="background" args={["midnightBlue"]} /> */}

            <Suspense fallback={null}>
              <Stage
                environment={null}
                intensity={1}
                contactShadowOpacity={0.5}
                shadowBias={-0.0015}
              >
                <mesh scale={2}>
                  <Model />
                </mesh>
              </Stage>
            </Suspense>
            <OrbitControls
              autoRotate
              enableZoom={false}
              enablePan={false}
              minPolarAngle={Math.PI / 2.05}
              maxPolarAngle={Math.PI / 2.05}
            />
          </Canvas>
        </div>

    </>
  );
};

export default PerspectiveCameraWrapper;
