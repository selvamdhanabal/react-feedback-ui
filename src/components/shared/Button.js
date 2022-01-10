import React from 'react'
import propsType from 'prop-types'

function Button({children, type, version, isDisabled}) {
    return (
        <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
            {children}
        </button>
    )
}

Button.defaultProps = {
    type: 'button',
    version: 'primary',
    isDisabled: false
}

Button.propsType = {
    children : propsType.node.isRequired,
    type : propsType.string,
    version : propsType.string,
    isDisabled : propsType.bool
}

export default Button
