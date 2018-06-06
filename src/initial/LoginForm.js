import React from 'react'
import { Field, reduxForm } from 'redux-form';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";

const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = '*Requerido'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Email invalido'
  }

  if (!values.password) {
     errors.password = "*Requerido"; 
  }else if (values.password.length < 6) {
      errors.password = "minimo 6 caracteres";
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
    <div className="contentInput">
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span className="error">{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const LoginFormaFinal = props => {
  const { handleSubmit, submitting } = props
  return (
    <div className="loginForm">
    <form onSubmit={handleSubmit}>
      <Field name="email" type="email" component={renderField} label="Email"  />
      <Field name="password" type="password" component={renderField} label="Password" />
      <div className="contentButton">
        <button type="submit" disabled={submitting}>
          login
        </button>
        <div className="linkNewUser">
          ¿No tienes una cuenta?<Link to="/signup">Registrate</Link>
        </div>
        {/* <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button> */}
      </div>
    </form>
    </div>
  )
}

export default reduxForm({
  form: 'loginValidation', // a unique identifier for this form
  validate, // <--- validation function given to redux-form
})(LoginFormaFinal)