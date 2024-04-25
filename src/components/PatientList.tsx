import { usePatientStore } from "../store"
import PatientDetails from "./PatientDetails"

export default function PatientList() {

  // This function use the state in usePatientStore
  const patients = usePatientStore(state => state.patients)
  return (
    <div className="md:-1/2 lg:3/5 md:h-screen overflow-y-scroll">
      {/* ternary operator (... ? ... : ...) */}
      {patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {''}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
          {patients.map( patient => (
            <PatientDetails 
              // The id of each of the patients
              key={patient.id}
              // The custom hook
              patient={patient}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes {''}
            <span className="text-indigo-600 font-bold">y aparecerán en este lugar</span>
          </p>
        </>
      )}
    </div>
  )
}
