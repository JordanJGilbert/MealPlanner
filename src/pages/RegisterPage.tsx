import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RegisterPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle registration logic here
  };

  return (
    <div>
      <Header />
      <main>
        <h1>Register</h1>
        <form onSubmit={handleRegister}>
          <div>
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default RegisterPage;