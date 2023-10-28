const Model = ({ model }) => (
    <mesh>
        <directionalLight position={[4, 30, -30]} intensity={4} />
        <directionalLight position={[4, 0, 1]} intensity={10} />
        <primitive
            scale={20}
            position={[-1.7, 3, 0]}
            rotation={[0, 0, -1.55]}
            object={model.scene}
        />
    </mesh>
)

export default Model