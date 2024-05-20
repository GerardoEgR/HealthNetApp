import Steps from "@/components/Steps"


export default function layoutAgenda({
  children }: {
    children: React.ReactNode
  }) {
  return (
    <>
      <div
        className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
        aria-hidden='true'
      >
        <div
          className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#4496f0] to-[#0c6bd1] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className='flex flex-wrap max-w-2xl lg:text-center justify-center items-center pt-16 mx-auto lg:mx-28 pb-5'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-gray-900 mx-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        <h1 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl'>Reserva de Horas</h1>
      </div>
      <div className='bg-gradient-to-r from-transparent via-gray-500 to-transparent w-full h-px'></div>
      <div className="lg:container flex h-screen flex-col md:flex-row overflow-auto mx-auto">
        <div className="w-full flex-none md:w-64 border-b border-gray-400 lg:border-r lg:border-b-0 py-10">
          <Steps />
        </div>
        <div className="container grow p-6 md:overflow-y-auto md:p-12">{children}</div>
      </div>

      <div
        className='absolute inset-x-0 bottom-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:bottom-[calc(100%-70rem)]'
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
    </>
  )
}
