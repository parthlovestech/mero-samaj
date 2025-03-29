
import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Simple marker data for demonstration
const markers = [
  { lat: 27.7172, lng: 85.3240, color: "#FF5722", size: 0.3 }, // Kathmandu
  { lat: 19.0760, lng: 72.8777, color: "#4CAF50", size: 0.25 }, // Mumbai
  { lat: 28.6139, lng: 77.2090, color: "#2196F3", size: 0.27 }, // Delhi
  { lat: 37.7749, lng: -122.4194, color: "#9C27B0", size: 0.2 }, // San Francisco
  { lat: 40.7128, lng: -74.0060, color: "#FF9800", size: 0.22 }, // New York
  { lat: 51.5074, lng: -0.1278, color: "#FFEB3B", size: 0.24 }, // London
  { lat: 48.8566, lng: 2.3522, color: "#673AB7", size: 0.21 }, // Paris
  { lat: 35.6762, lng: 139.6503, color: "#E91E63", size: 0.23 }, // Tokyo
  { lat: -33.8688, lng: 151.2093, color: "#00BCD4", size: 0.25 }, // Sydney
];

// Convert lat/lng to 3D coordinates
const latLngToVector3 = (lat: number, lng: number, radius: number) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
};

// Globe component
const Globe = () => {
  const globeMaterial = useRef<THREE.MeshStandardMaterial | null>(null);
  const globeRef = useRef<THREE.Mesh | null>(null);
  const pointsRef = useRef<THREE.Group | null>(null);

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.001;
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.001;
    }
  });

  // Create texture with dots for continents suggestion
  useEffect(() => {
    if (globeMaterial.current) {
      const canvas = document.createElement("canvas");
      canvas.width = 512;
      canvas.height = 256;
      const context = canvas.getContext("2d");
      
      if (context) {
        context.fillStyle = "#132945";
        context.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw random dots to suggest continents (not actual geography)
        context.fillStyle = "#ffffff";
        // Add random points with concentration patterns to suggest continents
        for (let i = 0; i < 2000; i++) {
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          const size = Math.random() * 1.5;
          context.globalAlpha = Math.random() * 0.4 + 0.2;
          context.beginPath();
          context.arc(x, y, size, 0, Math.PI * 2);
          context.fill();
        }

        const texture = new THREE.CanvasTexture(canvas);
        globeMaterial.current.map = texture;
        globeMaterial.current.needsUpdate = true;
      }
    }
  }, []);

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <Sphere args={[2, 64, 64]} ref={globeRef}>
        <meshStandardMaterial
          ref={globeMaterial}
          color="#1a237e"
          emissive="#0d47a1"
          emissiveIntensity={0.2}
          roughness={0.8}
          metalness={0.2}
        />
      </Sphere>
      
      {/* Glow effect */}
      <Sphere args={[2.1, 64, 64]}>
        <meshStandardMaterial
          color="#4a6ff3"
          transparent={true}
          opacity={0.15}
          roughness={1}
        />
      </Sphere>
      
      {/* Markers */}
      <group ref={pointsRef}>
        {markers.map((marker, index) => {
          const position = latLngToVector3(marker.lat, marker.lng, 2.02);
          return (
            <mesh key={index} position={[position.x, position.y, position.z]}>
              <sphereGeometry args={[marker.size * 0.05, 16, 16]} />
              <meshStandardMaterial color={marker.color} emissive={marker.color} emissiveIntensity={0.5} />
            </mesh>
          );
        })}
      </group>
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.2}
        autoRotate={true}
        autoRotateSpeed={0.5}
      />
    </>
  );
};

const GlobeVisualization = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`w-full h-[400px] ${className}`}>
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <Globe />
      </Canvas>
    </div>
  );
};

export default GlobeVisualization;
