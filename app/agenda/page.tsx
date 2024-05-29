import { checks } from '../../lib/Constants'


export default function Agenda() {
  return (
    <>
      <form>
        <div className='space-y-12'>
          <div className='border-b border-gray-900/10 pb-12'>
            <div className='mt-5 space-y-10'>
              <fieldset>
                <legend className='text-xl font-semibold leading-6 text-blue-500'>1. SELECCIONE ÁREA</legend>
                <div className='mt-6 space-y-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                  {checks.map((elem) => (
                    <div key={elem.id} className='flex items-center gap-x-3 sm:col-span-3 ms-10'>
                      <input
                        id={elem.id.toString()}
                        name='push-notifications'
                        type='radio'
                        className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                      />
                      <label htmlFor='push-everything' className='block text-sm font-medium leading-6 text-gray-900'>
                        {elem.title}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
            </div>
          </div>

          <div className='border-b border-gray-900/10 pb-12'>
            <h2 className='text-xl font-semibold leading-6 text-blue-500'>2. BÚSQUEDA</h2>
            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
              <div className='sm:col-span-3'>
                <label htmlFor='country' className='block text-sm font-medium leading-6 text-gray-900'>
                  Especialidad
                </label>
                <div className='mt-2'>
                  <select
                    id='country'
                    name='country'
                    autoComplete='country-name'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>

              <div className='sm:col-span-3'>
                <label htmlFor='country' className='block text-sm font-medium leading-6 text-gray-900'>
                  Centro de Atención
                </label>
                <div className='mt-2'>
                  <select
                    id='country'
                    name='country'
                    autoComplete='country-name'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
                  >
                    <option>Santiago</option>
                    <option>Telemedicina</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className='border-b border-gray-900/10 pb-12'>
            <h2 className='text-xl font-semibold leading-6 text-blue-500'>3. DATOS DEL PACIENTE</h2>

            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
              <div className='sm:col-span-3'>
                <label htmlFor='first-name' className='block text-sm font-medium leading-6 text-gray-900'>
                  Rut
                </label>
                <div className='mt-2'>
                  <input
                    type='text'
                    name='first-name'
                    id='first-name'
                    autoComplete='given-name'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>

              <div className='sm:col-span-3'>
                <label htmlFor='first-name' className='block text-sm font-medium leading-6 text-gray-900'>
                  Nombre
                </label>
                <div className='mt-2'>
                  <input
                    type='text'
                    name='first-name'
                    id='first-name'
                    autoComplete='given-name'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>

              <div className='sm:col-span-3'>
                <label htmlFor='last-name' className='block text-sm font-medium leading-6 text-gray-900'>
                  Apellido
                </label>
                <div className='mt-2'>
                  <input
                    type='text'
                    name='last-name'
                    id='last-name'
                    autoComplete='family-name'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>

              <div className='sm:col-span-3'>
                <label htmlFor='email' className='block text-sm font-medium leading-6 text-gray-900'>
                  Email
                </label>
                <div className='mt-2'>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    autoComplete='email'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
            </div>
          </div>


        </div>

      </form>
    </>
  )
}
