'use client'; // Required for using hooks like useState/useRouter in Next.js App Router

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const response = await axios.post('http://localhost:3000/api/login', {
        email,
        password,
      });

      // Store token and user info
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('role', response.data.role);
      localStorage.setItem('name', response.data.name);

      // Redirect based on role
      const dashboardRoute =
        response.data.role === 'admin' ? '/admin-dashboard' : '/user-dashboard';
      router.push(dashboardRoute);
    } catch (error) {
      setErrorMsg(error.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="w-full max-w-sm mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Login</h2>

      {errorMsg && (
        <p className="text-red-500 text-center mb-4 font-medium">{errorMsg}</p>
      )}

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 disabled:bg-gray-400"
      >
        {loading ? 'Logging in...' : 'Login'}
      </button>

      <p className="text-center mt-4 text-gray-600">
        Don&apos;t have an account?{' '}
        <a href="/signup" className="text-blue-600 hover:underline">
          Sign Up
        </a>
      </p>
    </form>
  );
};

export default Login;
