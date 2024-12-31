// src/ModelViewer.tsx
import { Canvas } from '@react-three/fiber';
import { OrbitControls} from '@react-three/drei';
import AnimatedModel from './AnimatedModel';
const base = import.meta.env.BASE_URL;


export default function ModelViewer() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas>
        {/* 添加灯光 */}
        <ambientLight intensity={1} />
        <directionalLight position={[1, 1, 10]} intensity={1} />
        <AnimatedModel modelPath={`${base}models/model.glb`} />       
        {/* 添加控制器 */}
        <OrbitControls />
      </Canvas>
    </div>
  );
}

