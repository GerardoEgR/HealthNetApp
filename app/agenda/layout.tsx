'use client'
import Steps from '@/components/Steps'
import Link from 'next/link'
import { useState } from 'react'
import { steps } from '@/lib/Constants'
import { useFormState } from '@/store/formState'
import { usePathname } from 'next/navigation'

export default function layoutAgenda({
  children }: {
    children: React.ReactNode
  }) {
  const pathname = usePathname()
  const [currentStep, setCurrentStep] = useState(1)
  const formState = useFormState((state) => state.formState)
  const setFormState = useFormState((state) => state.setFormState)

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
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-10 h-10 text-gray-900 mx-4'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' />
        </svg>
        <h1 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl'>Reserva de Horas Médicas</h1>
      </div>
      <div className='bg-gradient-to-r from-transparent via-gray-500 to-transparent w-full h-px'></div>
      <div className='lg:container flex h-screen flex-col md:flex-row overflow-auto mx-auto'>
        <div className='w-full flex-none md:w-72 border-b border-gray-400 lg:border-r lg:border-b-0 py-10'>
          <Steps currentStep={currentStep} setCurrentStep={setCurrentStep} />
        </div>
        <div className='container grow p-6 md:overflow-y-auto md:p-12 flex flex-col min-h-screen'>
          {children}
          {steps.map((elem, index) => (
            <div key={index}
              className={`${elem.id === currentStep
                ? 'mt-auto flex flex-wrap items-center justify-between gap-x-6 p-4 inset-x-0'
                : 'hidden'
                }`}
            >
              {elem.id !== 1 ? (
                <Link href={elem.pathBack}
                  className={`${elem.id === currentStep
                    ? 'rounded-md bg-gray-300 border border-gray-500 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600'
                    : 'hidden'
                    }`}
                  onClick={() => {
                    setCurrentStep(currentStep - 1);
                  }}
                >
                  Volver
                </Link>
              ) : <div></div>}

              {(formState && elem.path === pathname) && (
                <Link
                  href={elem.pathNext}
                  className={`${elem.id === currentStep
                    ? 'rounded-md bg-blue-500 border border-blue-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
                    : 'hidden'
                    }`}
                  onClick={() => {
                    if (currentStep !== steps.length) setCurrentStep(currentStep + 1)
                    currentStep === steps.length - 1 ? setFormState(true) : setFormState(false)
                    if (elem.path === '/agenda/identification') {
                      sessionStorage.removeItem('data')
                      sessionStorage.removeItem('appointment')
                    }
                  }}
                >
                  {currentStep === steps.length ? 'Finalizar' : 'Siguiente'}
                </Link>
              )}
            </div>
          ))}
        </div>
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
      <footer className='flex w-full flex-col items-center gap-x-12 border-2 border-blue-200 border-t-gray-400 py-6 text-center md:justify-between bg-blue-200 px-24'>
        &copy; 2024 HealthNet
      </footer>
    </>
  )
}
