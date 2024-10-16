'use client'
import React, { useEffect, useState } from 'react'
import { useFormState } from '@/store/formState'
import { Appointment, AppointmentData, UserData } from '@/lib/interfaces'
import axios from 'axios'

export default function IdentificationPage() {
  const setFormState = useFormState((state) => state.setFormState)
  const [appointmentInfoConfirm, setAppointmentInfoConfirm] = useState<AppointmentData | null>(null)

  const handleAppointmentConfirm = async () => {
    if (appointmentInfoConfirm) {

      try {
        const res = await fetch('/api/appointment/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(appointmentInfoConfirm)
        }).then((res) => res.json())



        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        console.log('Success:', res);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  }

  useEffect(() => {
    const userData = sessionStorage.getItem('data')
    const appointment = sessionStorage.getItem('appointment')

    if (userData && appointment) {
      const userDataJson: UserData = JSON.parse(userData)
      const appointmentJson: Appointment = JSON.parse(appointment)

      const appointmentData: AppointmentData = {
        rut: userDataJson.rut,
        nombre: userDataJson.nombre,
        apellido: userDataJson.apellido,
        email: userDataJson.email,
        area: userDataJson.area,
        especialidad: userDataJson.especialidad,
        centroAtencion: userDataJson.centroAtencion,
        date: appointmentJson.date,
        time: appointmentJson.time
      }

      setAppointmentInfoConfirm(appointmentData)
      // handleAppointmentConfirm()

    } else {
      if (!userData) {
        console.error('No user data found in sessionStorage')
      }
      if (!appointment) {
        console.error('No appointment data found in sessionStorage')
      }
    }
  }, [])

  return (
    <div className='flex flex-col justify-center items-center pt-6'>
      <div className='max-w-xl p-6 border border-slate-500 rounded-lg shadow bg-blue-200'>
        <h5 className='mb-10 text-2xl font-bold tracking-tight text-gray-950'>INFORMACIÓN SOBRE TU CITA</h5>

        <div className='flex mb-3'>
          <svg className='h-12 w-12 p-1 mx-5 border-2 border-slate-50 rounded-md drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]' xmlns='http://www.w3.org/2000/svg' width='128' height='128' viewBox='0 0 512 512'>
            <path fill='#ffffff' d='M110.037 23.27c-1.32.075-2.665.417-4.014 1.073L79 41.943l10.5 21.58l30.525-10.405c13.04-6.344 2.762-30.57-9.988-29.847zm110.926 0c-12.75-.723-23.027 23.504-9.988 29.848L241.5 63.523l10.5-21.58l-27.023-17.6c-1.35-.656-2.695-.998-4.014-1.072zM65.475 51.473L28.5 69.96v5.563c0 42.4 16.395 98.962 41.02 146.164c12.315 23.6 26.693 44.793 42.67 60.504c13.498 13.274 28.41 22.913 44.398 25.585c1.247 64.995 17.26 110.633 42.027 140.044c25.804 30.642 61.022 42.836 95.446 40.685c53.712-3.357 106.658-40.218 127.342-92.984a79.7 79.7 0 0 1-18.777-2.27c-19.496 43.688-64.946 74.494-109.686 77.29c-29.577 1.85-58.36-7.957-80.555-34.314c-21.268-25.256-36.55-66.5-37.793-128.483c15.92-2.713 30.77-12.33 44.22-25.552c15.975-15.71 30.353-36.903 42.667-60.503c24.625-47.202 41.02-103.764 41.02-146.164V69.96l-36.975-18.488l-8.05 16.1l26.763 13.384c-1.344 37.38-16.41 89.65-38.717 132.403c-11.685 22.398-25.307 42.205-39.33 55.995s-28.065 21.168-40.69 21.168s-26.666-7.378-40.69-21.168s-27.645-33.597-39.33-55.997c-22.308-42.753-37.374-95.02-38.718-132.402l26.763-13.383l-8.05-16.1zM421.5 253.522c-34.348 0-62 27.652-62 62c0 34.35 27.652 62 62 62s62-27.65 62-62c0-34.348-27.652-62-62-62m0 30c17.567 0 32 14.434 32 32s-14.433 32-32 32s-32-14.433-32-32c0-17.566 14.433-32 32-32m0 18c-7.84 0-14 6.162-14 14c0 7.84 6.16 14 14 14s14-6.16 14-14c0-7.838-6.16-14-14-14' />
          </svg>
          <div>
            <p className='font-normal text-sm items-center text-gray-700'>Especialidad</p>
            <p className='mb-3 font-normal items-center text-gray-800'>
              {appointmentInfoConfirm?.especialidad.toLocaleUpperCase()}
            </p>
          </div>
        </div>

        <div className='flex mb-3'>
          <svg className='h-12 w-12 p-1 mx-5 border-2 border-slate-50 rounded-md drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]' xmlns='http://www.w3.org/2000/svg' width='128' height='128' viewBox='0 0 28 28'>
            <path fill='#ffffff' d='M10.75 4.498a.25.25 0 0 0-.25.25V9.75a.75.75 0 0 1-.75.75h-5a.25.25 0 0 0-.25.25v6.5c0 .138.112.25.25.25h5a.75.75 0 0 1 .75.75v5.001c0 .138.112.25.25.25h6.5a.25.25 0 0 0 .25-.25V18.25a.75.75 0 0 1 .75-.75h5a.25.25 0 0 0 .25-.25v-6.5a.25.25 0 0 0-.25-.25h-5a.75.75 0 0 1-.75-.75V4.748a.25.25 0 0 0-.25-.25zM9 4.748c0-.966.784-1.75 1.75-1.75h6.5c.966 0 1.75.784 1.75 1.75V9h4.25c.966 0 1.75.783 1.75 1.75v6.5A1.75 1.75 0 0 1 23.25 19H19v4.251a1.75 1.75 0 0 1-1.75 1.75h-6.5A1.75 1.75 0 0 1 9 23.251V19H4.75A1.75 1.75 0 0 1 3 17.25v-6.5C3 9.782 3.784 9 4.75 9H9z' />
          </svg>
          <div>
            <p className='font-normal text-sm items-center text-gray-700'>Área</p>
            <p className='mb-3 font-normal items-center text-gray-800'>
              {appointmentInfoConfirm?.area.toLocaleUpperCase()}
            </p>
          </div>
        </div>

        <div className='flex mb-3'>
          <svg className='h-12 w-12 p-1 mx-5 border-2 border-slate-50 rounded-md drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]' xmlns='http://www.w3.org/2000/svg' width='128' height='128' viewBox='0 0 20 20'>
            <g fill='#ffffff'><path fillRule='evenodd' d='M7.25 5.25a1 1 0 0 1 1-1h3.5a1 1 0 1 1 0 2h-3.5a1 1 0 0 1-1-1' clipRule='evenodd' /><path fillRule='evenodd' d='M10 8a1 1 0 0 1-1-1V3.5a1 1 0 0 1 2 0V7a1 1 0 0 1-1 1' clipRule='evenodd' /><path fillRule='evenodd' d='M6 1.5a.5.5 0 0 0-.5.5v4.824a1 1 0 0 1-1 1H2a.5.5 0 0 0-.5.5V18a.5.5 0 0 0 .5.5h16a.5.5 0 0 0 .5-.5V8.324a.5.5 0 0 0-.5-.5h-2.5a1 1 0 0 1-1-1V2a.5.5 0 0 0-.5-.5zM4.5 2A1.5 1.5 0 0 1 6 .5h8A1.5 1.5 0 0 1 15.5 2v4.824H18a1.5 1.5 0 0 1 1.5 1.5V18a1.5 1.5 0 0 1-1.5 1.5H2A1.5 1.5 0 0 1 .5 18V8.324a1.5 1.5 0 0 1 1.5-1.5h2.5z' clipRule='evenodd' /><path d='M3.5 10.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z' /><path fillRule='evenodd' d='M3.25 10.5c0-.69.56-1.25 1.25-1.25h1c.69 0 1.25.56 1.25 1.25v1c0 .69-.56 1.25-1.25 1.25h-1c-.69 0-1.25-.56-1.25-1.25zm1.25-.75a.75.75 0 0 0-.75.75v1c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75z' clipRule='evenodd' /><path d='M8.5 10.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z' /><path fillRule='evenodd' d='M8.25 10.5c0-.69.56-1.25 1.25-1.25h1c.69 0 1.25.56 1.25 1.25v1c0 .69-.56 1.25-1.25 1.25h-1c-.69 0-1.25-.56-1.25-1.25zm1.25-.75a.75.75 0 0 0-.75.75v1c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75z' clipRule='evenodd' /><path d='M13.5 10.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z' /><path fillRule='evenodd' d='M13.25 10.5c0-.69.56-1.25 1.25-1.25h1c.69 0 1.25.56 1.25 1.25v1c0 .69-.56 1.25-1.25 1.25h-1c-.69 0-1.25-.56-1.25-1.25zm1.25-.75a.75.75 0 0 0-.75.75v1c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75z' clipRule='evenodd' /><path d='M3.5 15a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z' /><path fillRule='evenodd' d='M3.25 15c0-.69.56-1.25 1.25-1.25h1c.69 0 1.25.56 1.25 1.25v1c0 .69-.56 1.25-1.25 1.25h-1c-.69 0-1.25-.56-1.25-1.25zm1.25-.75a.75.75 0 0 0-.75.75v1c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75z' clipRule='evenodd' /><path d='M8.5 15a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z' /><path fillRule='evenodd' d='M8.25 15c0-.69.56-1.25 1.25-1.25h1c.69 0 1.25.56 1.25 1.25v1c0 .69-.56 1.25-1.25 1.25h-1c-.69 0-1.25-.56-1.25-1.25zm1.25-.75a.75.75 0 0 0-.75.75v1c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75z' clipRule='evenodd' /><path d='M13.5 15a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z' /><path fillRule='evenodd' d='M13.25 15c0-.69.56-1.25 1.25-1.25h1c.69 0 1.25.56 1.25 1.25v1c0 .69-.56 1.25-1.25 1.25h-1c-.69 0-1.25-.56-1.25-1.25zm1.25-.75a.75.75 0 0 0-.75.75v1c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75z' clipRule='evenodd' /></g>
          </svg>
          <div>
            <p className='font-normal text-sm items-center text-gray-700'>Centro de Atención</p>
            <p className='mb-3 font-normal items-center text-gray-800'>
              {appointmentInfoConfirm?.centroAtencion.toLocaleUpperCase()}
            </p>
          </div>
        </div>

        <div className='flex mb-3'>
          <svg className='h-12 w-12 p-1 mx-5 border-2 border-slate-50 rounded-md drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]' xmlns='http://www.w3.org/2000/svg' width='128' height='128' viewBox='0 0 256 256'><path fill='#ffffff' d='M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56' /></svg>
          <div>
            <p className='font-normal text-sm items-center text-gray-700'>Paciente</p>
            <p className='mb-3 font-normal items-center text-gray-800'>
              {appointmentInfoConfirm?.nombre.toLocaleUpperCase()} {appointmentInfoConfirm?.apellido.toLocaleUpperCase()}
            </p>
          </div>
        </div>

        <div className='flex mt-3'>
          <svg className='h-12 w-12 p-1 mx-5 border-2 border-slate-50 rounded-md drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]' xmlns='http://www.w3.org/2000/svg' width='128' height='128' viewBox='0 0 14 14'><g fill='none' stroke='#ffffff' strokeLinecap='round' strokeLinejoin='round'><path d='M9.5 1.5H11a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1h1.5' /><rect width='5' height='2.5' x='4.5' y='.5' rx='1' /><path d='M4.5 5.5h5M4.5 8h5m-5 2.5h5' /></g></svg>
          <div>
            <p className='font-normal text-sm items-center text-gray-700'>Fecha</p>
            <p className='mb-3 font-normal items-center text-gray-800'>
              {appointmentInfoConfirm?.date.toLocaleUpperCase()} A LAS {appointmentInfoConfirm?.time.toLocaleUpperCase()} HRS
            </p>
          </div>
        </div>

        <button className='inline-flex w-full justify-center items-center px-3 py-2 mt-10 text-sm font-medium text-center text-white bg-blue-600 rounded-lg border border-blue-800 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700'
          onClick={() => {
            setFormState(true)
            handleAppointmentConfirm()
          }}>
          Confirmar Hora
        </button>
      </div>
    </div >
  )
}
