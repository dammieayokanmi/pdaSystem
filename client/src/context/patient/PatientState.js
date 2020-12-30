import React, { useReducer } from "react";
import PatientContext from "./patientContext";
import patientReducer from "./patientReducer";
import {
  GET_PATIENTS,
  ADD_PATIENT,
  DELETE_PATIENT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_PATIENT,
  FILTER_PATIENTS,
  CLEAR_PATIENTS,
  CLEAR_FILTER,
  PATIENT_ERROR
} from "../types";
import client from "../client";

const PatientState = (props) => {
  const initialState = {
    patients: null,
    current: null,
    filtered: null,
    error: null
  };

  const [state, dispatch] = useReducer(patientReducer, initialState);

  //Get patients based on logged in user

 const getPatients = async () => {
      try {
      const res = await client.get("/api/patients");

      dispatch({ type: GET_PATIENTS, payload: res.data });
    } catch (err) {
      dispatch({ type: PATIENT_ERROR, payload: err.response.msg });
    }
  };

  //Get entire patients 

//  const getEntirePatients = async () => {
//       try {
//       const res = await client.get("/api/allPatients");

//       dispatch({ type: GET_PATIENTS, payload: res.data });
//     } catch (err) {
//       dispatch({ type: PATIENT_ERROR, payload: err.response.msg });
//     }
//   };


  // Add patient
  const addPatient = async (patient) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    } 

    try {
      const res = await client.post("/api/patients", patient, config);

      dispatch({ type: ADD_PATIENT, payload: res.data });
    } catch (err) {
      dispatch({ type: PATIENT_ERROR, payload: err.response.msg });
    }
  };

  // Delete Patient
  const deletePatient = (id) => {
    dispatch({ type: DELETE_PATIENT, payload: id });
  };

  //Set Current patient
  const setCurrent = (patient) => {
    dispatch({ type: SET_CURRENT, payload: patient });
  };


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
        error: state.error,
        addPatient,
        updateCurrent,
        deletePatient,
        setCurrent,
        clearCurrent,
        filterPatients,
        clearFilter,
        getPatients,
      }}
    >
      {props.children}
    </PatientContext.Provider>
  );
};

export default PatientState;
