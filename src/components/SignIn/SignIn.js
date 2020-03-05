import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  Badge,
  Button,
  Col,
  Feedback,
  FormControl,
  FormGroup,
  FormLabel,
  InputGroup
} from "react-bootstrap";
import SignInSchema from "../ValidateForm/ValidateForm";
import "./SignIn.css";

const SignIn = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={SignInSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
          <Form className="form-signin">
            <h2>Sign In</h2>
            <FormGroup controlId="formEmail">
              {/* <FormLabel>Email</FormLabel> */}
              <Field type="email" name="email">
                {({ field, form, meta }) => (
                  <FormControl
                    type="email"
                    {...field}
                    placeholder="Email address"
                  />
                )}
              </Field>
              <ErrorMessage name="email" component="div" />
            </FormGroup>
            <FormGroup controlId="formPassword">
              {/* <FormLabel>Password</FormLabel> */}
              <Field type="password" name="password">
                {({ field, form, meta }) => (
                  <FormControl type="password" {...field} placeholder="Password" />
                )}
              </Field>
              <ErrorMessage name="password" component="div" />
            </FormGroup>
            <Button variant="primary" type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
      )}
    </Formik>
  );
};

export default SignIn;
