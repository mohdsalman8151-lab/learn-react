import {useState, useEffect} from 'react'

function FetchUser() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
       fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setUsers(json))
       
    }, []);
  return (
    <div>
        <h1>Fetch user list</h1>
      
        <ul>
            {users.map((user) => (
                <li key= {user.id}>{user.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default FetchUser