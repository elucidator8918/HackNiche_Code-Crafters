import React, { useState,useEffect } from 'react'
import { Grid, Paper, TextField, Checkbox, FormGroup, FormControlLabel, Button, Link } from '@mui/material';

import { Router, useNavigate } from 'react-router-dom'

import axios from 'axios';


function Signup() {



    
    const [email, setEmail] = useState('')
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [password, setPassword] = useState('')
    const [category,setCat] =useState('')
    const [address,setAdd] =useState('')
    const [phone,setPhone] =useState('')

    const navigate = useNavigate()


   
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleFname = (e) => {
        setFname(e.target.value)
    }
    const handleLname = (e) => {
        setLname(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
        console.log(e.target.value)
    }
    
    const handleAddress =(e)=>{
        setAdd(e.target.value)
    }
    const handlePhone =(e)=>{
        setPhone(e.target.value)
    }
    const handleApi = () => {
        console.log({ email, fname, lname, password,category,address,phone })
        axios.post('http://127.0.0.1:8000/accounts/register/', {
          
            email: email,
            First_name: fname,
            Last_name: lname,
            password: password,
          
        }).then(result => {
             alert('success')
        
        })
            .catch(error => {
                alert('service error')
                console.log(error)
            })
        // navigate('/Getnews');
    }


    const Dropdown = () => {
        
      
        const handleOptionChange = (event) => {
          setCat(event.target.value);
        };
             
        return (
          <div>
            <select label= 'category' value={category} onChange={handleOptionChange}>
              <option value="Client" >Client</option>
              <option value="Worker" >Worker</option>
              <option value="Admin" >Admin</option>
            </select>
            <p>Selected Option: {category}</p>
          </div>
        );
      };
      
      
    
    return (
        <Grid>
            <Paper elevation={10} className="paper" >
                <Grid>
                    <h2 className='heading-login'>Sign Up</h2>
                </Grid>
                <>
                    <Grid className='box-username'>
                        <TextField id="outlined-basic" label="email" onChange={handleEmail} variant="outlined" placeholder='enter email' fullWidth required />
                    </Grid>
                    <Grid className='box-username'>
                        <TextField id="outlined-basic" label="First Name" onChange={handleFname} variant="outlined" placeholder='enter First Name' fullWidth required />
                    </Grid>
                    <Grid className='box-username'>
                        <TextField id="outlined-basic" label="Last Name" onChange={handleLname} variant="outlined" placeholder='enter Last Name' fullWidth required />
                    </Grid>
                    <Grid className='box-username'>
                        <TextField id="outlined-basic" label="Password" onChange={handlePassword} variant="outlined" placeholder='enter Password' fullWidth required />
                    </Grid></>
                    {/* <Grid className='box-username'>
                        <TextField id="outlined-basic" label="City" onChange={handleAddress} variant="outlined" placeholder='City' fullWidth required />
                    </Grid> */}
                

                <Grid className='box-username'>
                    <div className='signin-btn'>
                        <Button variant="contained" onClick={() => handleApi()} fullWidth >Sign Up</Button>
                    </div>
                </Grid>
            </Paper>
        </Grid>
    );
}
export default Signup;




// const CheckboxDropdown = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [selectedOptions, setSelectedOptions] = useState([]);
  
//     const toggleDropdown = () => {
//       setIsOpen(!isOpen);
//     };
  
//     const handleOptionChange = (event) => {
//       const selectedOption = event.target.value;
//       if (selectedOptions.includes(selectedOption)) {
//         setSelectedOptions(selectedOptions.filter((option) => option !== selectedOption));
//       } else {
//         setSelectedOptions([...selectedOptions, selectedOption]);
//       }
//     };
  
//     return (
//       <div>
//         <button onClick={toggleDropdown}>
//           {selectedOptions.length ? selectedOptions.join(", ") : "Select Options"}
//         </button>
//         {isOpen && (
//           <div>
//             <label>
//               <input
//                 type="checkbox"
//                 value="Option 1"
//                 checked={selectedOptions.includes("Option 1")}
//                 onChange={handleOptionChange}
//               />
//               Option 1
//             </label>
//             <br />
//             <label>
//               <input
//                 type="checkbox"
//                 value="Option 2"
//                 checked={selectedOptions.includes("Option 2")}
//                 onChange={handleOptionChange}
//               />
//               Option 2
//             </label>
//             <br />
//             <label>
//               <input
//                 type="checkbox"
//                 value="Option 3"
//                 checked={selectedOptions.includes("Option 3")}
//                 onChange={handleOptionChange}
//               />
//               Option 3
//             </label>
//           </div>
//         )}
//       </div>
//     );
//   };