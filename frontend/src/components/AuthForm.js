

import { useState } from 'react';
import { auth, provider } from '../firebase';
import { signup } from '../api';
import { signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';

const AuthForm = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [profilePhoto, setProfilePhoto] = useState('');
  const [coverPhoto, setCoverPhoto] = useState('');
  
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const userData = { name, email: user.email, phone, profilePhoto, coverPhoto };
      const response = await signup(userData);
      setUser(response);
    
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const userData = { name: user.displayName, email: user.email, phone, profilePhoto, coverPhoto };
      const response = await signup(userData);
      setUser(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
          <input
            type="text"
            value={profilePhoto}
            onChange={(e) => setProfilePhoto(e.target.value)}
            placeholder="Profile Photo URL"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
          <input
            type="text"
            value={coverPhoto}
            onChange={(e) => setCoverPhoto(e.target.value)}
            placeholder="Cover Photo URL"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
          >
            Sign Up
          </button>
          <button
            type="button"
            onClick={handleGoogleSignup}
            className="w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200"
          >
            Sign Up with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
