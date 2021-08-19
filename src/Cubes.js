import { useEffect, useRef, useMemo } from "react"
import * as THREE from "three"
import { useFrame, useThree } from "@react-three/fiber"
import { useBox } from "@react-three/cannon"

const RADIUS = 5

const Cube = ({ pos }) => {

  const [ref, api] = useBox(() => ({
    mass: 1,
    args: [0.8, 0.8, 0.8],
    position: [pos.x + (Math.random() * 2 - 1) * 10, pos.y + (Math.random() * 2 - 1) * 10, (Math.random() * 2 - 1) * 5],
    rotation: [Math.PI * 2 * Math.random(), Math.PI * 2 * Math.random(), Math.PI * 2 * Math.random()]
  }))

  const origin = new THREE.Vector3(0, 0, 0)
  const vec = new THREE.Vector3()

  useEffect(() => {
    api.position.subscribe((p) => {
      vec.set(p[0], p[1], 0)
      const dist = RADIUS - vec.distanceTo(origin)
      const forceArray = vec.normalize().multiplyScalar(dist * 3).toArray()

      //z
      forceArray[2] = 0 - p[2] * 3

      api.applyForce(forceArray, [0, 0, 0])
    })
  }, [api])

  return (
    <mesh ref={ref}>
      <boxBufferGeometry attach="geometry" args={[0.8, 0.8, 0.8]} />
      <meshPhysicalMaterial clearcoat={0.8} clearcoatRoughness={0} roughness={1} metalness={0.7} />
    </mesh>
  )
}

export default function Cubes() {

  const curve = new THREE.EllipseCurve(
    0, 0,  // xCenter, yCenter
    RADIUS, RADIUS, // xRadius, yRadius
    0, Math.PI * 2, // startAngle, endAngle
    true,  // clockwise
    0 // rotation
  )
  const curvePoints = curve.getPoints(120).slice(0, -1)

  const ref = useRef()
  const { camera, mouse } = useThree()
  const [rEuler, rQuaternion] = useMemo(() => [new THREE.Euler(), new THREE.Quaternion()], [])

  useFrame(() => {
    rEuler.set(-mouse.y * Math.PI * 0.02, mouse.x * Math.PI * 0.08, 0)
    ref.current.quaternion.slerp(rQuaternion.setFromEuler(rEuler), 0.1)
  })

  return (
    <group ref={ref}>
      {curvePoints.map((pos, i) => <Cube key={i} pos={pos}/>)}
    </group>
  )
}
