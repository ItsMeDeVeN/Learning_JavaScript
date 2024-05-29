import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Header />
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          {/* Other routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;