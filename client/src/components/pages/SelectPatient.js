// import React, { useState, useContext } from "react";
// import PropTypes from "prop-types";
// import styled from "styled-components";
// import { SelectInput } from "../../components/common/inputs";
// import Button from "../../components/common/Button";
// import AppLayout from "../../components/layouts/AppLayout";

// import { Grid } from "@material-ui/core";
// import { Link } from "react-router-dom";
// import Footer from "../../components/common/Footer";
// import PatientContext from "../../context/patient/patientContext";

// const Wrapper = styled.div`
//   #submit > div {
//     padding-top: 2rem;
//   }
//   .paper {
//     padding: 2rem;
//     display: grid;
//     margin-bottom: 5rem;
//     align-items: center;
//     grid-template-columns: 1fr 30%;
//     img {
//       width: 300px;
//       height: 170px;
//     }
//     p {
//       font-size: 1.6rem;
//       line-height: 2.5rem;
//       letter-spacing: 0.2px;
//       color: ${(props) => props.theme.color.ui_04};
//     }
//   }
//   .welcome {
//     font-size: 2.4rem;
//     color: ${(props) => props.theme.color.ui_01};
//     letter-spacing: -0.2px;
//     line-height: 2.4rem;
//     padding-bottom: 1.2rem;
//     @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
//       font-size: 2rem;
//     }
//   }
// `;
// const optionPatients = [
//   { value: "Ade John", text: "Ade John" },
//   { value: "Lawson Frank", text: "Lawson Frank" },
//   { value: "Bola Seun", text: "Bola Seun" },
//   { value: "Joe Leo", text: "Joe Leo" },
// ];

// const SelectPatient = ({ patient }) => {
//   const patientContext = useContext(PatientContext);
//   const { patients } = patientContext;
//   const [patientValue, setPatient] = useState("");
//   const {
//     id,
//     name,
//     wardNumber,
//     dateAdmitted,
//     address,
//     stateOfOrigin,
//     gender,
//     drugAllergies,
//     foodAllergies,
//     maritalStatus,
//     phoneNumber,
//     occupation,
//   } = patients;

//   // const optionPatients = patients.map(patient => (
//   //   patient.name
//   //   ))
//   console.log(optionPatients);

//   const options = optionPatients.map((option) => option);
//   console.log(options);

//   return (
//     <Wrapper>
//       <AppLayout>
        
//         <Grid container spacing={3}>
//           <Grid item xs={12} sm={12}>
//             <SelectInput
//               label="Select one of the patients below"
//               // options ={optionPatients.map (option=>{
//               //   return (
//               //     {option}
//               //   )
//               // })}
//               options={optionPatients}
//               value={patientValue}
//               onChange={setPatient}
//             />
//             <Link to="" id="submit">
//               <Button theme="blueBtn">Select</Button>
//             </Link>
//           </Grid>
//         </Grid>
//         <Footer btnText="Add new patient" to="/all_patients" />
//       </AppLayout>
//     </Wrapper>
//   );
// };

// SelectPatient.propTypes = {
//   patient: PropTypes.object.isRequired,
// };

// export default SelectPatient;
