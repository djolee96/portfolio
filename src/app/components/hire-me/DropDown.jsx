import React from 'react'

const DropDown = (props) => {
    const onChangeHandler = (e) => {
        props.onChange(e.target.value)
    }

    return (
        <select onChange={onChangeHandler} className={props.className}>
            <option value="-"></option>
            <option value="One week">One week</option>
            <option value="Two weeks">Two weeks</option>
            <option value="One month">One month</option>
            <option value="other">other</option>
        </select>
    )
}

export default DropDown