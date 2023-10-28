import { Canvas } from '@react-three/fiber'
import Loader from "./Loader"
import { Suspense } from 'react'

const CameraRig = ({ children, start, setStart }) => {
    return (
        <Canvas
            shadows
            gl={{ preserveDrawingBuffer: true }}
            camera={{ position: [0, 0, 20], fov: 10 }}
        >
            <ambientLight intensity={1} />
            <Suspense fallback={null}>
                {children}
            </Suspense>
            <Loader start={start} setStart={setStart} />
        </Canvas>
    )
}

export default CameraRig