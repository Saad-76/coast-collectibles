import React from 'react';
import "./comingSoon.css"
// import Image from "../../assets/img/test-img/1.jpg"
import QuestionMark from "../../assets/img/test-img/QuestionMark.jpg"
import Cube from 'react-3d-cube';

import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Stage, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import Question from "./questionModel";
import Model from "./questionModel"


const ComingSoon = () => {


  return (
    <>
      <div className="col-md-12 comingSoon-main-style">
        <div className="container">
          <div className="col-md-6 comingSoon-content-style">
            <h5>COMING SOON...</h5>
          </div>
          <div
            className="col-md-6 display-pc"
            style={{ position: "relative", width: 400, height: 400 }}
          >

            <Canvas
              dpr={[1, 2]}
            // camera={{
            //   fov: 80,
            //   zoom: 1,
            //   near: 2,
            //   far: 1000,

            // }}
            // camera={{ fov: 75, position: [-10, 45, 20]}}
            >
              <PerspectiveCamera
                makeDefault
                // rotation={[Math.PI, 0, 0]}
                fov={75}
                position={[240, -420, 240]}
                near={1}
                far={1000}
              ></PerspectiveCamera>
              <color attach="background" args={["#03091f"]} />

              <Suspense fallback={null}>
                <Stage
                  environment={null}
                  intensity={1}
                  contactShadowOpacity={0.5}
                  shadowBias={-0.0015}
                >
                  <mesh position={[0, -80, 0]} scale={10}>
                    {/* <Submarine  /> */}

                  </mesh>
                  {/* <Data/> */}
                  {/* <Question/> */}
                  <Model />
                  {/* <ModelData /> */}
                </Stage>
              </Suspense>
              <OrbitControls
                autoRotate
                enableZoom={false}
                enablePan={false}
                minPolarAngle={Math.PI / 2.8}
                maxPolarAngle={Math.PI / 2.8}
              />
            </Canvas>
          </div>


          <div
            className="col-md-6 display-mobile"
            style={{ position: "relative", width: 300, height: 300 }}
          >

            <Canvas
              dpr={[1, 2]}
            // camera={{
            //   fov: 80,
            //   zoom: 1,
            //   near: 2,
            //   far: 1000,

            // }}
            // camera={{ fov: 75, position: [-10, 45, 20]}}
            >
              <PerspectiveCamera
                makeDefault
                // rotation={[Math.PI, 0, 0]}
                fov={75}
                position={[240, -420, 240]}
                near={1}
                far={1000}
              ></PerspectiveCamera>
              <color attach="background" args={["#03091f"]} />

              <Suspense fallback={null}>
                <Stage
                  environment={null}
                  intensity={1}
                  contactShadowOpacity={0.5}
                  shadowBias={-0.0015}
                >
                  <mesh position={[0, -80, 0]} scale={10}>
                    {/* <Submarine  /> */}

                  </mesh>
                  {/* <Data/> */}
                  {/* <Question/> */}
                  <Model />
                  {/* <ModelData /> */}
                </Stage>
              </Suspense>
              <OrbitControls
                autoRotate
                enableZoom={false}
                enablePan={false}
                minPolarAngle={Math.PI / 2.8}
                maxPolarAngle={Math.PI / 2.8}
              />
            </Canvas>
          </div>


          <div >




            {/* <div className="image-section-outer-style">
<div>
      <center>
            <div>
                <div
                    style={{
                        width: 300,
                        height: 300
                    }}
                >
                <Cube size={300} index="front">
                    <div >
                        <img style={{width: '310px', height: '300px'}}                       src={QuestionMark} alt=""/>

                    </div>
                    <div >
                    <img src={QuestionMark} alt=""/>
                    </div>
                    <div >
                    <img src={QuestionMark} alt=""/>
                    </div>
                    <div >
                        <img src={QuestionMark} alt=""/>
                    </div>
                    <div >
                        <img src={QuestionMark} alt=""/>
                    </div>
                    <div >
                        <img src={QuestionMark} alt=""/>
                    </div>
               
                </Cube>
                </div>
            </div>
        </center>
      </div>
</div> */}
          </div>
        </div>

      </div>
    </>
  );
}

export default ComingSoon;
