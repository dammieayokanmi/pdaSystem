import React, { useReducer } from "react";
import PatientContext from "./patientContext";
import patientReducer from "./patientReducer";
import {
  GET_PATIENTS,
  GET_ALL_PATIENTS,
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

 const getAllPatients = async () => {
      try {
      const res = await client.get("/api/allPatients");

      dispatch({ type: GET_ALL_PATIENTS, payload: res.data });
    } catch (err) {
      dispatch({ type: PATIENT_ERROR, payload: err.response.msg });
    }
  };


  // Add patient
  const addPatient = async (patient) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    } 

    try {
      const res = await client.post("/api/allPatients", patient, config);

      dispatch({ type: ADD_PATIENT, payload: res.data });
    } catch (err) {
      dispatch({ type: PATIENT_ERROR, payload: err.response.msg });
    
    }
  };

  // Delete Patient
  const deletePatient = async (id) => {
    try {
     await client.delete(`/api/patients/${id}`);

     dispatch({ type: DELETE_PATIENT, payload: id });
    } catch (err) {
      dispatch({ type: PATIENT_ERROR, payload: err.response.msg });
    
    }
  };

   //Update patient
   const updateCurrent = async (patient) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    } 

    try {
      const res = await client.put(`/api/patients/${patient._id}`, patient, config);

      dispatch({ type: UPDATE_PATIENT, payload: res.data });
    } catch (err) {
      dispatch({ type: PATIENT_ERROR, payload: err.response.msg });
    
    }
  };

  //clear patients
  const clearPatients = () => {
    dispatch({ type: CLEAR_PATIENTS});
  };



  //Set Current patient
  const setCurrent = (patient) => {
    dispatch({ type: SET_CURRENT, payload: patient });
  };


  // CLear Current Patient
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
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
        clearPatients,
        setCurrent,
        clearCurrent,
        filterPatients,
        clearFilter,
        getPatients,getAllPatients

      }}
    >
      {props.children}
    </PatientContext.Provider>
  );
};

export default PatientState;
