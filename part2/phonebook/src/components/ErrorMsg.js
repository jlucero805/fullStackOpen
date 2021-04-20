import React from 'react'
import '../css/error.css'

const ErrorMsg = ({message}) => {
    if (message === '') {
        return null
    }
    return (
        <div className={'error'}>
            {message}
        </div>
    )
}

export default ErrorMsg