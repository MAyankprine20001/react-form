import { useState } from 'react';
import './App.css';

function App() {
//   const[firstName , setFirstname] =useState("");
//   const[lastName , setLastname] =useState("");
//   console.log(firstName);
//   console.log(lastName);
//   function changeFirstHandler(event){
//     // console.log("Printing First name")
//     // console.log(event.target.value)
//     setFirstname(event.target.value);
//   }
//   function changeSecondHandler(event){
//     // console.log("Printing Last  name")
//     // console.log(event.target.value)
//     setLastname(event.target.value);
//   }
 const[formdata, setFormData] = useState( {firstName: "" ,
 lastName: "" , email: "" ,comments: "" ,isVisible:true , mode : "" , favCar:""} )
//  console.log(formdata);

  function changeHandler(event){
    const{name ,value , checked , type} = event.target;
    setFormData(prevFormData => {
      return{
      ...prevFormData,
      [name]: type ==="checkbox" ? checked :  value
      }
    });
  }
  function submitHandler(event){
   event.preventDefault()
   console.log("finally printing the the data of the form");
   console.log(formdata);
  }

  return (
    <div className="App">
      
      <form onSubmit={submitHandler}>
        <input 
          type='text'
          placeholder='First Name'
          onChange={changeHandler}
          name = "firstName"
          value = {formdata.firstName}
          />

        <br/><br/><br/>
        <input 
          type='text'
          placeholder='Last Name'
          onChange={changeHandler}
          name = "lastName"
          value = {formdata.lastName}
          />
        
        <br/><br/><br/>
        <input 
          type='text'
          placeholder='Email enter'
          onChange={changeHandler}
          name = "email"
          value={formdata.email}
          />

         <br/><br/><br/>
         <textarea
         placeholder='enter your opinion'
         onChange={changeHandler}
         name = "comments"
         value={formdata.comments}
         />
         
        <br/><br/>
        <br/>
        <input 
          type='checkbox'
          onChange={changeHandler}
          name = "isVisible"
          id = "isVisible"
          value={formdata.isVisible}
          checked={formdata.isVisible}
          />
          <label htmlFor='isVisible'>Am i isVisible</label>
          <br/><br/>
        <br/>
        <fieldset>
          <legend>Mode:</legend>
          <input 
          type='radio'
          onChange={changeHandler}
          name = "mode"
          value="Online-mode"
          id = "Online-mode"
          checked ={formdata.mode === "Online-mode"}
          />
          <label htmlFor='Online-mode'>online mode</label>

          <input 
          type='radio'
          onChange={changeHandler}
          name = "mode"
          value="Offline-mode"
          id = "Offline-mode"
          checked ={formdata.mode === "Offline-mode"}
          />
          <label htmlFor='Offline-mode'>Offline Mode</label>
        </fieldset>
        <label htmlFor='favCar'>Tell me your Favourite car</label>
        <select 
           name = "favCar"
           id ="favCar"
           value={formdata.favCar}
           onChange={changeHandler}
        >
          <option value = "scarpio">scarpio</option>
          <option value = "tharr">tharr</option>
          <option value = "swift">swift</option>
          <option value = "alto">alto</option>
          <option value = "nano">nano</option>

        </select>
       <br/><br/>
       <button>Submit</button>
       
      </form>

    </div>
  );
  }

export default App;
