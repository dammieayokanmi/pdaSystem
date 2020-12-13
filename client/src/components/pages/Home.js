import React, { useContext, useEffect } from "react";
import Patients from "../patients/Patients";
import AppLayout from "../layouts/AppLayout";
import styled from "styled-components";
import AddPatient from "../modal/AddPatient";
import PatientFilter from "../patients/PatientFilter";
import AuthContext from "../../context/auth/authContext";
import Footer from "../common/Footer";

const Wrapper = styled.div`
margin-top: 80px;`;

const AllPatients = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      <AppLayout>
         
        <AddPatient />

        <>
          <PatientFilter />
          <Patients />
          <Footer />
        </>
      </AppLayout>
    </Wrapper>
  );
};

export default AllPatients;
