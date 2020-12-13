import React, { Fragment, useContext } from "react";
import PatientContext from "../../context/patient/patientContext";
import PatientItem from "../patients/PatientItem";

const Patients = () => {
  const patientContext = useContext(PatientContext);

  const { patients, filtered } = patientContext;

  if (patients.length === 0) {
    return <h4>Please add a patient</h4>;
  }

  return (
    <Fragment>
      {filtered !== null
        ? filtered.map((patient) => (
            <PatientItem key={patient.id} patient={patient} />
          ))
        : patients.map((patient) => (
            <PatientItem key={patient.id} patient={patient} />
          ))}
      
    </Fragment>
  );
};

// Patients.propTypes = {

// }

export default Patients;
