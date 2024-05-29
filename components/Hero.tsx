'use client'

import Image from 'next/image'
import { slides } from '../lib/Constants'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const Hero = () => {
  const [activeImage, setActiveImage] = useState(0)

  const clickNext = () => {
    activeImage === slides.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1)
  }
  const clickPrev = () => {
    activeImage === 0
      ? setActiveImage(slides.length - 1)
      : setActiveImage(activeImage - 1)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 5000)
    return () => {
      clearTimeout(timer)
    };
  }, [activeImage])


  return (
    <>
      <div className='text-gray-600 body-font w-full bg-gradient-to-t from-white to-transparent'>
        <div className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80' aria-hidden='true'>
          <div
            className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#4496f0] to-[#0c6bd1] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        <header className='text-gray-600 body-font absolute inset-x-0 top-0 z-50'>
          <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
            <a className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' className='w-10 h-10 text-white p-2 bg-blue-500 rounded-full' viewBox='0 0 24 24'>
                <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'></path>
              </svg>
              <span className='ml-3 text-xl'>HealthNet</span>
            </a>
            <nav className='md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center'>
              <Link href='/' className='mr-5 hover:text-gray-900 hover:underline hover:drop-shadow-[0_0_3px_rgba(0,0,0,0.5)] cursor-pointer'>Home</Link>
              <Link href='#services' className='mr-5 hover:text-gray-900 hover:underline hover:drop-shadow-[0_0_3px_rgba(0,0,0,0.5)] cursor-pointer'>Servicios</Link>
              <Link href='#certificates' className='mr-5 hover:text-gray-900 hover:underline hover:drop-shadow-[0_0_3px_rgba(0,0,0,0.5)] cursor-pointer'>Elígenos</Link>
              <Link href='#workshops' className='mr-5 hover:text-gray-900 hover:underline hover:drop-shadow-[0_0_3px_rgba(0,0,0,0.5)] cursor-pointer'>Infórmate</Link>
            </nav>
            <Link href='/agenda' className='inline-flex items-center bg-blue-100 border border-slate-500 py-1 px-3 focus:outline-none hover:bg-blue-200 rounded text-base hover:text-gray-950 mt-4 md:mt-0'>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6 me-2'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z' />
              </svg>
              Reserva de hora
            </Link>
          </div>
          <div className='bg-gradient-to-r from-transparent via-gray-500 to-transparent w-full h-px'></div>
        </header>

        {slides.map((elem, index) => (
          <div key={elem.id} className={`transition-opacity duration-1000 ease-in-out ${index === activeImage ? 'opacity-100' : 'opacity-0'}`}>
            <div className={`${index === activeImage
              ? 'container mx-auto flex px-5 py-28 md:flex-row flex-col items-center justify-center'
              : 'hidden'
              }`}>
              <div className='lg:max-w-xl lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
                <h1 className='font-bold sm:text-4xl text-3xl mb-4 text-gray-900'>{elem.title}
                </h1>
                <p className='mb-8 leading-relaxed'>{elem.desc}</p>
                <div className='flex justify-center'>
                  <button className='inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg'>Conoce más</button>
                </div>
              </div>
              <div className='lg:max-w-xl lg:w-full md:w-1/2 w-5/6'>
                <Image
                  src={elem.src}
                  width={700}
                  height={700}
                  alt='Picture of the author'
                  className='rounded-xl border border-slate-500'
                  priority={true}
                  quality={75}
                />
              </div>
            </div>
          </div>
        ))}

        <div className='absolute top-[40%] lg:left-60 -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-blue-600/30 hover:bg-blue-400 text-white cursor-pointer border border-slate-500' onClick={clickPrev}>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2.5} stroke='currentColor' className='w-6 h-6 lg:w-10 lg:h-10 '>
            <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5 8.25 12l7.5-7.5' />
          </svg>
        </div>
        <div className='absolute top-[40%] lg:right-60 -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-blue-600/30 hover:bg-blue-400 text-white cursor-pointer border border-slate-500' onClick={clickNext}>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2.5} stroke='currentColor' className='w-6 h-6 lg:w-10 lg:h-10'>
            <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
          </svg>
        </div>
      </div>
    </>
  )
}

export default Hero
