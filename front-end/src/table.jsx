import React, { useState, useEffect } from 'react';
import './App.css';
function MyTable(){
    const [data, setData] = useState([]);
    useEffect(()=> {
        fetch("https://reqres.in/api/users")
        .then(response=>{
            return response.json();

        })
        .then(data =>{
            setData(data.data);
            console.log(data); 
        })
            .catch(error => {
                console.error("Error fetching data:", error);

            }

            )

            

            
        }

        )

    
    
    
    return(
        <div>
        <table>
            <thead>
                <tr>
            <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Image</th>
          </tr>
          </thead>
          <tbody>
          {data.map ((user, index) => (
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.first_name}</td>
                            <td>{user.email}</td>
                            <td><img src={user.avatar}/></td>
                        </tr>
                    ))}

            </tbody>
        </table>
        </div>

    );
}
export default MyTable;