import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"
import BanCan from "./BanCan"
import OraCan from "./OraCan"
import PomCan from "./PomCan"

gsap.registerPlugin(ScrollTrigger)

export function MainScene() {
    const can1Ref = useRef()
    const can2Ref = useRef()
    const can3Ref = useRef()
    const can4Ref = useRef()

    const can1SpinRef = useRef()
    const can2SpinRef = useRef()
    const can3SpinRef = useRef()
    const can4SpinRef = useRef()

    const initialPosition = [-0.5,-0.5,0]
    const initialPosition2 = [2,-0.5,-1]
    const initialPosition3 = [-12,-0.5,0]
    const initialPosition4 = [12,-0.5,0]

    const initialRotation = [0.4, -0.2 ,0.4]
    const initialRotation2 = [0, -0.5,0]
    const initialRotation3 = [0, 0,0]
    const initialRotation4 = [0, -0.8,0]




    useGSAP(() => {
      gsap.fromTo(
        can1Ref.current.position,
        { x: -10, y: 10, z: 0 }, // Starting position
        {
          x: -0.5,
          y: -0.5,
          z: 0, // Ending position
          duration: 1.3, // Duration of animation
          ease: "elastic.out(1,1)", // Easing
        }
      );


      gsap.fromTo(
        can2Ref.current.position,
        { x: 3, y: 10, z: 3 }, // Starting position for can2
        {
          x: 2,
          y: -0.5,
          z: -1, // Ending position
          duration: 1.5, // Duration of animation
          ease: "elastic.out(1, 1)",
        }
      );


      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 2.5,
          markers: false,
        }
      })

      timeline
        //can2 position
        .to(can2Ref.current.position, {
          x:2, y:6.5, z:-1,
          duration: 1,
          ease: "power3.Out"
        },0)  
        .to(can1Ref.current.position, {
          x:0.5, y:-1, z:2,
          duration: 2,
          ease: "power3.Out"
        },0)
        //rotation [x and z]
        .to(can1SpinRef.current.rotation, {
          x: 0, y: Math.PI * 2,
          duration:  2,
          ease: "sine.inOut"
        },0) 
        .to(can1Ref.current.position, {
          x:1, y:0, z:0,
          duration:  2,
          ease: "power2.inOut"
        })
        .to(can1SpinRef.current.rotation, {
          x: -Math.PI /4, z: -Math.PI /4,
          duration:  2,
          ease: "power2.in"
        },"-=1")
        .to(can1Ref.current.position, {
          x:0, y:0, z:0,
          duration:  2,
          ease: "power2.inOut"
        },"-=1")
        //set the main Can back to center
        .to(can1Ref.current.position, {
          x: 0, y:0, z:0,
          duration:  2,
          ease: "power2.inOut"
        },"-=2")
        .to(can1SpinRef.current.rotation, {
          x: -0.4, y: 0, z: -0.30, 
          duration:  2.5,
          ease: "power2.in"
        },"-=1")
        //postion of the last 2 cans
        .to(can3Ref.current.position, {
          x:-3.5, y:0, z:0,
          duration: 2,
          ease: "power2.inOut"
        },"-=1")

        //postion of the last 3 cans
        .to(can4Ref.current.position, {
          x:3.5, y:0, z:0,
          duration: 3,
          ease: "power2.inOut"
        },"-=1")
    }, []);






    return(
      <>
      <group ref={can1Ref} position={initialPosition} rotation={initialRotation}>
        <group ref={can1SpinRef}>
          <PomCan />
        </group>
      </group>


      <group ref={can2Ref} position={initialPosition2} rotation={initialRotation2}>
        <group ref={can2SpinRef}>
            <OraCan />
        </group>
      </group>


      <group ref={can3Ref} position={initialPosition3} rotation={initialRotation3}>
        <group ref={can3SpinRef}>
            <OraCan />
        </group>
      </group>

      <group ref={can4Ref} position={initialPosition4} rotation={initialRotation4}>
        <group ref={can4SpinRef}>
            <BanCan />
        </group>
      </group>


      </>
    )
}

