import React, { Suspense } from 'react'
import PlasterHead from './PlasterHead'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

const Header = () => {
  return (
    <div className='h-screen relative grid grid-cols-2 text-center justify-center items-center' id='header-part'>
      <div className='flex items-center justify-center h-screen'>
        <h1 className='relative amiah text-5xl text-white font-black h-[80%] w-[90%] bg-gray-800 flex items-center justify-center'>
          <Canvas className='absolute'>
            <Suspense fallback={null}>
              <PlasterHead />
              <OrbitControls autoRotate autoRotateSpeed={3} />
            </Suspense>
          </Canvas>
          <span className='absolute text-white tracking-wider'>
            JUNIOR WEB DEVELOPER
          </span>
        </h1>
      </div>
      <div className="flex flex-col h-screen justify-evenly items-start">
        <h1 className='amiah text-8xl font-black tracking-widest'>
          THANT
        </h1>
        <h1 className='amiah text-8xl font-black tracking-widest'>
          HTET
        </h1>
        <h1 className='amiah text-8xl font-black tracking-widest'>
          AUNG
        </h1>
      </div>
    </div>
  )
}

export default Header