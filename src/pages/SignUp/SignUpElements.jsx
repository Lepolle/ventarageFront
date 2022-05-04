import { ErrorMessage, useField } from 'formik';
import React from 'react';
import './SignUp.styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

export const RegisElements = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="mb-3">
            <label htmlFor={field.name}>{label}</label>
            <input
                className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
                {...field} {...props}
                autoComplete="off"
            />
            <ErrorMessage component="div" name={field.name} className="error" />
        </div>
    )
}