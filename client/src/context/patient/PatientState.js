import React, { useReducer } from "react";
import { v4 as uuid } from "uuid";
import PatientContext from "./patientContext";
import patientReducer from "./patientReducer";
import {
  ADD_PATIENT,
  DELETE_PATIENT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_PATIENT,
  FILTER_PATIENTS,
  CLEAR_FILTER,
} from "../types";

const PatientState = (props) => {
  const initialState = {
    patients: [
      {
        id: "1",
        name: "Opeyemi Bolaji",
        wardNumber: "ward 5",
        dateAdmitted: "22/10/2020",
        address: "Academy, Iwo road.",
        stateOfOrigin: "Ogun",
        gender: "Male",
        drugAllergies: "None",
        foodAllergies: "Peanuts",
        maritalStatus: "Single",
        phoneNumber: "08038383829",
        occupation: "Tailor",

        dateTaken: "24",
        Systoic: "134",
        Examination: "Eccg",
        Temperature: "37.5",
        HeartRate: "55",
        Glucose: "5",
        Cholesterol: "5",
        PeriodOfTheDay: "Night",
      },
      {
        id: "2",
        name: "Yinka Adeleye",
        wardNumber: "ward 10",
        dateAdmitted: "2/1/2020",
        address: "Ogunpa, Bodija road.",
        stateOfOrigin: "Ondo",
        gender: "Male",
        drugAllergies: "Penicillin",
        foodAllergies: "N0ne",
        maritalStatus: "Married",
        phoneNumber: "09011093899",
        occupation: "Driver",

        dateTaken: "24",
        Systoic: "134",
        Examination: "Eccg",
        Temperature: "37.5",
        HeartRate: "55",
        Glucose: "5",
        Cholesterol: "5",
        PeriodOfTheDay: "Night",
      },
      {
        id: "3",
        name: "Sandra Charles",
        wardNumber: "ward 1",
        dateAdmitted: "12/11/2007",
        address: "Oyingbo, Yaba road.",
        stateOfOrigin: "Delta",
        gender: "Female",
        drugAllergies: "Chloroquine",
        foodAllergies: "Wheat, Onions",
        maritalStatus: "SIngle",
        phoneNumber: "09038473728",
        occupation: "Student",

        dateTaken: "24",
        Systoic: "134",
        Examination: "Eccg",
        Temperature: "37.5",
        HeartRate: "55",
        Glucose: "5",
        Cholesterol: "5",
        PeriodOfTheDay: "Night",
      },
    ],

    current: null,
    filtered: null,
  };

  const [state, dispatch] = useReducer(patientReducer, initialState);

  // Add patient
  const addPatient = (patient) => {
    patient.id = uuid();
    dispatch({ type: ADD_PATIENT, payload: patient });
  };

  // Delete Patient
  const deletePatient = (id) => {
    dispatch({ type: DELETE_PATIENT, payload: id });
  };

  //Set Current patient
  const setCurrent = (patient) => {
    dispatch({ type: SET_CURRENT, payload: patient });
  };

  // //Set Current Reading
  // const setCurrent = (patient) => {
  //   dispatch({ type: SET_CURRENT, payload: patient });
  // };

  // CLear Current Patient
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  //Update patient
  const updateCurrent = (patient) => {
    dispatch({ type: UPDATE_PATIENT, payload: patient });
  };

  //Filter patients
  const filterPatients = (text) => {
    dispatch({ type: FILTER_PATIENTS, payload: text });
  };

  //clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <PatientContext.Provider
      value={{
        patients: state.patients,
        current: state.current,
        filtered: state.filtered,
        // medicalRecord: state.medicalRecord,
        addPatient,
        updateCurrent,
        deletePatient,
        setCurrent,
        clearCurrent,
        filterPatients,
        clearFilter,
      }}
    >
      {props.children}
    </PatientContext.Provider>
  );
};

export default PatientState;
