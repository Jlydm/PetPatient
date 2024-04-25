
// This tape take the label and data to print on the info of the patient
type PatientDetailItemProps = {
  label: string
  data: string
}

export default function PatientDetailItem({label, data} : PatientDetailItemProps) {
  return (
    <p className="font-bold mb-3 text-gray-700 uppercase">{label}: {''}
      <span className="font-normal normal-case">{data}</span>
    </p>
  )
}
