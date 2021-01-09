// import React, { useContext, useState, useEffect } from "react";
// import { TextInput, DateInput } from "../common/inputs";
// import { Grid } from "@material-ui/core";

// // import Patient from "../../../../models/Patient";
// import PatientContext from "../../context/patient/patientContext";
// import styled from "styled-components";

// const Wrapper = styled.div`
//   width: fit-content;
//   background: ${(props) => props.theme.color.text_01};
//   height: 80%;
//   overflow: scroll;
//   transform: translate(0%, 10%);
//   &::-webkit-scrollbar {
//     width: 0.5rem;
//     height: 0.5rem;
//   }

//   &::-webkit-scrollbar-track {
//     -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
//   }

//   &::-webkit-scrollbar-thumb {
//     background-color: darkgrey;
//     outline: 1px solid slategrey;
//   }
//   .hel {
//     padding: 2rem;
//     max-width: 547px;
//     margin: auto;
//   }

//   h3 {
//     font-size: 20px;
//     line-height: 25px;
//     letter-spacing: 0.2px;
//     color: #000b0a;
//   }
//   .submit > div {
//     padding-top: 2rem;
//   }
// `;

// const PatientForm = ({ midModal }) => {
//   const patientContext = useContext(PatientContext);

//   const { addPatient, updateCurrent, current } = useContext(
//     PatientContext
//   );

//   useEffect(() => {
//     if (current !== null) {
//       setPatient(current);
//     } else {
//       setPatient({
//         dateTaken: "",
//         Systoic: "",
//         Examination: "",
//         Temperature: "",
//         HeartRate: "",
//         Glucose: "",
//         Cholesterol: "",
//         PeriodOfTheDay: "",
//         moreReadings:""
//       });
//     }
//   }, [patientContext, current]);

//   const [patient, setPatient] = useState({
//     dateTaken: "",
//     systoic: "",
//     examination: "",
//     temperature: "",
//     heartRate: "",
//     glucose: "",
//     cholesterol: "",
//     periodOfTheDay: "",
//     moreReadings:""
//   });

//   const {
//     dateTaken,
//     systoic,
//     examination,
//     temperature,
//     heartRate,
//     glucose,
//     cholesterol,
//     periodOfTheDay,
//     moreReadings
//   } = patient;

//   const onChange = (e) =>
//     setPatient({ ...patient, [e.target.name]: e.target.value });

//   const onSubmit = (e) => {
//     e.preventDefault();
//     if (current === null) {
//       addPatient(patient);
//     } else {
//       updateCurrent(patient);
//     }
//     setPatient({
//       dateTaken: "",
//       systoic: "",
//       examination: "",
//       temperature: "",
//       heartRate: "",
//       glucose: "",
//       cholesterol: "",
//       periodOfTheDay: "",
//       moreReadings:""
//     });
//   };

// //   const clearAll = () => {
// //     clearCurrent();
// //   };

//   return (
//     <Wrapper>
//       <div className={`${midModal}`}>
//         <h3>Fill in only the correct reading of the patient</h3>
//         <form onSubmit={onSubmit}>
//           <Grid container spacing={3}>
//             <Grid item xs={12} sm={6}>
//             <TextInput
//                 label="Date Taken"
//                 name="dateTaken"
//                 value={dateTaken}
//                 type="number"
//                 onChange={onChange}
//               />
//               {/* <DateInput
//                 label="Date Taken"
//                 name="dateTaken"
// 								value={dateTaken}
// 								onChange={onChange}/> */}
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextInput
//                 label="Systoic"
//                 name="systoic"
//                 value={systoic}
//                 type="text"
//                 onChange={onChange}
//                 placeholder="Type here..."
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextInput
//                 label="Examination"
//                 name="examination"
//                 value={examination}
//                 type="text"
//                 onChange={onChange}
//                 placeholder="Type here..."
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextInput
//                 label="Temperature"
//                 name="temperature"
//                 value={temperature}
//                 type="text"
//                 onChange={onChange}
//                 placeholder="Type here..."
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextInput
//                 label="HeartRate"
//                 name="heartRate"
//                 value={heartRate}
//                 type="text"
//                 onChange={onChange}
//                 placeholder="Type here..."
//               />
//             </Grid>

//             <Grid item xs={12} sm={6}>
//               <TextInput
//                 label="Glucose"
//                 name="glucose"
//                 value={glucose}
//                 type="text"
//                 onChange={onChange}
//                 placeholder="Type here..."
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextInput
//                 label="Cholesterol"
//                 name="cholesterol"
//                 value={cholesterol}
//                 type="text"
//                 onChange={onChange}
//                 placeholder="Type here..."
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextInput
//                 label="Period Of The Day"
//                 name="periodOfTheDay"
//                 value={periodOfTheDay}
//                 type="text"
//                 onChange={onChange}
//                 placeholder="Type here..."
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//             <textarea
//               name="moreReadings"
//               value={moreReadings}
//               type="text"
//               cols="30" rows="10"
//               onChange={onChange}
//               placeholder="Type moreReadings "
//             />
//             </Grid>
//           </Grid>
//           <div className="submit">
//             <input
//               type="submit"
//               value={current ? "Update Reading" : "Add Reading"}
//             />
//           </div>
//           {/* {current && (
//             <div>
//               <button onClick={clearAll}> Clear </button>
//             </div>
//           )} */}
//         </form>{" "}
//       </div>
//     </Wrapper>
//   );
// };

// PatientForm.propTypes = {};

// export default PatientForm;
