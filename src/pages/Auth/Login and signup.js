import React, { useState } from 'react';
import ForgetPassword from './ForgetPassword';

const Login = ({ onLoginSuccess }) => {
  const [users, setUsers] = useState([
    {
      username: "sample",
      email: "test@example.com",
      password: "password123",
    },
  ]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showForgetPassword, setShowForgetPassword] = useState(false);

  const handleSignUpPage = () => {
    clearInputs();
    document.getElementById("signup-container").style.display = "block";
    document.getElementById("login-container").style.display = "none";
  }

  const handleSignInPage = () => {
    clearInputs();
    document.getElementById("signup-container").style.display = "none";
    document.getElementById("login-container").style.display = "block";
  }

  const handleSignUp = () => {
    if (password.length < 8) {
      alert("Password must greater than or equal to 8")
      return;
    }
    const userExists = users.some((user) => user.email === email);
    if (!userExists) {
      setUsers([...users, { username, email, password }]);

      console.log('users', users);
      alert("User created successfully");
      console.log('users', users);

      document.getElementById("signup-container").style.display = "none";
      document.getElementById("login-container").style.display = "block";
    } else {
      alert("User already exists");
    }
  }

  const handleLogin = () => {
    const userExists = users.some((user) => user.email === email && user.password === password);
    if (userExists) {
      onLoginSuccess();
      console.log('users', users);
    } else {
      alert("Invalid email or password");
    }
  }

  const handleForgetPassword = () => {
    setShowForgetPassword(true);
    document.getElementById("login-container").style.display = "none";
  }

  const clearInputs = () => {
    setUsername('');
    setEmail('');
    setPassword('');
  }

  return (
    <>
      <main>

        {/* signIn page */}

        <div id='login-container' style={{ display: 'none' }} className="container my-5">
          <div className="row">
            <div className="card" style={{ maxWidth: 500, margin: 'auto' }}>
              <h1>Login</h1>

              <label htmlFor="loginEmail" className='mt-4' style={{ fontWeight: "bold" }} >Email address</label>
              <input id='loginEmail' className='form-control mb-3' type="email" value={email} onChange={(e) => setEmail(e.target.value)} autocomplete="email" />

              <div className="d-flex justify-content-between align-items-center">
                <label className='mt-2' style={{ fontWeight: "bold" }} htmlFor="loginPassword" >Password</label>

                <a className='anckerTag' onClick={handleForgetPassword}>Forget Password?</a>
              </div>
              <input id='loginPassword' type="password" className="form-control mb-4" value={password} onChange={(e) => setPassword(e.target.value)} autocomplete="current-password" />

              <input style={{ alignSelf: 'center' }} type="button" className='form-control btn btn-primary ' value="Login" onClick={handleLogin} />
              <p className='mt-3 text-center'>Don't Have Account? <a className='anckerTag' onClick={handleSignUpPage}>SignUp</a></p>
            </div>
          </div>
        </div>

        {showForgetPassword && <ForgetPassword users={users} setUsers={setUsers} onLoginSuccess={onLoginSuccess} setShowForgetPassword={setShowForgetPassword} />}

        {/* signUp page */}

        <div id='signup-container' style={{ display: 'block' }} className="container my-5">
          <div className="row">
            <div className="card " style={{ maxWidth: 500, margin: 'auto' }}>
              <h4 style={{ color: 'Green' }}>Welcome To My Website.</h4>
              <h1>SignUp</h1>

              <label className='mt-4' style={{ fontWeight: "bold" }} htmlFor="signupUsername">UserName:</label>
              <input id='signupUsername' className="form-control mb-2" type="text" value={username} onChange={(e) => setUsername(e.target.value)} name="UserName" autocomplete="username" />

              <label className='mt-2' style={{ fontWeight: "bold" }} htmlFor="signupEmail">Email:</label>
              <input id='signupEmail' className='form-control mb-2' type="email" value={email} onChange={(e) => setEmail(e.target.value)} autocomplete="email" />

              <label style={{ fontWeight: "bold" }} className='mt-2' htmlFor="signupPassword">Password:</label>
              <input id='signupPassword' type="password" className="form-control mb-4" value={password} onChange={(e) => setPassword(e.target.value)} autocomplete="new-password" />

              <input style={{ alignSelf: 'center' }} type="button" className='form-control btn btn-primary ' value="SignUp" onClick={handleSignUp} />
              <p className='mt-3 text-center'>Already Have an account <a className='anckerTag' onClick={handleSignInPage}>SignIn</a></p>
            </div>
          </div>
        </div>

      </main>
    </>
  )
}

export default Login;