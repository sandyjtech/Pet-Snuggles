import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useUserAuth } from "../context/UserAuthProvider";

function Login() {
  const { signUp, handleAuthSubmit, handleClick, error } = useUserAuth();

  return (
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <h2>Please Log In!</h2>
      <p>
        Not a member? <span onClick={handleClick}>Sign Up!</span>
      </p>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={Yup.object({
          username: Yup.string().required("Username is required"),
          password: Yup.string().required("Password is required"),
        })}
        onSubmit={(values, actions) => {
          handleAuthSubmit(values, actions, 'login'); // Specify action type as 'login'
        }}
      >
        {/* ... (rest of the formik form) */}
      </Formik>
    </div>
  );
}

export default Login;
