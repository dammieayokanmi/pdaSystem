import React, {Fragment} from 'react'
import spinner from '../../assets/spinner.gif'
export default function Spinner() {
	return (
		<Fragment>
			<img src={spinner} alt="loading..." style={{ width: '100px', margin: 'auto', display: 'block'}}/>
		</Fragment>
	)
}
