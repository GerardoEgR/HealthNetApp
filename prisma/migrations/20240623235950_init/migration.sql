-- CreateTable
CREATE TABLE "Appointment" (
    "id" SERIAL NOT NULL,
    "apellido" TEXT NOT NULL,
    "area" TEXT NOT NULL,
    "centroAtencion" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "email" TEXT NOT NULL,
    "especialidad" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "rut" TEXT NOT NULL,
    "time" TIME NOT NULL,

    CONSTRAINT "Appointment_pkey" PRIMARY KEY ("id")
);
