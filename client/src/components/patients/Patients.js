import React, {Fragment, useContext} from 'react';
import PatientContext from '../../context/patient/patientContext';
import PatientItem from '../patients/PatientItem';
import Footer from "../common/Footer";
import AppLayout from "../layouts/AppLayout";

const Patients = () => {
    const patientContext = useContext(PatientContext);

    const {patients} = patientContext;

    return (
        <AppLayout>
        <Fragment>
            {patients.map(patient => (
            <PatientItem key={patient.id} patient={patient}/>
            ))}
                        <Footer btnText="Select another patient" to="/" />

        </Fragment>
        </AppLayout>
    );
};

// Patients.propTypes = {

// }

export default Patients

