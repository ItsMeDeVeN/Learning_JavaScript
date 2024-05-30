import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values) => {
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (
      userData &&
      userData.email === values.email &&
      userData.password === values.password
    ) {
      window.location.href = "/Dashboard";
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600">
      <div className="w-full max-w-md rounded-lg shadow-lg bg-white p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <Field
                  className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 bg-white bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <Field
                  className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 bg-white bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="flex justify-center">
                <button
                  className="w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600 transition duration-300 focus:outline-none focus:shadow-outline"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Login
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;