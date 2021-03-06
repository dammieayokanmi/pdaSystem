import React, { useContext, useState, useEffect } from "react";
import { TextInput, SelectInput } from "../common/inputs";
import { Grid } from "@material-ui/core";
// import Button from "../common/Button";
// import { Link } from "react-router-dom";
// import Patient from "../../../../models/Patient";
import PatientContext from "../../context/patient/patientContext";
import styled from "styled-components";
import AuthContext from "../../context/auth/authContext";

const Wrapper = styled.div`
  width: fit-content;
  background: ${(props) => props.theme.color.text_01};
  height: 80%;
  overflow: scroll;
  transform: translate(0%, 10%);
  &::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
  .hel {
    padding: 2rem;
    max-width: 547px;
    margin: auto;
  }

  h3 {
    font-size: 20px;
    line-height: 25px;
    letter-spacing: 0.2px;
    color: #000b0a;
  }
  .submit > div {
    padding-top: 2rem;
  }
`;

const optionGender = [
  { value: "MALE", text: "Male" },
  { value: "FEMALE", text: "Female" },
];
const optionStatus = [
  { value: "Single", text: "Single" },
  { value: "Married", text: "Married" },
  { value: "Divorced", text: "Divorced" },
];

const PatientForm = ({ midModal }) => {
  const patientContext = useContext(PatientContext);
  const authContext = useContext(AuthContext);

	const { user } = authContext;
  const { addPatient, updateCurrent, clearCurrent, current } = useContext(
    PatientContext
  );

  useEffect(() => {
    if (current !== null) {
      setPatient(current);
    } else {
      setPatient({
        name: "",
        wardNumber: "",
        dateAdmitted: "",
        address: "",
        stateOfOrigin: "",
        drugAllergies: "",
        foodAllergies: "",
        phoneNumber: "",
        occupation: "",
        dob: "",
        gender: "",
        maritalStatus: "",
        moreInfo: "",
        doctorIncharge: "",
        nurseIncharge: "",
        dateTaken: "",
        systoic: "",
        examination: "",
        temperature: "",
        heartRate: "",
        glucose: "",
        cholesterol: "",
        periodOfTheDay: "",
        moreReadings: "",
        recommendation: "",
      });
    }
  }, [patientContext, current]);

  const [patient, setPatient] = useState({
    name: "",
    wardNumber: "",
    dateAdmitted: "",
    address: "",
    stateOfOrigin: "",
    drugAllergies: "",
    foodAllergies: "",
    phoneNumber: "",
    occupation: "",
    dateTaken: "",
    dob: "",
    gender: "",
    maritalStatus: "",
    moreInfo: "",
    doctorIncharge: "",
    nurseIncharge: "",
    dateTaken: "",
    systoic: "",
    examination: "",
    temperature: "",
    heartRate: "",
    glucose: "",
    cholesterol: "",
    periodOfTheDay: "",
    moreReadings: "",
    recommendation: "",
  });

  const {
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
    systoic,
    examination,
    temperature,
    heartRate,
    glucose,
    cholesterol,
    periodOfTheDay,
    moreReadings,
    recommendation,
  } = patient;

  const onChange = (e) =>
    setPatient({ ...patient, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addPatient(patient);
    } else {
      updateCurrent(patient);
    }
    setPatient({
      name: "",
      wardNumber: "",
      dateAdmitted: "",
      address: "",
      stateOfOrigin: "",
      drugAllergies: "",
      foodAllergies: "",
      phoneNumber: "",
      occupation: "",
      dateTaken: "",
      dob: "",
      gender: "",
      maritalStatus: "",
      moreInfo: "",
      doctorIncharge: "",
      nurseIncharge: "",
      dateTaken: "",
      systoic: "",
        examination: "",
        temperature: "",
        heartRate: "",
        glucose: "",
        cholesterol: "",
        periodOfTheDay: "",
        moreReadings: "",
        recommendation:""
    });
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <Wrapper>
      <div className={`${midModal}`}>
        <h3>Fill in only the correct information of the patient</h3>
        <form onSubmit={onSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextInput
                label="Name"
                name="name"
                value={name}
                type="text"
                onChange={onChange}
                placeholder="Surname first"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextInput
                label="Ward Number"
                name="wardNumber"
                value={wardNumber}
                type="text"
                onChange={onChange}
                placeholder="Type here..."
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* <DateInput
              label="Date Admitted"
              name="dateAdmitted"
              value={dateAdmitted}
              onChange={onChange}
            /> */}
              <TextInput
                label="dateAdmitted"
                name="dateAdmitted"
                value={dateAdmitted}
                type="text"
                onChange={onChange}
                placeholder="Type here..."
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextInput
                label="Address"
                name="address"
                value={address}
                type="text"
                onChange={onChange}
                placeholder="Type here..."
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextInput
                label="State of Origin"
                name="stateOfOrigin"
                value={stateOfOrigin}
                type="text"
                onChange={onChange}
                placeholder="Type here..."
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextInput
                label="Drug Allergies"
                name="drugAllergies"
                value={drugAllergies}
                type="text"
                onChange={onChange}
                placeholder="Type here..."
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextInput
                label="Food Allergies"
                name="foodAllergies"
                value={foodAllergies}
                type="text"
                onChange={onChange}
                placeholder="Type here..."
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextInput
                label="Phone Number"
                name="phoneNumber"
                value={phoneNumber}
                type="number"
                onChange={onChange}
                placeholder="08000..."
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextInput
                label="Occupation"
                name="occupation"
                value={occupation}
                type="text"
                onChange={onChange}
                placeholder="Type here..."
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              {/* <DateInput
								label="Date of Birth"
								value={dob}
								onChange={onChange}/> */}

              <TextInput
                label="dob"
                name="dob"
                value={dob}
                type="text"
                onChange={onChange}
                placeholder="Type here..."
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SelectInput
                label="Select Gender"
                options={optionGender}
                name="gender"
                value={gender}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SelectInput
                label="Select Marital Status"
                options={optionStatus}
                name="maritalStatus"
                value={maritalStatus}
                onChange={onChange}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <textarea
                name="moreInfo"
                value={moreInfo}
                type="text"
                cols="30"
                rows="10"
                onChange={onChange}
                placeholder="Type moreInfo "
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextInput
                label="doctorIncharge"
                name="doctorIncharge"
                value={doctorIncharge}
                type="text"
                onChange={onChange}
                placeholder="Type here..."
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextInput
                label="nurseIncharge"
                name="nurseIncharge"
                value={nurseIncharge}
                type="text"
                onChange={onChange}
                placeholder="Type here..."
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextInput
                label="Date Taken"
                name="dateTaken"
                value={dateTaken}
                type="number"
                onChange={onChange}
              />
              {/* <DateInput
                label="Date Taken"
                name="dateTaken"
								value={dateTaken}
								onChange={onChange}/> */}
            </Grid>
            <h1 className="heading">Medical Information (Readings)</h1>

            <Grid item xs={12} sm={6}>
              <TextInput
                label="Systoic"
                name="systoic"
                value={systoic}
                type="text"
                onChange={onChange}
                placeholder="Type here..."
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextInput
                label="Examination"
                name="examination"
                value={examination}
                type="text"
                onChange={onChange}
                placeholder="Type here..."
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextInput
                label="Temperature"
                name="temperature"
                value={temperature}
                type="text"
                onChange={onChange}
                placeholder="Type here..."
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextInput
                label="HeartRate"
                name="heartRate"
                value={heartRate}
                type="text"
                onChange={onChange}
                placeholder="Type here..."
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextInput
                label="Glucose"
                name="glucose"
                value={glucose}
                type="text"
                onChange={onChange}
                placeholder="Type here..."
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextInput
                label="Cholesterol"
                name="cholesterol"
                value={cholesterol}
                type="text"
                onChange={onChange}
                placeholder="Type here..."
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextInput
                label="Period Of The Day"
                name="periodOfTheDay"
                value={periodOfTheDay}
                type="text"
                onChange={onChange}
                placeholder="Type here..."
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <textarea
                name="moreReadings"
                value={moreReadings}
                type="text"
                cols="30"
                rows="10"
                onChange={onChange}
                placeholder="Type moreReadings "
              />
            </Grid>
            {user && user.field==="Doctor" &&<Grid item xs={12} sm={6}>
              <textarea
                name="recommendation"
                value={recommendation}
                type="text"
                cols="30"
                rows="10"
                onChange={onChange}
                placeholder="Type recommendation "
              />
            </Grid>}
          </Grid>
          <div className="submit">
            <input type="submit" value={current ? "Update data" : "Add data"} />
          </div>
          {current && (
            <div>
              <button onClick={clearAll}> Clear </button>
            </div>
          )}
        </form>{" "}
      </div>
    </Wrapper>
  );
};

PatientForm.propTypes = {};

export default PatientForm;
