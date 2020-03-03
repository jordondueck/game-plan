import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Badge, Button, Col, Feedback, FormControl, FormGroup, FormLabel, InputGroup } from 'react-bootstrap';
import "./SignIn.css";

const SignIn = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <section className="container">
          <Form className="form-signin">
            <h2>Sign In</h2>
            <label className="label" htmlFor="email">
              Email
            </label>
            <Field className="input" type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <label className="label" htmlFor="password">
              Password
            </label>
            <Field className="input" type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <Button className="button" type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        </section>
      )}
    </Formik>
  );
};

export default SignIn;
