import Image from 'next/image'
import Desalud from '../assets/desalud.png'
import Bestplace from '../assets/bestplace.png'
import Praxis from '../assets/praxis.png'
import Procalidad from '../assets/procalidad.png'
import Chile3d from '../assets/chile3d.png'
import Reputation from '../assets/reputation.png'

const LogoClouds = () => {
  return (
    <div className='bg-blue-100 py-24 sm:py-32 w-full border-y border-slate-500' id='certificates'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <h2 className='text-center text-xl font-semibold leading-8 text-gray-900'>
          Nuestros Reconocimientos y Certificaciones
        </h2>
        <div className='mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6'>
          <Image
            className='col-span-2 max-h-28 max-w-32 object-contain lg:col-span-1 mx-8 lg:mx-0 rounded-lg border border-slate-500 drop-shadow-lg'
            src={Desalud}
            alt='Desalud'
            width={158}
            height={48}
          />
          <Image
            className='col-span-2 max-h-28 max-w-32 object-contain lg:col-span-1 mx-8 lg:mx-0 rounded-lg border border-slate-500 drop-shadow-lg'
            src={Bestplace}
            alt='Bestplace'
            width={158}
            height={48}
          />
          <Image
            className='col-span-2 max-h-28 max-w-32 object-contain lg:col-span-1 mx-8 lg:mx-0 rounded-lg border border-slate-500 drop-shadow-lg'
            src={Praxis}
            alt='Praxis'
            width={158}
            height={48}
          />
          <Image
            className='col-span-2 max-h-28 max-w-32 object-contain lg:col-span-1 mx-8 lg:mx-0 rounded-lg border border-slate-500 drop-shadow-lg'
            src={Procalidad}
            alt='Procalidad'
            width={158}
            height={48}
          />
          <Image
            className='col-span-2 max-h-28 max-w-32 object-contain lg:col-span-1 mx-8 lg:mx-0 rounded-lg border border-slate-500 drop-shadow-lg'
            src={Chile3d}
            alt='Chile3d'
            width={158}
            height={48}
          />
          <Image
            className='col-span-2 max-h-28 max-w-32 object-contain lg:col-span-1 mx-8 lg:mx-0 rounded-lg border border-slate-500 drop-shadow-lg'
            src={Reputation}
            alt='Reputation'
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>
  )
}

export default LogoClouds