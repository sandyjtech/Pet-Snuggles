import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function Signup() {
  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password is required'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    // Handle the signup logic here, e.g. making an API request
    // to register the user with the provided information
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="username">Username</label>
            <Field type="text" id="username" name="username" />
            <ErrorMessage name="username" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Field type="password" id="confirmPassword" name="confirmPassword" />
            <ErrorMessage name="confirmPassword" />
          </div>
          <div>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Signing up...' : 'Sign Up'}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default Signup;
