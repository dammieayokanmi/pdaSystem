// import { Divider } from '@material-ui/core';
import React, {useContext} from 'react'
import AlertContext from '../../context/alert/alertContext'
import Alert from '@material-ui/lab/Alert';
import styled from "styled-components";


const Wrapper = styled.div`
.MuiAlert-root {
	font-size: 1.5rem;
	position: fixed;
	width: 100%;
	bottom: 0;
}

`
const Alerts = () => {
	const alertContext = useContext(AlertContext);
	return (
		
		alertContext.alerts.length > 0 && alertContext.alerts.map(alert => (
			<Wrapper key={alert.id} >
			<Alert severity={alert.type}>{alert.msg}</Alert>
			</Wrapper>
	)
// 			<div key={alert.id}  className={`alert alert-${alert.type}`}>
// {alert.msg}
// 			</div>

		)) 
		

}

export default Alerts;

