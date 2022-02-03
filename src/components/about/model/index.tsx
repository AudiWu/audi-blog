import React from "react"
import { useFrame } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader"
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader"
import { useLoader } from "@react-three/fiber"

export const Model: React.FC<{}> = () => {
  const obj = useLoader(OBJLoader, "/pigeon.obj");
  
  obj.translateY(-1.4);
  useFrame(() => (obj.rotation.y += 0.01))

  return <primitive object={obj} scale={0.8} />
}
