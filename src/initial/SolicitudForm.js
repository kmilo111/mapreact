import React from 'react'
import { Field, reduxForm } from 'redux-form'

const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Required'
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.age) {
    errors.age = 'Required'
  } else if (isNaN(Number(values.age))) {
    errors.age = 'Must be a number'
  } else if (Number(values.age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old'
  }
  return errors
}

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span className="error">{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const renderTextarea = ({
    textarea,
    label,
    meta: { touched, error, warning }
  }) => (
    <div>
      <label>{label}</label>
      <div>
        <textarea  {...textarea} placeholder={label}></textarea>
        {touched &&
          ((error && <span className="error">{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  )

const SolicitudForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <div className="solicitudForm">
        <form onSubmit={handleSubmit}>
        <Field name="dir_1" type="text" component={renderField} label="Dirección Origen"/>
        <Field name="dir_2" type="text" component={renderField} label="Dirección Destino" />
        <Field name="descripcion" component={renderTextarea} label="Descripción" />
        <div>
            <button type="submit" disabled={submitting}>
            Submit
            </button>
            <button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
            </button>
        </div>
        </form>
    </div>
  )
}

export default reduxForm({
  form: 'solicitudValidation', // a unique identifier for this form
  validate, // <--- validation function given to redux-form
   // <--- warning function given to redux-form
})(SolicitudForm)