import { AppointmentData } from '@/lib/interfaces'
import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const data: AppointmentData = await req.json()
    const res = await prisma.appointment.create({
      data: { ...data }
    })
    return NextResponse.json(res, { status: 200 })
  } catch (error) {
    console.log('Error', error)
    return new NextResponse('Internal Error', { status: 500 })
  }

}

export async function GET() {
  try {
    const res = await prisma.appointment.findMany()
    return NextResponse.json(res, { status: 200 })
  } catch (error) {
    console.log('Error', error)
    return new NextResponse('Internal Error', { status: 500 })
  }
}