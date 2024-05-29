import React from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

interface CustomCalendarProps {
  onDateChange: (date: Date) => void
}

export default function CustomCalendar({ onDateChange }: CustomCalendarProps) {
  return (
    <Calendar
      className='rounded-lg'
      onClickDay={(value) => onDateChange(value)}
    />
  )
}
