import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupForm = () => {
  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  const validationSchema = Yup.object().shape({
    firstname: Yup.string().matches(/^[A-Za-z]+$/, 'First name must contain only alphabetic characters').required('First name is required'),
    lastname: Yup.string().matches(/^[A-Za-z]+$/, 'Last name must contain only alphabetic characters').required('Lastname is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm password is required')
  });

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle signup logic here
    };

  return (
    <div className="container mx-auto mt-8 ">
      <h2 className="text-2xl font-bold mb-4 flex justify-center alignitems-center">Sign Up</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ isSubmitting , errors }) => (
          <Form className='ml-40 mr-40'>
            <div className="mb-4">
              {console.log(errors)}
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
            <div className="flex justify-center">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 w-1/6 "
              disabled={isSubmitting}
            >
              Signup
            </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupForm;