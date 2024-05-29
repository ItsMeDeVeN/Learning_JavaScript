import React from 'react';

const LoginForm = () => {
  const handleLoginclick = () => {
    // Handle login logic here
    // Retrieve email and password from form fields
  };

  return (
    <div className="container mx-auto mt-8 ">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <div className="mb-4 ml-40 mr-40">
              <label className="block text-gray-700 ">Email</label>
              <input
                type="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded mt-1" />
                
      <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                className="w-full p-2 border border-gray-300 rounded mt-1" />
      </div>
      <div className="flex justify-center">
      <button onClick={handleLoginclick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded r w-1/6">Login</button>
      </div>
    </div>
  );
};

export default LoginForm;