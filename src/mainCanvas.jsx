'use client'
import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber"
import { Environment } from "@react-three/drei"
import { MainScene } from "./mainScene";
import Preloader from "./components/PreLoader";

export function MainCanvas() {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      // Ensure the page always starts at the top
      window.scrollTo(0, 0);
  
      // Simulate the loading process
      const timer = setTimeout(() => {
        setIsLoading(false); // End the loading state
      }, 4000); // Adjust the duration as needed
  
      return () => clearTimeout(timer); // Clean up the timer
    }, [isLoading]); // Depend on isLoading to reset state properly on reload
  

    return (
        <>
            {isLoading ? (
                <Preloader /> 
            ) : (
            <div className="w-screen h-screen fixed top-0 left-0 bg-transparent">
                <Canvas
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        pointerEvents: "none",
                        zIndex: 10,
                    }}
                    shadows
                    dpr={[1, 2]}
                    camera={{ fov: 55, position: [0, 1, 6] }}
                    gl={{ alpha: true }} 
                >
                    <Environment files="/images/desert.jpg" />
                    <spotLight position={[1,-2,5]} intensity={30}/>
                    <MainScene />
                    <pointLight position={[2, 2, 3]} intensity={20} color={"#ffffff"} />
                    {/* <OrbitControls /> */}
                </Canvas>
            </div>  
            )}
        </>
    );
}
