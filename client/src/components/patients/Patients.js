import React, { Fragment, useContext, useEffect } from "react";
import PatientContext from "../../context/patient/patientContext";
import AuthContext from "../../context/auth/authContext";
import PatientItem from "../patients/PatientItem";
import Spinner from "../layouts/Spinner";

const Patients = () => {
  const patientContext = useContext(PatientContext);
  const authContext = useContext(AuthContext);

  const {
    patients,
    filtered,
    getAllPatients,
    getPatients,
    loading,
  } = patientContext;

  const { user } = authContext;

  useEffect(() => {
    if (user && user.field === "Doctor") getPatients();
    else getAllPatients();
    //eslint-disable-next-line
  }, [user && user.field === "Doctor"]);

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
