import { Float } from "@react-three/drei";

const Bottle = () => {
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      {/* Body */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.8, 0.8, 2.4, 32]} />
        <meshStandardMaterial color="#1a3a2a" metalness={0.3} roughness={0.4} />
      </mesh>
      {/* Cap */}
      <mesh position={[0, 1.4, 0]}>
        <cylinderGeometry args={[0.6, 0.85, 0.5, 32]} />
        <meshStandardMaterial color="#0f2a1a" metalness={0.5} roughness={0.3} />
      </mesh>
      {/* Label */}
      <mesh position={[0, 0, 0.81]}>
        <planeGeometry args={[1.2, 1.4]} />
        <meshStandardMaterial color="#d4c9a8" metalness={0.1} roughness={0.8} />
      </mesh>
    </Float>
  );
};

export default Bottle;
