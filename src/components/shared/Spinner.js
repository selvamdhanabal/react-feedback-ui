import React from 'react'
import spinners from '../assests/spinner.gif'

function Spinner() {
    return <img src={spinners} alt='Loading...' style={{width: '100px',margin:'auto',display:'block'}} />
}

export default Spinner
