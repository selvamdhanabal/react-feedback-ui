import React from 'react'
import propsType from 'prop-types'

const Card = ({children, reverse}) => {
    return (
        <div className='card' style={{
            backgroundColor: reverse ? 'rgba(0, 0, 0, 0.4)' : '#fff',
            color: reverse ? '#fff' : '#000',
        }}>
            {children}
        </div>
    )
}

Card.defaultProps = {
    reverse: false
}

Card.propsType = {
    reverse: propsType.bool,
    children: propsType.node.isRequired
}

export default Card
