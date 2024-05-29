import Clinic1 from '../assets/clinic-1.jpg'
import Clinic2 from '../assets/clinic-2.jpg'
import Clinic3 from '../assets/clinic-3.jpg'
import Clinic4 from '../assets/clinic-4.jpg'

export const slides = [
  {
    id: 1,
    src: Clinic1,
    title: 'Aprovecha tu crédito',
    desc: 'Pagas con tu tarjeta de crédito a 12 meses sin intereses en todas tus prestaciones de salud.'
  },
  {
    id: 2,
    src: Clinic2,
    title: 'Contrata tu seguro hoy',
    desc: 'Desde $14.000 y agrega cobertura ambulatoria y/o de accidente para ti y tu familia.'
  },
  {
    id: 3,
    src: Clinic3,
    title: 'Recibamos juntos a tu bebé',
    desc: 'Conoce el beneficio copago fijo en tu parto o cesárea.'
  },
  {
    id: 4,
    src: Clinic4,
    title: 'Prefiere TeleUrgencia',
    desc: 'Atención rápida y segura con medicos de urgencia adulto y pediátrico.'
  }
]

export const services = [
  {
    id: 1,
    icon: <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' style={{ fill: 'rgba(255, 255, 255, 1);transform: ;msFilter:' }}><circle cx='12' cy='4' r='2'></circle><path d='M14.948 7.684A.997.997 0 0 0 14 7h-4a.998.998 0 0 0-.948.684l-2 6 1.775.593L8 18h2v4h4v-4h2l-.827-3.724 1.775-.593-2-5.999z'></path></svg>,
    title: 'Urgencia gineco-obstétrica',
    desc: 'Para atenciones de emergencia en el ámbito gineco-obstétrico.'
  },
  {
    id: 2,
    icon: <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' style={{ fill: 'rgba(255, 255, 255, 1);transform: ;msFilter:' }}><path d='M20.84 7.4 22.25 6 18 1.75l-1.4 1.41L18 4.58 16.6 6l-2.13-2.13-1.41-1.42-1.41 1.42.7.71L3 13.92a2 2 0 0 0-.3 2.45L4 18.56l-2.25 2.28 1.41 1.41L5.44 20l2.19 1.31a2 2 0 0 0 1 .28 2 2 0 0 0 1.45-.59l9.34-9.34.71.7 1.42-1.41-1.42-1.42L18 7.4 19.42 6zM18 10.23l-9.34 9.35L6 18l-1.58-2.66.86-.87 2.83 2.83 1.42-1.41-2.83-2.83 1.41-1.41 2.83 2.82 1.41-1.41-2.83-2.83 1.42-1.41 2.83 2.83 1.41-1.42-2.83-2.83L13.77 6z'></path></svg>,
    title: 'Cirugía robótica',
    desc: 'Procedimientos mínimamente invasivos con la ayuda de un robot de última generación.'
  },
  {
    id: 3,
    icon: <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' style={{ fill: 'rgba(255, 255, 255, 1);transform: ;msFilter:' }}><path d='M8.999 20.133a4.969 4.969 0 0 0 3.536-1.465l7.134-7.133a5.007 5.007 0 0 0-.001-7.072C18.723 3.52 17.467 3 16.132 3s-2.591.52-3.534 1.464l-7.134 7.134a5.009 5.009 0 0 0 0 7.072 4.97 4.97 0 0 0 3.535 1.463zm5.013-14.255A2.979 2.979 0 0 1 16.132 5c.802 0 1.556.313 2.122.878a3.004 3.004 0 0 1 .001 4.243l-2.893 2.892L11.12 8.77l2.892-2.892zm-7.134 7.134 2.828-2.828 4.242 4.243-2.827 2.827c-1.133 1.133-3.11 1.132-4.243.001a3.005 3.005 0 0 1 0-4.243z'></path></svg>,
    title: 'Medicina nuclear',
    desc: 'Diagnóstico o tratamiento de enfermedades, a través de pequeñas cantidades de material radioactivo.'
  },
  {
    id: 4,
    icon: <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' style={{ fill: 'rgba(255, 255, 255, 1);transform: ;msFilter:' }}><path d='m13.293 2.707.818.818L3.318 14.318C2.468 15.168 2 16.298 2 17.5s.468 2.332 1.318 3.183C4.169 21.532 5.299 22 6.5 22s2.331-.468 3.182-1.318L20.475 9.889l.818.818 1.414-1.414-8-8-1.414 1.414zm3.182 8.354-2.403-2.404-1.414 1.414 2.403 2.404-1.414 1.415-.99-.99-1.414 1.414.99.99-1.415 1.415-2.403-2.404L7 15.728l2.403 2.404-1.136 1.136c-.945.944-2.59.944-3.535 0C4.26 18.795 4 18.168 4 17.5s.26-1.295.732-1.768L15.525 4.939l3.535 3.535-2.585 2.587z'></path></svg>,
    title: 'Anatomía patológica',
    desc: 'Análisis de células o tejidos por parte de nuestro equipo de expertos, para detectar enfermedades.'
  },
  {
    id: 5,
    icon: <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' style={{ fill: 'rgba(255, 255, 255, 1);transform: ;msFilter:' }}><path d='M15 2.013H9V9H2v6h7v6.987h6V15h7V9h-7z'></path></svg>,
    title: 'Cirugía mayor ambulatoria',
    desc: 'Modelo de intervención quirúrgico, con estadía de corta duración en la clínica.'
  },
  {
    id: 6,
    icon: <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' style={{ fill: 'rgba(255, 255, 255, 1);transform: ;msFilter:' }}><path d='M21.86 12.48 19.15 8a2 2 0 0 0-1.72-1H15V5a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 1 1.73 3.49 3.49 0 0 0 7 .27h3.1a3.48 3.48 0 0 0 6.9 0 2 2 0 0 0 2-2v-3a1.07 1.07 0 0 0-.14-.52zM6.5 19A1.5 1.5 0 1 1 8 17.5 1.5 1.5 0 0 1 6.5 19zm5.5-8h-2v2H8v-2H6V9h2V7h2v2h2zm4.5 8a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5zM15 12V9h2.43l1.8 3z'></path></svg>,
    title: 'Urgencia',
    desc: 'Atención en una de nuestras sucursales, según la complejidad de tu caso.'
  },
  {
    id: 6,
    icon: <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' style={{ fill: 'rgba(255, 255, 255, 1);transform: ;msFilter:' }}><path d='M4 21h9.62a3.995 3.995 0 0 0 3.037-1.397l5.102-5.952a1 1 0 0 0-.442-1.6l-1.968-.656a3.043 3.043 0 0 0-2.823.503l-3.185 2.547-.617-1.235A3.98 3.98 0 0 0 9.146 11H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2zm0-8h5.146c.763 0 1.448.423 1.789 1.105l.447.895H7v2h6.014a.996.996 0 0 0 .442-.11l.003-.001.004-.002h.003l.002-.001h.004l.001-.001c.011.003.003-.001.003-.001.012 0 .002-.001.002-.001h.001l.002-.001.003-.001.002-.001.002-.001.003-.001.002-.001.002-.001.003-.002.002-.001.002-.001.003-.001.002-.001h.001l.002-.001h.001l.002-.001.002-.001c.011-.001.003-.001.003-.001l.002-.001a.915.915 0 0 0 .11-.078l4.146-3.317c.261-.208.623-.273.94-.167l.557.186-4.133 4.823a2.029 2.029 0 0 1-1.52.688H4v-6zm9.761-10.674C13.3 2.832 11 5.457 11 7.5c0 1.93 1.57 3.5 3.5 3.5S18 9.43 18 7.5c0-2.043-2.3-4.668-2.761-5.174-.379-.416-1.099-.416-1.478 0zM16 7.5c0 .827-.673 1.5-1.5 1.5S13 8.327 13 7.5c0-.708.738-1.934 1.5-2.934.762 1 1.5 2.226 1.5 2.934z'></path></svg>,
    title: 'Banco de sangre',
    desc: 'Importante servicio para salvar vidas, colaborar en el tratamiento de enfermedades y mucho más.'
  },
  {
    id: 6,
    icon: <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' style={{ fill: 'rgba(255, 255, 255, 1);transform: ;msFilter:' }}><path d='M20 6h-3V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM9 4h6v2H9zm7 10h-3v3h-2v-3H8v-2h3V9h2v3h3z'></path></svg>,
    title: 'Telemedicina',
    desc: 'Teleconsulta médica desde donde estés, con más de 200 especialistas disponibles para ti.'
  },
  {
    id: 6,
    icon: <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' style={{ fill: 'rgba(255, 255, 255, 1);transform: ;msFilter:' }}><path d='M20.84 7.4 22.25 6 18 1.75l-1.4 1.41L18 4.58 16.6 6l-2.13-2.13-1.41-1.42-1.41 1.42.7.71L3 13.92a2 2 0 0 0-.3 2.45L4 18.56l-2.25 2.28 1.41 1.41L5.44 20l2.19 1.31a2 2 0 0 0 1 .28 2 2 0 0 0 1.45-.59l9.34-9.34.71.7 1.42-1.41-1.42-1.42L18 7.4 19.42 6zM18 10.23l-9.34 9.35L6 18l-1.58-2.66.86-.87 2.83 2.83 1.42-1.41-2.83-2.83 1.41-1.41 2.83 2.82 1.41-1.41-2.83-2.83 1.42-1.41 2.83 2.83 1.41-1.42-2.83-2.83L13.77 6z'></path></svg>,
    title: 'Vacunatorio',
    desc: 'Vacunas ministeriales y particulares en nuestros 3 establecimientos, según tus necesidades.'
  }
]

