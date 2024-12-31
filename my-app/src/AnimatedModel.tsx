// src/AnimatedModel.tsx
import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
const base = import.meta.env.BASE_URL;
interface AnimatedModelProps {
  modelPath: string; // 模型文件路径
}

export default function AnimatedModel({ modelPath }: AnimatedModelProps) {
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF(modelPath); // 加载模型和动画
  const mixer = useRef<THREE.AnimationMixer | null>(null);

  useEffect(() => {
    if (animations.length > 0 && group.current) {
      mixer.current = new THREE.AnimationMixer(scene);

      // 播放第一个动画
      const action = mixer.current.clipAction(animations[0]);
      action.play();

      const clock = new THREE.Clock();
      const tick = () => {
        const delta = clock.getDelta();
        mixer.current?.update(delta);
        requestAnimationFrame(tick);
      };
      tick();
    }

    return () => {
      mixer.current?.stopAllAction(); // 清理动画混合器
    };
  }, [animations, scene]);

  return <primitive ref={group} object={scene} />;
}

useGLTF.preload(`${base}models/model.glb`);
