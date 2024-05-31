'use client'

import React, { useEffect, useState } from 'react'
import CustomCalendar from '@/components/CustomCalendar'
import TimeSlots from '@/components/TimeSlots'

const availableTimeSlots = ['09:00', '09:30', '10:00', '10:30', '11:00']

export default function SelectPage() {

  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true);
  }, [])

  const handleDateChange = (date: Date) => {
    setSelectedDate(date)
    setSelectedTime(null) // Reiniciar el horario seleccionado al cambiar la fecha
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
  }

  if (!isMounted) {
    return null
  }

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-xl font-semibold leading-6 text-blue-500 mb-10'>Reserva de Horas Médicas</h1>
      <CustomCalendar onDateChange={handleDateChange} />
      {selectedDate && !selectedTime && (
        <TimeSlots
          date={selectedDate}
          timeSlots={availableTimeSlots}
          onSelectTime={handleTimeSelect}
        />
      )}
      {selectedTime && (
        <p className='text-xl my-10'>Cita seleccionada: <span className='font-bold text-blue-500'>{selectedDate?.toLocaleDateString()} a las {selectedTime} Hrs.</span></p>
      )}
    </div>
  )
}
