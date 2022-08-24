import { useState } from "react";
import AdduserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";
import UserTable from "./UserTable";

function App() {
 
  const usersData=[
    {
      id:1,name:"Priya",username:"apriya"},
      {id:2,name:"Ridhan",username:"rridhan"},
     { id:3,name:"Raja",username:"braja"},

  ];
  const addUser=(user)=>{
    user.id=users.length+1;
    setUsers([...users,user]); 
  }
  const deleteUser=(id)=>{
    setUsers(users.filter((user)=>user.id!==id));
  }
  const [users,setUsers]=useState(usersData);
  const [editing,setEditing]=useState(false);
  const initialFormState={id:null,name:'',username:''};
  const [currentUser,setCurrentUser]=useState(initialFormState);
 const editRow=(user)=>{
   setEditing(true);
   setCurrentUser({id:user.id,name:user.name,username:user.username});
 }
 const updateUser=(id,updatedUser)=>{
   setEditing(false);
   setUsers(users.map((user)=>(user.id===id?updatedUser:user)));
 }
  return (
    
    <div className="container">
      <h1>CRUD App with hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing?(
          <div>
            <h2>Edit Form</h2>
            <EditUserForm
            setEditing={setEditing}
            currentUser={currentUser}
            updateUser={updateUser}
            />
            </div>):(
              <div>
                <h2>Add User</h2>
          <AdduserForm addUser={addUser} />
          </div>
        
            )
            }
          </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable editRow={editRow} deleteUser={deleteUser} users={users}/>
        </div>
      </div>
    </div>
   
  );
}

export default App;
