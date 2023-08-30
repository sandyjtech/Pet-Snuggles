import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useUserAuth } from "../context/UserAuthProvider";


function Signup() {
  const { signUp, handleAuthSubmit, handleClick, error } = useUserAuth();

  return (
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <h2>Please Sign Up!</h2>
      <p>
        Already a member? <span onClick={handleClick}>Log In!</span>
      </p>
      <Formik
        initialValues={{
          username: "",
          password: "",
          address: "",
          small_kids: false,
          own_pets: false,
          space: "",
          email: "", // Add this if you want to match your model structure
        }}
        validationSchema={Yup.object({
          username: Yup.string().required("Username is required"),
          password: Yup.string().required("Password is required"),
          address: Yup.string().required("Address is required"),
          small_kids: Yup.boolean(),
          own_pets: Yup.boolean(),
          space: Yup.string(),
          email: signUp
            ? Yup.string().email("Invalid email address").required("Email is required")
            : Yup.string(),
        })}
        onSubmit={(values, actions) => {
          handleAuthSubmit(values, actions, "signup"); // Specify action type as 'signup'
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="username">Username</label>
              <Field type="text" id="username" name="username" />
              <ErrorMessage name="username" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                id="password"
                name="password"
                autoComplete="current-password"
              />
              <ErrorMessage name="password" />
            </div>
            <div>
              <label htmlFor="address">Address</label>
              <Field type="text" id="address" name="address" />
              <ErrorMessage name="address" />
            </div>
            <div>
              <label htmlFor="small_kids">Small Kids</label>
              <Field type="checkbox" id="small_kids" name="small_kids" />
            </div>
            <div>
              <label htmlFor="own_pets">Own Pets</label>
              <Field type="checkbox" id="own_pets" name="own_pets" />
            </div>
            <div>
              <label htmlFor="space">Space</label>
              <Field type="text" id="space" name="space" />
              <ErrorMessage name="space" />
            </div>
            {signUp && (
              <div>
                <label htmlFor="email">Email</label>
                <Field type="text" id="email" name="email" />
                <ErrorMessage name="email" />
              </div>
            )}
            <div>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Loading..." : "Sign Up"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Signup;
