import { Html, useProgress } from '@react-three/drei'
import { useEffect } from 'react'

const Loader = ({ start, setStart }) => {
  const { progress } = useProgress()
  useEffect(() => {
    progress == "100" && setStart(true)
    return () => {
      setStart(false)
    }
  }, [progress])

  return (
    <Html>
      <span className={`${start && 'started'}`}>
        {progress.toFixed(1)}%
      </span>
    </Html>
  )
}

export default Loader