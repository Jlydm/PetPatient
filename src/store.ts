import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";
import { DraftPatient, Patient } from "./types";

// This type import the Patient array from index.ts to associate ↓
type PatientState = {
  // This is the state and the funtions that modify the state
  patients: Patient[];
  activeId: Patient["id"];
  // Here we declare a function... ↓
  // Function to add new patient
  addPatient: (data: DraftPatient) => void;
  // Function to delete a patient
  deletePatient: (id: Patient["id"]) => void;
  // Function to edit a patient
  getPatientById: (id: Patient["id"]) => void;
};

// We can write the login on the set of the function or create a function to do that
// The function take a DraftPatient patient and return a Patient
const createPatient = (patient: DraftPatient): Patient => {
  // This return returns a copy of patient adding an id to it
  return { ...patient, id: uuidv4() };
};

// This const is the custom hook
export const usePatientStore = create<PatientState>()(
  devtools((set) => ({
    patients: [],
    activeId: "",
    // Here we make the logic of the function
    addPatient: (data) => {
      const newPatient = createPatient(data);
      // This is similar to the return of Redux
      set((state) => ({
        // Here we writing in patients, copi the state of patients and we passed data
        patients: [...state.patients, newPatient],
      }));
    },
    deletePatient: (id) => {
      set((state) => ({
        patients: state.patients.filter((patient) => patient.id !== id),
      }));
    },
    getPatientById: (id) => {
      set(() => ({
        activeId: id,
      }));
    },
  })
));