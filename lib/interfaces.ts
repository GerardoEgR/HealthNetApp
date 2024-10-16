export interface UserData {
  rut: string
  nombre: string
  apellido: string
  email: string
  area: string
  especialidad: string
  centroAtencion: string
}

export interface Appointment {

  date: string
  time: string
}

export interface AppointmentData extends UserData, Appointment { }