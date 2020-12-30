import React, { Fragment, useContext, useEffect } from "react";
import PatientContext from "../../context/patient/patientContext";
import PatientItem from "../patients/PatientItem";
import Spinner from "../layouts/Spinner";

const Patients = () => {
  const patientContext = useContext(PatientContext);

  const { patients, filtered, getPatients, loading } = patientContext;

  // const { patients, filtered, getPatients,getEntirePatients, loading } = patientContext;
  // const { user } = authContext;

  // useEffect(() => {
    
  //   {user && user.field === "Nurse" ? getEntirePatients() :  getPatients()}

  //   //eslint-disable-next-line
  // });
  useEffect(() => {
    getPatients();
    //eslint-disable-next-line
  }, []);
  if (patients !== null && patients.length === 0 && !loading) {
    return <h4>Please add a patient</h4>;
  }

  return (
    <Fragment>
      {patients !== null && !loading ? (
        <>
          {" "}
          {filtered !== null
            ? filtered.map((patient) => (
                <PatientItem key={patient.id} patient={patient} />
              ))
            : patients.map((patient) => (
                <PatientItem key={patient.id} patient={patient} />
              ))}
        </>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

// Patients.propTypes = {

// }

export default Patients;
