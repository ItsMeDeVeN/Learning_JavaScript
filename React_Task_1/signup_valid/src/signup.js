// signup


import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignupForm = ({ onSignup }) => {
  const validationSchema = Yup.object().shape({
    firstname: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .matches(/^[a-zA-Z]+$/, "First name should contain only letters")
      .required("First name is required"),
    lastname: Yup.string()
      .matches(/^[a-zA-Z]+$/, "Last name should contain only letters")
      .required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  return (
    <Formik
      initialValues={{
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        onSignup(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <div className="bg-white p-8 w-1/3 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Signup</h2>
          <Form>
            <div className="mb-4">
              <label className="block text-gray-700">First Name</label>
              <Field
                type="text"
                name="firstname"
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
              <ErrorMessage
                name="firstname"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Last Name</label>
              <Field
                type="text"
                name="lastname"
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
              <ErrorMessage
                name="lastname"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <Field
                type="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <Field
                type="password"
                name="password"
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Confirm Password</label>
              <Field
                type="password"
                name="confirmPassword"
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-red-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
              disabled={isSubmitting}
            >
              Signup
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default SignupForm;