import React, { useContext, useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import styled from "styled-components";
import PatientContext from "../../context/patient/patientContext";

const Wrapper = styled.div`
width: fit-content;
background: ${(props) => props.theme.color.text_01};
height: 80%;
transform: translate(0%, 10%);
height: auto;
    padding: 2rem;
.hel {
  padding: 2rem;
  max-width: 547px;
  margin: auto;
}
`
const Recommendation = () => {
    const patientContext = useContext(PatientContext);

    const { addPatient, updateCurrent, current } = useContext(
      PatientContext
    );
  
    useEffect(() => {
      if (current !== null) {
        setPatient(current);
      } else {
        setPatient({
            recommendation: "",
         
        });
      }
    }, [patientContext, current]);
  
    const [patient, setPatient] = useState({
        recommendation: "",
     
    });
  
    const {
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
        recommendation: "",
        
      });
    };

    // const clearAll = () => {
    //     clearCurrent(); 
    //   }
    return (
        <Wrapper>
             <form onSubmit={onSubmit}>
            <Grid container spacing={2}>
              
             

              <Grid item xs={12} sm={6}>
              <textarea
              name="recommendation"
              value={recommendation}
              type="text"
              cols="30" rows="10"
              onChange={onChange}
              placeholder="Type recommendation or comment here"
            />
            {/* <textarea name="recommendation" id="" cols="30" rows="10">{recommendation}</textarea> */}
                {/* <Button theme="whiteBtn" onClick={upload}>
                </Button> */}
                <div className="submit">
            <input
              type="submit"
              value={current ? "Update Comment" : "Add Comment"}
            />
          </div>
      
              </Grid>
              
            
            </Grid>
            </form>
        </Wrapper>
    )
}

export default Recommendation
