import Image from 'next/image'
import Sleep from '../assets/sleep.jpg'
import Pregnancy from '../assets/pregnancy.jpg'
import Tantrum from '../assets/tantrum.jpg'

const Workshops = () => {
  return (
    <div className='text-gray-500' id='workshops'>
      <div className='hidden sm:absolute sm:bottom-4/4 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl' aria-hidden='true'>
        <div className='aspect-[1097/745] w-[68.5625rem] bg-gradient-to-tr from-[#4496f0] to-[#0c6bd1] opacity-30'
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}></div>
      </div>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-col'>
          <div className='mx-auto max-w-2xl lg:text-center'>
            <h1 className='mt-2 text-3xl  font-bold tracking-tight text-gray-900 sm:text-5xl'>Charlas y talleres</h1>
            <p className='text-base font-semibold leading-7 text-blue-600 pt-6 pb-20'>Descubre las charlas y talleres que hemos preparado para ti. Aquí aprenderás sobre salud, calidad de vida, maternidad y otros temas relevantes y contingentes.</p>
          </div>
        </div>
        <div className='flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4'>
          <div className='p-4 md:w-1/3 sm:mb-0 mb-6'>
            <div className='rounded-lg h-64 overflow-hidden'>
              <Image
                className='object-cover object-center h-full w-full'
                src={Sleep}
                alt='Sleep'
                width={500}
                height={397}
              />
            </div>
            <h2 className='text-xl font-medium title-font mt-5'>¡Respira bien y duerme mejor! Cómo manejar los ronquidos y apneas del sueño.</h2>
            <p className='text-base leading-relaxed mt-2'>Martes 15 de Octubre a las 19:00 hrs.</p>
            <a className='text-blue-600 inline-flex items-center mt-3 border border-blue-400 rounded p-1 bg-blue-100'>
              Sin costo
            </a>
          </div>
          <div className='p-4 md:w-1/3 sm:mb-0 mb-6 flex-1'>
            <div className='rounded-lg h-64 overflow-hidden'>
              <Image
                className='object-cover object-center h-full w-full'
                src={Pregnancy}
                alt='Pregnancy'
                width={500}
                height={397}
              />
            </div>
            <h2 className='text-xl font-medium title-font mt-5'>Alimentación en el embarazo y lactancia</h2>
            <p className='text-base leading-relaxed mt-2'>Miércoles 23 de Octubre a las 19:00 hrs.</p>
            <a className='text-blue-600 inline-flex items-center mt-3 border border-blue-400 rounded p-1 bg-blue-100'>
              Sin costo
            </a>
          </div>
          <div className='p-4 md:w-1/3 sm:mb-0 mb-6'>
            <div className='rounded-lg h-64 overflow-hidden'>
              <Image
                className='object-cover object-center h-full w-full'
                src={Tantrum}
                alt='Tantrum'
                width={500}
                height={397}
              />
            </div>
            <h2 className='text-xl font-medium title-font mt-5'>Consejos claves para manejo de pataletas entre los 2 y 5 años</h2>
            <p className='text-base leading-relaxed mt-2'>Lunes 28 de Octubre a las 19:00 hrs.</p>
            <a className='text-blue-600 inline-flex items-center mt-3 border border-blue-400 rounded p-1 bg-blue-100'>
              Sin costo
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Workshops