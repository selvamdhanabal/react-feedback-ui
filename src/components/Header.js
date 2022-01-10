import React from 'react'
import propsType from 'prop-types'

const Header = ({text, bgColor, textColor}) => {

    const headerStyle = {
        backgroundColor: bgColor,
        color: textColor
    }

    return (
        <header style={headerStyle}>
           <div className='container'>
                <h2>{text}</h2>
           </div>
        </header>
    )
}

export default Header

Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95',
}

Header.propsType = {
    text : propsType.string,
    bgColor: propsType.string,
    textColor: propsType.string,
}