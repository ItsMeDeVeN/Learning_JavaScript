// login


import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const LoginForm = ({ onLogin }) => (
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      onLogin(values.email, values.password);
      setSubmitting(false);
    }}
  >
    {({ isSubmitting }) => (
      <div className="bg-white p-8 w-1/4 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <Form>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <Field
              type="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
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
              required
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            disabled={isSubmitting}
          >
            Login
          </button>
        </Form>
      </div>
    )}
  </Formik>
);

export default LoginForm;