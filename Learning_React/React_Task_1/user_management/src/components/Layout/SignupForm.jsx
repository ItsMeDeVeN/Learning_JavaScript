import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignupForm = () => {
  const validationSchema = Yup.object().shape({
    firstname: Yup.string()
      .matches(
        /^[A-Za-z]+$/,
        "First name must contain only alphabetic characters"
      )
      .required("First name is required"),
    lastname: Yup.string()
      .matches(
        /^[A-Za-z]+$/,
        "Last name must contain only alphabetic characters"
      )
      .required("Lastname is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const userData = JSON.parse(localStorage.getItem("userData")) || [];
    if (userData && userData?.length > 0) {
      let list = [...userData, values];
      localStorage.setItem("userData", JSON.stringify(list));
    } else {
      userData?.push(values);
      localStorage.setItem("userData", JSON.stringify(userData));
    }
    resetForm({ values: "" });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600">
      <div className="w-full max-w-lg rounded-lg shadow-lg bg-slate-200 p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Sign Up
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
                  htmlFor="firstname"
                >
                  First Name
                </label>
                <Field
                  type="text"
                  name="firstname"
                  className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 bg-white bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline"
                  placeholder="Enter your first name"
                />
                <ErrorMessage
                  name="firstname"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="lastname"
                >
                  Last Name
                </label>
                <Field
                  type="text"
                  name="lastname"
                  className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 bg-white bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline"
                  placeholder="Enter your last name"
                />
                <ErrorMessage
                  name="lastname"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 bg-white bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline"
                  placeholder="Enter your email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 bg-white bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline"
                  placeholder="Enter your password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </label>
                <Field
                  type="password"
                  name="confirmPassword"
                  className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 bg-white bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline"
                  placeholder="Confirm your password"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-full  bg-teal-500 text-white py-2 rounded-md hover:bg-indigo-600 transition duration-300 focus:outline-none focus:shadow-outline"
                  disabled={isSubmitting}
                >
                  Sign Up
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignupForm;