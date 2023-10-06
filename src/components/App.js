
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {

  const[user,setUser]=useState({name:"",email:"",password:""})
  let{name,email,password}=user;



  function submission(e){
    e.preventDefault();
    console.log(user);

  }

  


  return (
    <div>
        {/* Do not remove the main div */}
        <form onSubmit={submission}>
            <label>Name</label>
            <input type="text" onChange={(e)=>setUser({...user,name:e.target.value})}/>
            <br></br>
            <label>Email</label>
            <input type="email" onChange={(e)=>setUser({...user,email:e.target.value})}/>
            <br></br>
            <label>Password</label>
            <input type="password" onChange={(e)=>setUser({...user,password:e.target.value})}/>
            <br></br>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default App
