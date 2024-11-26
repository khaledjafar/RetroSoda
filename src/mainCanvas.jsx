'use client'
import { Canvas } from "@react-three/fiber"
import { Environment } from "@react-three/drei"
import { MainScene } from "./mainScene";

export function MainCanvas() {
    return (
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
    )
}
