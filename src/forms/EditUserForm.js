import { useState } from "react"
const EditUserForm=(props)=>
{
    const [user,setUser]=useState(props.currentUser);
    const handleInputChange=(event)=>{
        const {name,value}=event.target;
        setUser({...user,[name]:value});        
    }
    return(
        <form onSubmit={
            event=>{
                event.preventDefault();
                if(!user.name||!user.username) return;
                props.updateUser(user.id,user);
                
            }
        }>
            <label>Name</label>
            <input type="text" onChange={handleInputChange} name="name" value={user.name}/>
            <label>UserName</label>
            <input type="text" onChange={handleInputChange} name="username" value={user.username}/>
            <button>UpdateUser</button>
            <button onClick={()=>{
                props.setEditing(false);
            }}></button>
        </form>

    )

}
export default EditUserForm;