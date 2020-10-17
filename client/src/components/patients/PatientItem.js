import React from "react";
// import PropTypes from 'prop-types'
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import { Grid } from "@material-ui/core";
import AppLayout from "../layouts/AppLayout";
import Button from "../common/Button";
import { Link } from "react-router-dom";
import ImageUpload from "./ImageUpload";
import AddReadingModal from "../modal/AddReadingModal";

const Wrapper = styled.div`
.basic-info{
  padding-bottom: 3rem;
}
  .paper {
    padding: 2rem;
    .heading {
      font-size: 2rem;
      color: ${(props) => props.theme.color.ui_01};
      letter-spacing: -0.2px;
      line-height: 2.4rem;
      padding-bottom: 1.2rem;
    }
    .sub-heading{
      font-size: 14px;
line-height: 14px;
letter-spacing: 1px;
color: #000B0A;
margin: 2rem 0 ;
text-transform: uppercase;
    }
    .grid {
      display: grid;
      padding: 0.5rem 0;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      .text {
        font-weight: 300;
        font-size: 14px;
        line-height: 22px;
        color: ${(props) => props.theme.color.text_06};
      }
      .value {
        font-weight: bold;
        color: ${(props) => props.theme.color.ui_04};
      }
    }
  }
  .submit > div {
    padding-top: 2rem;
  }
  hr{
    margin: 3rem 0;
  }
`;
const PatientItem = ({ patient }) => {
    const{ id, name,
        wardNumber,
        dateAdmitted,
        address,
        stateOfOrigin,
        gender,
        drugAllergies,
        foodAllergies,
        maritalStatus,
        phoneNumber,
        occupation } = patient;
    return (
        <Wrapper>
          <AppLayout>
            <div className='basic-info' >
                <Paper className="paper">
                  <h1 className="heading">Basic Information</h1>
                  <div className="grid-container">
                    <div className="grid">
                      <p className="text"> Name:</p>
                      <h2 className="text value">{name}</h2>
                    </div>
                    <div className="grid">
                      <p className="text"> Patient's ID:</p>
                      <h2 className="text value">{id}</h2>
                    </div>
                    <div className="grid">
                      <p className="text"> Ward Number:</p>
                      <h2 className="text value">{wardNumber}</h2>
                    </div>
                    <div className="grid">
                      <p className="text"> Date Admitted:</p>
                      <h2 className="text value">{dateAdmitted}</h2>
                    </div>
                    <div className="grid">
                      <p className="text"> Address:</p>
                      <h2 className="text value">{address}</h2>
                    </div>
                    <div className="grid">
                      <p className="text"> State of Origin:</p>
                      <h2 className="text value">{stateOfOrigin}</h2>
                    </div>
                    <div className="grid">
                      <p className="text"> Gender:</p>
                      <h2 className="text value">{gender}</h2>
                    </div>
                    <div className="grid">
                      <p className="text"> Food Allergies:</p>
                      <h2 className="text value">{foodAllergies}</h2>
                    </div>
                    <div className="grid">
                      <p className="text"> Drug Allergies:</p>
                      <h2 className="text value">{drugAllergies}</h2>
                    </div>
                    <div className="grid">
                      <p className="text">Marital Status:</p>
                      <h2 className="text value">{maritalStatus}</h2>
                    </div>
                    <div className="grid">
                      <p className="text"> Phone Number:</p>
                      <h2 className="text value">{phoneNumber}</h2>
                    </div>
                    <div className="grid">
                      <p className="text"> Occupation:</p>
                      <h2 className="text value">{occupation}</h2>
                    </div>
                    <div className="grid">
                      <p className="text"> Date of Birth:</p>
                      <h2 className="text value">22/7/1980</h2>
                    </div>
                    <div className="grid">
                      <p className="text"> Patient's Doctor ID:</p>
                      <h2 className="text value">7388</h2>
                    </div>
                    <div className="grid">
                      <p className="text"> Patient's Nurse ID:</p>
                      <h2 className="text value">9839</h2>
                    </div>
                  </div>
                  <Link to="/add_new_patient" className="submit">
                    <Button theme="blueBtn">Edit Patient's profile</Button>
                  </Link>
                </Paper>
              </div>
  
  <div className="med-info">
                <Paper className="paper">
                  <h1 className="heading">Medical Information (Readings)</h1>
                  <div className="grid-container">
                    <div className="grid">
                      <p className="text"> Date taken:</p>
                      <h2 className="text value">12/10/2020</h2>
                    </div>
                    <div className="grid">
                      <p className="text"> Systoic:</p>
                      <h2 className="text value">134</h2>
                    </div>
                    <div className="grid">
                      <p className="text"> Examination:</p>
                      <h2 className="text value">Eccg</h2>
                    </div>
                    <div className="grid">
                      <p className="text">Temperature:</p>
                      <h2 className="text value">37.5</h2>
                    </div>
                    <div className="grid">
                      <p className="text"> Heart rate:</p>
                      <h2 className="text value">55</h2>
                    </div>
                    <div className="grid">
                      <p className="text"> Glucose:</p>
                      <h2 className="text value">5</h2>
                    </div>
                    <div className="grid">
                      <p className="text"> Cholesterol:</p>
                      <h2 className="text value">5</h2>
                    </div>
                    <div className="grid">
                      <p className="text">Period of the day:</p>
                      <h2 className="text value">Night</h2>
                    </div>
                  </div>
                  <hr/>
                  <div className="lad">
  
                  </div>
                  <hr/>
  <div className="x-ray">
  <h1 className="sub-heading">Doctor's recommended image from the x-ray department</h1>
  
  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <ImageUpload image='CT scanned computerized tomography'/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <ImageUpload image='X-ray Magnetic Resonance Imaging (MRI)' />
                    </Grid>
                  </Grid>
  </div>
  
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      {/* <Button theme="blueBtn">Add Reading</Button> */}
                      <AddReadingModal />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Button theme="whiteBtn">View Doctor's feedback</Button>
                    </Grid>
                  </Grid>
                </Paper>
                </div>
  
          </AppLayout>
        </Wrapper>
      );
}

export default PatientItem