import React, { useState } from 'react';
import './Signup.css';
import { Stars, OrbitControls } from '@react-three/drei';
import { Canvas,useFrame } from '@react-three/fiber';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Your signup logic here
  }

  return (
    <div className="signup">
        <Canvas className="canvas">
            <Stars/>
      </Canvas>
      <div className='form-wrapper'>
        <form onSubmit={handleSignup}>
            <h2>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="passwordConfirmation">Confirm Password:</label>
          <input type="password" id="passwordConfirmation" name="passwordConfirmation" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      </div>
    </div>
  );
}




export default Signup;
