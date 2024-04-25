import { usePatientStore } from "../store"

export default function PatientList() {

  // This functino use the state in usePatientStore
  const patients = usePatientStore(state => state.patients)
  console.log(patients)
  return (
    <div>PatientList</div>
  )
}
