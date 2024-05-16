import Link from "next/link"


const footer = () => {
  return (
    <footer className='flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-gray-400 py-6 text-center md:justify-between bg-blue-200 px-24'>
      &copy; 2024 HealthNet
      <nav className='flex flex-col-wrap items-center gap-y-2 gap-x-8'>
        <Link href='/' className='mr-5 hover:text-gray-900 hover:underline hover:drop-shadow-[0_0_3px_rgba(0,0,0,0.5)] cursor-pointer '>Home</Link>
        <Link href='#services' className='mr-5 hover:text-gray-900 hover:underline hover:drop-shadow-[0_0_3px_rgba(0,0,0,0.5)] cursor-pointer'>Servicios</Link>
        <Link href='#certificates' className='mr-5 hover:text-gray-900 hover:underline hover:drop-shadow-[0_0_3px_rgba(0,0,0,0.5)] cursor-pointer'>Elígenos</Link>
        <Link href='#workshops' className='mr-5 hover:text-gray-900 hover:underline hover:drop-shadow-[0_0_3px_rgba(0,0,0,0.5)] cursor-pointer'>Infórmate</Link>
      </nav>
    </footer>
  )
}

export default footer