export type Patient = {
  id: string
  name: string
  caretaker: string
  email: string
  data: Date
  symptoms: string 
}

// That type copied the type patient and omit the id
export type DraftPatient = Omit<Patient, 'id'>