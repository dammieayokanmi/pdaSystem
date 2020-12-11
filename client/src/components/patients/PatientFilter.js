import React, {useContext, useRef, useEffect} from 'react'
import PatientContext from "../../context/patient/patientContext";

const PatientFilter = () => {
    const patientContext = useContext(PatientContext);
    const text = useRef('');

    const {filterPatients,clearFilter, filtered} = patientContext
    
    useEffect(() => {
        if(filtered === null){
            text.current.value = '';
        }
    })
    const onChange = e => {
        if(text.current.value !== '') {
            filterPatients(e.target.value)
        } else {
            clearFilter();
        }
    }
    return (
        <form>
           <input ref={text} type="text" placeholder="filter by name or ward.." onChange={onChange}/> 
        </form>
    )
}

export default PatientFilter
