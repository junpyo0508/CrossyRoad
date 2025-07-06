import { useGLTF } from '@react-three/drei';
import { MathUtils } from 'three';

function MyElement3D() {
  const model = useGLTF("./models/model.gltf");

  return (
    <>
    <primitive 
    scale={10}
    rotation-x={MathUtils.degToRad(90)}
    rotation-y={MathUtils.degToRad(180)}
    object={model.scene} />
    </>
  )
}

export default MyElement3D;