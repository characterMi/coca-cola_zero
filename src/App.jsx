import gsap from "gsap";
import Model from "./canvas/Model";
import CameraRig from "./canvas/CameraRig";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navbar, Intro, LeftArticle, RightArticle, Footer } from "./components";
import { useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { modelScrollAnimation } from "./lib/scroll-animation";

function App() {
  const [start, setStart] = useState(false)
  const model = useGLTF('/coca-cola_zero/models/coca-coka_can/scene.gltf')
  useEffect(() => {
    window.scrollTo(0, 0)
    gsap.registerPlugin(ScrollTrigger)
  }, [])
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (start) {
        gsap.to(model.scene.position, {
          duration: 1,
          ease: "ease",
          y: -0.5
        })
        gsap.to(model.scene.rotation, {
          duration: 1,
          ease: "ease",
          x: 6
        })
        modelScrollAnimation(model.scene)
      }
    })
    return () => ctx.revert()
  }, [start])
  return (
    <section className="app sm:px-6 md:px-12 px-2">
      <section className="object w-[300px] h-[250px] sm:w-[400px] sm:h-[350px] lg:w-[600px] lg:h-[550px] fixed left-[50%] translate-x-[-50%] z-10">
        <CameraRig start={start} setStart={setStart}>
          <Model model={model} />
        </CameraRig>
      </section>
      <section className="w-full mb-20 intro text-center flex justify-center flex-col">
        <Navbar />
        <Intro />
      </section>
      <section className="main-content relative flex items-start justify-between w-full">
        <LeftArticle />
        <RightArticle />
      </section>
      <Footer />
    </section>
  )
}

export default App;