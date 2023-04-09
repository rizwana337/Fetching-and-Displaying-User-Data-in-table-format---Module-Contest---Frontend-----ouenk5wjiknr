import React, { useState, useEffect } from "react";

function UserTable() {
const [users,setUser]=useState([]);
useEffect(()=>{
    const fetchUsers=async()=>{
        const response=await fetch("htts://jsonplaceholder.typicode.com/users");
        const data=await response.json();
        setUser(data.sort((a,b)=>a.id-b.id));
    };
    fetchUsers();

},[]);
return(
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Nmae</th>

                <th>Email</th>

                <th>Phone</th>
                <th>Website</th>

            </tr>
        </thead>
        <tbody>
            {users.map((user)=>{
                <tr key={user.id}>   
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
                
                 </tr>
            })}
        </tbody>
    </table>
);

}

export default UserTable;

// import React, { useState, useEffect } from "react";

// function UserTable() {}

// export default UserTable;
