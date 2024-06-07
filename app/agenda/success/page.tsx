
export default function SuccessPage() {
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <div id='alert-additional-content-3' className=' w-full p-4 mb-4 text-green-600 border-2 border-green-500 rounded-lg bg-blue-100 drop-shadow-[1px_1px_3px_rgba(0,0,0,0.7)]' role='alert'>
        <div className='flex justify-center items-center my-3'>
          <svg className='flex-shrink-0 w-4 h-4 me-2' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 20 20'>
            <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z' />
          </svg>
          <span className='sr-only'>Info</span>
          <h3 className='text-xl font-medium drop-shadow-[0_0_0_rgba(0,0,0,0.5)]'>Tu hora ha sido agendada con exito</h3>
        </div>
        <div className='flex justify-center items-center mb-5'>
          <h3 className='text-xl font-medium drop-shadow-[0_0_0_rgba(0,0,0,0.5)]'>¡Nos vemos pronto!</h3>
        </div>
        <div className='flex max-w-lg items-center mx-auto ps-20 mt-2 mb-4 text-md text-center drop-shadow-[0_0_0_rgba(0,0,0,0.5)]'>
          <svg className='flex-shrink-0 w-4 h-4 me-2' xmlns='http://www.w3.org/2000/svg' width='128' height='128' viewBox='0 0 24 24'><path fill='currentColor' d='M20 12a8 8 0 0 1-8 8a8 8 0 0 1-8-8a8 8 0 0 1 8-8c.76 0 1.5.11 2.2.31l1.57-1.57A9.8 9.8 0 0 0 12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10M7.91 10.08L6.5 11.5L11 16L21 6l-1.41-1.42L11 13.17z' /></svg>
          Recuerda traer tu orden médica si fue requerida.
        </div>
        <div className='flex max-w-lg items-center mx-auto ps-20 mt-2 mb-4 text-md text-center drop-shadow-[0_0_0_rgba(0,0,0,0.5)]'>
          <svg className='flex-shrink-0 w-4 h-4 me-2' xmlns='http://www.w3.org/2000/svg' width='128' height='128' viewBox='0 0 24 24'><path fill='currentColor' d='M20 12a8 8 0 0 1-8 8a8 8 0 0 1-8-8a8 8 0 0 1 8-8c.76 0 1.5.11 2.2.31l1.57-1.57A9.8 9.8 0 0 0 12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10M7.91 10.08L6.5 11.5L11 16L21 6l-1.41-1.42L11 13.17z' /></svg>
          Recuerda llegar con anticipación.
        </div>
        <div className='flex max-w-lg items-center mx-auto ps-20 mt-2 mb-4 text-md text-center drop-shadow-[0_0_0_rgba(0,0,0,0.5)]'>
          <svg className='flex-shrink-0 w-4 h-4 me-2' xmlns='http://www.w3.org/2000/svg' width='128' height='128' viewBox='0 0 24 24'><path fill='currentColor' d='M20 12a8 8 0 0 1-8 8a8 8 0 0 1-8-8a8 8 0 0 1 8-8c.76 0 1.5.11 2.2.31l1.57-1.57A9.8 9.8 0 0 0 12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10M7.91 10.08L6.5 11.5L11 16L21 6l-1.41-1.42L11 13.17z' /></svg>
          Trae tu cédula de identidad vigente.
        </div>
      </div>
    </div>

  )
}
