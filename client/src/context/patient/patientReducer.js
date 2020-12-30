import {
  GET_PATIENTS,
  ADD_PATIENT,
  DELETE_PATIENT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_PATIENT,
  FILTER_PATIENTS,
  CLEAR_FILTER,
  PATIENT_ERROR,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_PATIENTS:
      return {
        ...state,
        patients: action.payload,
        loading: false,
      };
    case ADD_PATIENT:
      return {
        ...state,
        patients: [...state.patients, action.payload],
        loading: false,
      };
    case UPDATE_PATIENT:
      return {
        ...state,
        patients: state.patients.map((patient) =>
          patient.id === action.payload.id ? action.payload : patient
        ),
        loading: false
      };
    case DELETE_PATIENT:
      return {
        ...state,
        patients: state.patients.filter(
          (patient) => patient.id !== action.payload
        ),
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case FILTER_PATIENTS:
      return {
        ...state,
        filtered: state.patients.filter((patient) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return patient.name.match(regex) || patient.wardNumber.match(regex);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    case PATIENT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