export const steps = [
  {
    id: 1,
    icon: <svg xmlns='http:www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='w-6 h-6'>
      <path strokeLinecap='round' strokeLinejoin='round' d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z' />
    </svg>,
    checkIcon: <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='size-6'>
      <path stroke-linecap='round' stroke-linejoin='round' d='m4.5 12.75 6 6 9-13.5' />
    </svg>,
    title: 'BÚSQUEDA',
    path: '/agenda/select'
  },
  {
    id: 2,
    icon: <svg xmlns='http:www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='w-6 h-6'>
      <path strokeLinecap='round' strokeLinejoin='round' d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z' />
    </svg>,
    checkIcon: <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='size-6'>
      <path stroke-linecap='round' stroke-linejoin='round' d='m4.5 12.75 6 6 9-13.5' />
    </svg>,
    title: 'SELECCIÓN',
    path: '/agenda/identification'
  },
  {
    id: 3,
    icon: <svg fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' className='w-6 h-6' viewBox='0 0 24 24'>
      <path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'></path>
      <circle cx='12' cy='7' r='4'></circle>
    </svg>,
    checkIcon: <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='size-6'>
      <path stroke-linecap='round' stroke-linejoin='round' d='m4.5 12.75 6 6 9-13.5' />
    </svg>,
    title: 'IDENTIFICACIÓN',
    path: '/agenda/success'
  },
  {
    id: 4,
    icon: <svg fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' className='w-6 h-6' viewBox='0 0 24 24'>
      <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
      <path d='M22 4L12 14.01l-3-3'></path>
    </svg>,
    checkIcon: <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='size-6'>
      <path stroke-linecap='round' stroke-linejoin='round' d='m4.5 12.75 6 6 9-13.5' />
    </svg>,
    title: 'RESERVA EXITOSA!',
    path: '/'
  }
]

export const checks = [
  {
    id: 1,
    title: 'CONSULTAS',
  },
  {
    id: 2,
    title: 'TELEMEDICINA/TELEURGENCIA',
  },
  {
    id: 3,
    title: 'RADIOLOGÍA E IMÁGENES',
  },
  {
    id: 4,
    title: 'PROCEDIMIENTOS E EXÁMENES',
  },
  {
    id: 5,
    title: 'LABORATORIO CLÍNICO',
  },
  {
    id: 6,
    title: 'KINESIOLOGÍA',
  },
  {
    id: 7,
    title: 'ODONTOLOGÍA',
  },
  {
    id: 8,
    title: 'BANCO DE SANGRE',
  },
  {
    id: 9,
    title: 'VACUNATORIO',
  },
  {
    id: 10,
    title: 'PAD FONASA',
  },
]