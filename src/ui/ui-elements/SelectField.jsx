import React from 'react'
import { Field } from 'redux-form'
import { Select } from '@material-ui/core'
import { green } from 'logger'
const selectField = (
  { 
    input, 
    label, 
    meta: { touched, error }, 
    children, 
    ...custom
  },
) => {
  green('select field')
  return (
    <Select
      children={children}
      value={input.value}
      {...custom}
      {...input}
    />
  )
}

const SelectField = ({ name, children }) => {
  return (
    <Field
      component={selectField}
      name={name}
      children={children}
    />
  )
}

export default SelectField
