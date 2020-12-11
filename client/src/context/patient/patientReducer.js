import {
  ADD_PATIENT,
  DELETE_PATIENT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_PATIENT,
  FILTER_PATIENTS,
  CLEAR_FILTER,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_PATIENT:
      return {
        ...state,
        patients: [...state.patients, action.payload],
      };
    case UPDATE_PATIENT:
        return{
            ...state,
            patients: state.patients.map(patient => patient.id === action.payload.id ? action.payload : patient)
        }
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
        return{
            ...state,
            filtered: state.patients.filter(patient => {
                const regex = new RegExp(`${action.payload}`, 'gi')
                return patient.name.match(regex) || patient.wardNumber.match(regex);
            })
        };
        case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    default:
      return state;
  }
};
