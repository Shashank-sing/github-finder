import AlertContext from './alertContext'
import React, {useReducer} from 'react'
import AlertReducer from './alertReducer'
import {
    SET_ALERT,
    RESET_ALERT
} from '../types'

const AlertState = props => {
    const initialState = {
        alert: null
    }

    const [state, dispatch] = useReducer(AlertReducer, initialState);


    const setAlert = (msg, type) => {
        dispatch({
            type:SET_ALERT, 
            payload: {
                msg: msg,
                type: type
            }
        })

        setTimeout(()=> {
            dispatch({type:RESET_ALERT});
        }, 5000)
    }

    return <AlertContext.Provider
        value = {{
            alert: state.alert,
            setAlert
        }}
    >
        {props.children}
    </AlertContext.Provider>
}

export default AlertState