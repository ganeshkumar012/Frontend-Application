import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Third.css';

function Third() {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch(`https://reqres.in/api/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUser(data.data))
      .catch((error) => console.log(error));
  }, [userId]);

  return (
    <div className='photo-box'>
     <div className='photo'>
      <h2>{user.first_name} {user.last_name}</h2>
      <p>{user.email}</p>
      <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
     </div>
      
    </div>
  );
}

export default Third;