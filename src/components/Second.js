import { useState, useEffect } from 'react';

import { useNavigate, Link } from 'react-router-dom';
import './Second.css'

function Second({ onLogout }) {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then((response) => response.json())
      .then((data) => setUsers(data.data))
      .catch((error) => console.log(error));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    onLogout();
  };

  function onLogout() {
    navigate('/');
  }
  return (
    <div className='form-box1'>
      <div className='form1'>
        <div className='bt'>
        <button onClick={handleLogout}>Logout</button>
        </div>
          <div className='content'>
            <ul className='list'>
              {users.map((user) => (
                <div className='hov'>
                  <li key={user.id}>
                  <Link to={'/userDetails/'+user.id}>{user.first_name} {user.last_name}</Link>
                </li>
                </div> 
              ))}
            </ul>
          </div>
      
      </div>
      
    </div>
  );
}

export default Second;