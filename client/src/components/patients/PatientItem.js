import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import { Grid } from "@material-ui/core";
import Button from "../common/Button";
import PatientContext from "../../context/patient/patientContext";
import Modal from "@material-ui/core/Modal";
import PatientForm from "../patients/PatientForm";
// import MedicalForm from "../patients/MedicalForm";

const Wrapper = styled.div`
  .basic-info,
  .med-info {
    padding-bottom: 3rem;
  }
  .paper {
    padding: 2rem;
    background: aliceblue;
    margin-bottom: 4rem;
    border: 2px solid ${(props) => props.theme.color.ui_01};
    .heading {
      font-size: 2rem;
      color: ${(props) => props.theme.color.ui_01};
      letter-spacing: -0.2px;
      line-height: 2.4rem;
      padding-bottom: 1.2rem;
    }
    .sub-heading {
      font-size: 14px;
      line-height: 14px;
      letter-spacing: 1px;
      color: #000b0a;
      margin: 2rem 0;
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

  hr {
    margin: 3rem 0;
  }
  .end {
    border: 4px dashed ${(props) => props.theme.color.ui_01};
  }
  #rec{
    color: ${(props) => props.theme.color.ui_01};

  }
`;
const PatientItem = ({ patient }) => {
  const patientContext = useContext(PatientContext);
  const { deletePatient, setCurrent, clearCurrent } = patientContext;

  const {
    _id,
    name,
    wardNumber,
    dateAdmitted,
    address,
    stateOfOrigin,
    drugAllergies,
    foodAllergies,
    phoneNumber,
    occupation,
    dateTaken,
    dob,
    gender,
    maritalStatus,
    moreInfo,
    doctorIncharge,
    nurseIncharge,
    // dateTaken,
    systoic,
    examination,
    temperature,
    heartRate,
    glucose,
    cholesterol,
    periodOfTheDay,
    moreReadings,
    recommendation
  } = patient;


  const onDelete = () => {
    deletePatient(_id);
    clearCurrent();
  };
  const [open, setOpen] = React.useState(false);
  const [up, setUp] = React.useState(false);
  const [upComment, setUpComment] = React.useState(false);

  const edit = () => {
    setCurrent(patient);
    handleOpen();
  };

  const upload = () => {
    setCurrent(patient);
    handleUp();
  };

  const addComment = () => {
    setCurrent(patient);
    handleUpComment();
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleUp = () => {
    setUp(true);
  };
  const handleUpComment = () => {
    setUpComment(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDown = () => {
    setUp(false);
  };
  const handleDownComment= () => {
    setUpComment(false);
  };
  return (
    <Wrapper>
      <Paper className="paper">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <div className="basic-info">
              <h1 className="heading">Basic Information</h1>
              <div className="grid-container">
                <div className="grid">
                  <p className="text"> Name:</p>
                  {name && <h2 className="text value">{name}</h2>}
                </div>
                <div className="grid">
                  <p className="text"> Patient's ID:</p>
                  <h2 className="text value">{_id}</h2>
                </div>
                <div className="grid">
                  <p className="text"> Ward Number:</p>
                  {wardNumber && <h2 className="text value">{wardNumber}</h2>}
                </div>
                <div className="grid">
                  <p className="text"> Date Admitted:</p>
                  <h2 className="text value">{dateAdmitted}</h2>
                </div>
                <div className="grid">
                  <p className="text"> Address:</p>
                  {address && <h2 className="text value">{address}</h2>}
                </div>
                <div className="grid">
                  <p className="text"> State of Origin:</p>
                  {stateOfOrigin && (
                    <h2 className="text value">{stateOfOrigin}</h2>
                  )}
                </div>
                <div className="grid">
                  <p className="text"> Drug Allergies:</p>
                  <h2 className="text value">{drugAllergies}</h2>
                </div>
                <div className="grid">
                  <p className="text"> Food Allergies:</p>
                  <h2 className="text value">{foodAllergies}</h2>
                </div>
                <div className="grid">
                  <p className="text"> Phone Number:</p>
                  {phoneNumber && <h2 className="text value">{phoneNumber}</h2>}
                </div>
                <div className="grid">
                  <p className="text"> Occupation:</p>
                  {occupation && <h2 className="text value">{occupation}</h2>}
                </div>
                <div className="grid">
                  <p className="text"> Date Taken:</p>
                  {dateTaken && <h2 className="text value">{dateTaken}</h2>}
                </div>
                <div className="grid">
                  <p className="text"> Date of Birth:</p>
                  {dob && <h2 className="text value">{dob}</h2>}
                </div>
                <div className="grid">
                  <p className="text"> Gender:</p>
                  {gender && <h2 className="text value">{gender}</h2>}
                </div>
              
                <div className="grid">
                  <p className="text">Marital Status:</p>
                  {maritalStatus && (
                    <h2 className="text value">{maritalStatus}</h2>
                  )}
                </div>
                <div className="grid">
                  <p className="text">More informstion:</p>
                  {moreInfo && (
                    <h2 className="text value">{moreInfo}</h2>
                  )}
                </div>
              
                <div className="grid">
                  <p className="text">  Doctor Incharge:</p>
                  {doctorIncharge && (
                    <h2 className="text value">{doctorIncharge}</h2>
                  )}
                </div>
                <div className="grid">
                  <p className="text">  Nurse Incharge:</p>
                  {nurseIncharge && (
                    <h2 className="text value">{nurseIncharge}</h2>
                  )}
                </div>
              </div>
            </div>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Button theme="white" onClick={edit}>
                  Edit
                </Button>

                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                >
                  <PatientForm midModal="hel" />
                </Modal>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div className="submit">
                  <Button theme="red" onClick={onDelete}>
                    Delete Patient
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className="med-info">
              <h1 className="heading">Medical Information (Readings)</h1>
              <div className="grid-container">
                <div className="grid">
                  <p className="text"> Date taken:</p>
                  {/* <h2 className="text value">{dateTaken}</h2> */}
                </div>
                <div className="grid">
                  <p className="text"> Systoic:</p>
                  <h2 className="text value">{systoic}</h2>
                </div>
                <div className="grid">
                  <p className="text"> Examination:</p>
                  <h2 className="text value">{examination}</h2>
                </div>
                <div className="grid">
                  <p className="text">Temperature:</p>
                  <h2 className="text value">{temperature}</h2>
                </div>
                <div className="grid">
                  <p className="text"> Heart rate:</p>
                  <h2 className="text value">{heartRate}</h2>
                </div>
                <div className="grid">
                  <p className="text"> Glucose:</p>
                  <h2 className="text value">{glucose}</h2>
                </div>
                <div className="grid">
                  <p className="text"> Cholesterol:</p>
                  <h2 className="text value">{cholesterol}</h2>
                </div>
                <div className="grid">
                  <p className="text">Period of the day:</p>
                  <h2 className="text value">{periodOfTheDay}</h2>
                </div>
                <div className="grid">
                  <p className="text">More Readings:</p>
                  <h2 className="text value">{moreReadings}</h2>
                </div>
                
              </div>
            </div>
           
            <hr/>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
                <p id="rec">Doctor's Recommendation: </p>
                  <div>{recommendation}</div>
                </Grid>
             
            
            </Grid>
            
          </Grid>
        </Grid>
      </Paper>
    </Wrapper>
  );
};

PatientItem.propTypes = {
  patient: PropTypes.object.isRequired,
};

export default PatientItem;
