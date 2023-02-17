import React, { useState } from 'react';
import './Signup.css';
// import { Stars, OrbitControls } from '@react-three/drei';
// import { Canvas,useFrame } from '@react-three/fiber';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Your signup logic here
  }

  return (
    <div className="signup">
        {/* <Canvas className="canvas">
            <Stars/>
      </Canvas> */}
      <div className='form-wrapper'>
        <form onSubmit={handleSignup}>
            <h2>Log In</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
  
        <button type="submit">Log In</button>
      </form>
      </div>
    </div>
  );
}




export default Login;
