import { usePatientStore } from "../store"
import { Patient } from "../types"
import PatientDetailItem from "./PatientDetailItem"

// The type of the props to correctly assign the hook
type PatientDetailsProps = {
  // This patient is type Patient from Types
  patient: Patient
}

export default function PatientDetails({patient}: PatientDetailsProps) {

  // We assign the delete function 
  const deletePatient = usePatientStore((state) => state.deletePatient)
  // We assign the edit function 
  const getPatientById = usePatientStore((state) => state.getPatientById)

  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      <PatientDetailItem label="ID" data={patient.id} />
      <PatientDetailItem label="Name" data={patient.name} />
      <PatientDetailItem label="Caretaker" data={patient.caretaker} />
      <PatientDetailItem label="Email" data={patient.email} />
      <PatientDetailItem label="Date" data={patient.date.toString()} />
      <PatientDetailItem label="Symptoms" data={patient.symptoms} />
      
      <div className="flex flex-col lg:flex-row justify-between gap-3 mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={() => getPatientById(patient.id)}
        >Editar</button>

        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={() => deletePatient(patient.id)}
        >Eliminar</button>
      </div>
    </div>
  )
}
