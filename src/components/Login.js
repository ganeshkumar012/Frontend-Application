import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'

function Login({ onLogin }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && phone && email) {
      const user = { name, phone, email };
      localStorage.setItem('user', JSON.stringify(user));
      onLogin();
    }
  };

  function onLogin() {
    navigate('/home');
  }

  return (
    <div className='form-box'>
      <h1>Login</h1>
       <form onSubmit={handleSubmit} className='form'>
      
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' required/>
      
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder ='PhoneNumber' required/>
      
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder ='Email' required/>

        <button type="submit">Submit</button>
      </form>
    </div>
   
  );
}

export default Login;