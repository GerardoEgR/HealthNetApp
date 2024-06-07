'use client'

import { checks, specialties } from '@/lib/Constants'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useFormState } from '@/store/formState'

type AgendaFormValues = {
  area: string
  especialidad: string
  centroAtencion: string
  rut: string
  nombre: string
  apellido: string
  email: string
}

export default function Agenda() {
  const { register, handleSubmit, formState: { errors } } = useForm<AgendaFormValues>()
  const setFormState = useFormState((state) => state.setFormState)

  const onSubmit: SubmitHandler<AgendaFormValues> = (data) => {
    if (Object.keys(errors).length === 0) {
      sessionStorage.setItem('data', JSON.stringify(data))
      setFormState(true)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='space-y-12'>
          <div className='border-b border-gray-900/10 pb-12'>
            <div className='mt-5 space-y-10'>
              <fieldset>
                <legend className='text-xl font-semibold leading-6 text-blue-500'>1. SELECCIONE ÁREA</legend>
                <div className='my-6 space-y-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                  {checks.map((elem) => (
                    <div key={elem.id} className='flex items-center gap-x-3 sm:col-span-3 ms-10'>
                      <input
                        id={elem.id.toString()}
                        {...register('area', { required: 'Al menos un campo es requerido' })}
                        type='radio'
                        value={elem.title}
                        className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                      />
                      <label htmlFor={elem.id.toString()} className='block text-sm font-medium leading-6 text-gray-900'>
                        {elem.title}
                      </label>
                    </div>
                  ))}
                </div>
                {errors.area && <span className='text-red-500 mb-0'>{errors.area.message}</span>}
              </fieldset>
            </div>
          </div>

          <div className='border-b border-gray-900/10 pb-12'>
            <h2 className='text-xl font-semibold leading-6 text-blue-500'>2. BÚSQUEDA</h2>
            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
              <div className='sm:col-span-3'>
                <label htmlFor='especialidad' className='block text-sm font-medium leading-6 text-gray-900'>
                  Especialidad
                </label>
                <div className='mt-2'>
                  <select
                    id='especialidad'
                    {...register('especialidad', { required: 'Este campo es requerido' })}
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
                  >
                    {specialties.map((elem) => (
                      <option key={elem.id} value={elem.title}>{elem.title}</option>
                    ))}
                  </select>
                </div>
                {errors.especialidad && <span className='text-red-500'>{errors.especialidad.message}</span>}
              </div>

              <div className='sm:col-span-3'>
                <label htmlFor='centroAtencion' className='block text-sm font-medium leading-6 text-gray-900'>
                  Centro de Atención
                </label>
                <div className='mt-2'>
                  <select
                    id='centroAtencion'
                    {...register('centroAtencion', { required: 'Este campo es requerido' })}
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
                  >
                    <option value=''>Seleccione una opción</option>
                    <option value='Santiago'>Santiago - Presencial</option>
                    <option value='Telemedicina'>Telemedicina</option>
                  </select>
                </div>
                {errors.centroAtencion && <span className='text-red-500'>{errors.centroAtencion.message}</span>}
              </div>
            </div>
          </div>

          <div className='border-b border-gray-900/10 pb-12'>
            <h2 className='text-xl font-semibold leading-6 text-blue-500'>3. DATOS DEL PACIENTE</h2>
            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
              <div className='sm:col-span-3'>
                <label htmlFor='rut' className='block text-sm font-medium leading-6 text-gray-900'>
                  Rut
                </label>
                <div className='mt-2'>
                  <input
                    type='text'
                    id='rut'
                    {...register('rut', { required: 'Este campo es requerido' })}
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
                {errors.rut && <span className='text-red-500'>{errors.rut.message}</span>}
              </div>

              <div className='sm:col-span-3'>
                <label htmlFor='nombre' className='block text-sm font-medium leading-6 text-gray-900'>
                  Nombre
                </label>
                <div className='mt-2'>
                  <input
                    type='text'
                    id='nombre'
                    {...register('nombre', { required: 'Este campo es requerido' })}
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
                {errors.nombre && <span className='text-red-500'>{errors.nombre.message}</span>}
              </div>

              <div className='sm:col-span-3'>
                <label htmlFor='apellido' className='block text-sm font-medium leading-6 text-gray-900'>
                  Apellido
                </label>
                <div className='mt-2'>
                  <input
                    type='text'
                    id='apellido'
                    {...register('apellido', { required: 'Este campo es requerido' })}
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
                {errors.apellido && <span className='text-red-500'>{errors.apellido.message}</span>}
              </div>

              <div className='sm:col-span-3'>
                <label htmlFor='email' className='block text-sm font-medium leading-6 text-gray-900'>
                  Email
                </label>
                <div className='mt-2'>
                  <input
                    id='email'
                    {...register('email', {
                      required: 'Este campo es requerido',
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: 'Email inválido'
                      }
                    })}
                    type='email'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
                {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
              </div>
            </div>
          </div>
        </div>
        <button type='submit' className='mt-4 rounded-md bg-blue-400 px-3 py-2 text-sm font-semibold text-white shadow-sm border border-blue-600 hover:bg-blue-600 focus:outline-none'>
          Guardar
        </button>
      </form>
    </>
  )
}
