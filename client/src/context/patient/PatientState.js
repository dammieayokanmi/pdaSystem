import React, { useReducer } from "react";
import uuid from "uuid";
import PatientContext from "./patientContext";
import patientReducer from "./patientReducer";
import {
  ADD_PATIENT,
  DELETE_PATIENT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_PATIENT,
  FILTER_PATIENT,
  CLEAR_FILTER,
} from "../types";

const PatientState = (props) => {
  const initialState = {
    patients: [
      {
        id:'1',
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
      },
      {
        id:"2",
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
      },
      {
        id:'3',
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
      }
    ]
  };

  const [state, dispatch] = useReducer(patientReducer, initialState);

  // Add patient


  // Delete Patient

  //Set Current patient

  // CLear Current Patient

  //Update patient

  //Filter patients

  //clear Filter

  return (
      <PatientContext.Provider value ={{
          patients : state.patients
          }}>
          { props.children }
      </PatientContext.Provider>
  )
};

export default PatientState;