import React, { useState } from 'react';
import './App.scss';
import "bootstrap/dist/js/bootstrap.bundle";
import Header from "./components/Header";
import Login from "./pages/Auth/Login and signup";
import Footer from './components/Footer';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <>
      <Header />
      <main style={{backgroundColor:"white"}}>
        <h1 className='text-center'> You are SuccessFully Login </h1>
      </main>
      <Footer />
    </>
  );
}

export default App;