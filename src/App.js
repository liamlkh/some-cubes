import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Physics, useSphere } from "@react-three/cannon"
import { EffectComposer, SSAO } from "@react-three/postprocessing";
import Cubes from './Cubes'

const Collider = () => {
  const viewport = useThree((state) => state.viewport)
  const [ref, api] = useSphere(() => ({ 
    type: "Kinematic", 
    args: 1
  }))

  useFrame((state) => {
    api.position.set((state.mouse.x * viewport.width) / 2, (state.mouse.y * viewport.height) / 2, 0)
  })

  return null
  // return (
  //   <mesh ref={ref}>
  //     <sphereGeometry attach="geometry" args={[1]} />
  //     <meshBasicMaterial color='#a87ea0' />
  //   </mesh>
  // )
}

export const App = () => (
  <>
    <Canvas
      dpr={1.5}
      gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
      camera={{ position: [0, 0, 30], fov: 35 }}
      onCreated={state => state.gl.toneMappingExposure = 1.5}
    >
      <ambientLight intensity={0.75} />
      <directionalLight position={[0, 5, 4]} intensity={4} />
      <directionalLight position={[0, -15, 0]} intensity={4} color="#a87ea0" />
      <pointLight position={[-30, 0, 20]} color="blue" intensity={0.8} /> 
      <pointLight position={[30, 0, 20]} color="red" intensity={0.8} /> 
      <Physics gravity={[0, 0, 0]} iterations={1} broadphase="SAP">
        <Collider/>
        <Cubes/>
      </Physics>
      <EffectComposer multisampling={0}>
        <SSAO samples={11} radius={30} intensity={30} luminanceInfluence={0.6} color="#9c6892" />
        <SSAO samples={21} radius={5} intensity={30} luminanceInfluence={0.6} color="#9c6892" />
      </EffectComposer>
    </Canvas>
    <footer>
      three.js sketch by <a target="_blank" href="https://liamlkh.github.io/" >liamlkh</a>
    </footer>
  </>
)
