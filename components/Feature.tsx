import { services } from '@/lib/Constants'


const Feature = () => {
  return (
    <>
      <div className='bg-gradient-to-r from-transparent via-gray-400 to-transparent w-full h-px'>
        <svg
          viewBox='0 0 1024 1024'
          className='absolute -z-10 -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:h-[64rem] lg:w-[64rem] lg:left-1/2 lg:top-1/4 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0'
          aria-hidden='true'
        >
          <circle cx={512} cy={512} r={512} fill='url(#759c1415-0410-454c-8f7c-9a820de03641)' fillOpacity='0.5' />
          <defs>
            <radialGradient id='759c1415-0410-454c-8f7c-9a820de03641'>
              <stop stopColor='#4496f0' />
              <stop offset={1} stopColor='#C3DFFE' />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className='py-24 sm:py-32' id='services'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:text-center'>
            <h2 className='text-lg font-semibold leading-7 text-blue-600'>Encuentra todo lo que tú y tu familia necesitan</h2>
            <p className='mt-2 text-3xl  font-bold tracking-tight text-gray-900 sm:text-5xl'>
              Conoce nuestros servicios
            </p>
            <p className='mt-6 text-lg leading-8 text-gray-600'>
              Contamos con una amplia variedad para las distintas etapas de tu vida.
            </p>
          </div>
          <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl'>
            <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16'>
              {services.map((elem, index) => (
                <div key={index} className='flex rounded-lg h-full bg-gray-200 p-8 flex-col border border-gray-400'>
                  <div className='flex items-center mb-3'>
                    <div className='w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0'>
                      {elem.icon}
                    </div>
                    <h2 className='text-gray-900 text-lg title-font font-medium'>{elem.title}</h2>
                  </div>
                  <div className='flex-grow'>
                    <p className='leading-relaxed text-base'>{elem.desc}</p>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div
          className='absolute inset-x-0 bottom-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:bottom-[calc(100%-120rem)]'
          aria-hidden='true'
        >
          <div
            className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#4496f0] to-[#0c6bd1] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </>
  )
}

export default Feature