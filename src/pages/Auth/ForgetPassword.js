import React, { useState } from 'react';

const ForgetPassword = ({ users, onLoginSuccess, setUsers, setShowForgetPassword }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleForgetPassword = () => {
    if (users) {
      const userIndex = users.findIndex((user) => user.email === email);
      if(password.length<=7){
        alert("Password must greater than 7!");
        return;
      }
      if (userIndex !== -1) {
        if (password === confirmPassword) {
          const newUsers = [...users];
          newUsers[userIndex].password = password;
          setUsers(newUsers);
          alert("Password changed successfully!");
          setShowForgetPassword(false);
          document.getElementById("login-container").style.display = "block";
        } else {
          alert("Passwords do not match!");
        }
      } else {
        alert("Email not found!");
      }
    } else {
      alert("Users not found!");
    }
  }

  const handleSignInPage = () => {
    setShowForgetPassword(false);
    document.getElementById("forgetPassword-container").style.display = "none";
    document.getElementById("login-container").style.display = "block";
  }

  return (
    <>
      <div id="forgetPassword-container" className="container my-5" >
        <div className="row">
          <div className="card" style={{ maxWidth: 500, margin: 'auto' }}>
            <h1>Forget Password</h1>

            <label htmlFor="email" className='mt-4' style={{ fontWeight: "bold" }} >Email address</label>
            <input id='email' className='form-control mb-3' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <label className='mt-2' style={{ fontWeight: "bold" }} htmlFor="password">New Password</label>
            <input id='password' type="password" className="form-control mb-3" value={password} onChange={(e) => setPassword(e.target.value)} />

            <label className='mt-2' style={{ fontWeight: "bold" }} htmlFor="confirmPassword">Confirm Password</label>
            <input id='confirmPassword' type="password" className="form-control mb-4" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

            <input style={{ alignSelf: 'center' }} type="button" className='form-control btn btn-primary ' value="Change Password" onClick={handleForgetPassword} />
            <p className='mt-3 text-center'>Back to <a className='anckerTag' onClick={handleSignInPage}>Login</a></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;