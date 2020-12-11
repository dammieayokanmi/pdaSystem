import React from 'react'
import Patients from '../patients/Patients'
import AppLayout from "../layouts/AppLayout";
import styled from "styled-components";
import AddPatient from "../modal/AddPatient";

import PatientFilter from '../patients/PatientFilter'
const Wrapper = styled.div``

const AllPatients = () => {
    return (
        <Wrapper>
            <AppLayout>
           
            <AddPatient/>
          
                <>
                <PatientFilter/>
            <Patients/>
            </>
           
            </AppLayout>
        </Wrapper>
    )
}

export default AllPatients
