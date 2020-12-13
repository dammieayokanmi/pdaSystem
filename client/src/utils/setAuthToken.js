import axios from "axios";
import client from '../context/client';

const setAuthToken = token => {
	if(token) {
		client.defaults.headers.common['x-auth-token'] = token;
	} else {
		delete client.defaults.headers.common['x-auth-token'];
	}
}

export default setAuthToken;