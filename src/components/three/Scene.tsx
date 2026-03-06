import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Bottle from "./Bottle";
import Molecules from "./Molecules";

const Scene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }} style={{ width: "100%", height: "100%" }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-3, 2, 4]} intensity={0.5} color="#4ade80" />
        <Bottle />
        <Molecules />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Suspense>
    </Canvas>
  );
};

export default Scene;
