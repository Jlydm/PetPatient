export type Patient = {
  id: string
  name: string
  caretaker: string
  email: string
  date: Date
  symptoms: string 
}

// This type copied the type patient and omit the id
export type DraftPatient = Omit<Patient, 'id'>