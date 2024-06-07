import { useFormState } from '@/store/formState'

interface TimeSlotsProps {
  date: Date
  timeSlots: string[]
  onSelectTime: (time: string) => void
}

export default function TimeSlots({ date, timeSlots, onSelectTime }: TimeSlotsProps) {
  const setFormState = useFormState((state) => state.setFormState)

  return (
    <div className='flex flex-col justify-center items-center pt-6'>
      <h2 className='text-xl my-10'>Horarios disponibles para el <span className='font-bold underline text-blue-500 decoration-blue-500'>{date.toLocaleDateString()}</span></h2>
      <div>
        {timeSlots.map((time, index) => (
          <div key={index} className='mt-4 flex flex-col w-80 justify-center items-center rounded-md  hover:bg-blue-300 '>
            <button key={index} onClick={() => {
              onSelectTime(time)
              setFormState(true)
            }}>
              {time}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
