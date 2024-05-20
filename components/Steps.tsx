import { steps } from '../utils/Constants'

export default function Steps() {
  return (
    <>
      {steps.map((elem, index) => (
        <div key={elem.id} className={`flex relative pb-12 items-center ${index !== steps.length - 1 ? 'pb-12' : ''}`}>
          {index !== steps.length - 1 && (
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-300 pointer-events-none"></div>
            </div>
          )}
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-500 inline-flex items-center justify-center text-white relative z-10">
            {elem.icon}
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">{elem.title}</h2>
          </div>
        </div>
      ))}
    </>
  )
}
