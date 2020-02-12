import React from 'react'
import "./Input.scss"
const Input = ({ classNam, ...otherProps }) => (
    <input
        {...otherProps}
        className={classNam}
    />
)

export default Input
