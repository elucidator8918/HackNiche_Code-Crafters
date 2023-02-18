import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Lowstock from './Lowstock'
import bajaj from './BajajHighrisk.jpeg'

export default function StockDashboard(){
    // const [selectedOptions, setSelectedOptions] = useState([]);
    // const dashboardStyles = {
    //     backgroundImage: "url('./Worker.jpeg')",
    //     backgroundSize: "cover",
    //     backgroundRepeat: "no-repeat",
    //     height: "100vh",
    //     display: "flex",
    //     flexDirection: "column",
    //     alignItems: "center",
    //   };
    // const handleOptionChange = (event) => {
    //     const selectedOption = event.target.value;
    //     if (selectedOptions.includes(selectedOption)) {
    //       setSelectedOptions(selectedOptions.filter((option) => option !== selectedOption));
    //     } else {
    //       setSelectedOptions([...selectedOptions, selectedOption]);
    //     }
    //   };
    
    //   const CheckboxDropdown = () => {
    //     const [isOpen, setIsOpen] = useState(false);
    
    
    //     const toggleDropdown = () => {
    //       setIsOpen(!isOpen);
    //     };
    
    
    
    //     return (
    //       <div className="dashboard" style={dashboardStyles} >
    //         <button onClick={toggleDropdown}>
    //           {selectedOptions.length ? selectedOptions.join(", ") : "High Risk"}
    //         </button>
    //         {isOpen && (
    //           <div>
    //             <label>
    //               <input
    //                 type="checkbox"
    //                 value="Bajaj"
    //                 checked={selectedOptions.includes("Bajaj")}
    //                 onChange={handleOptionChange}
    //               />
    //               Bajaj
    //             </label>
    //             <br />
    //             <label>
    //               <input
    //                 type="checkbox"
    //                 value="Hindustan"
    //                 checked={selectedOptions.includes("Hindustan")}
    //                 onChange={handleOptionChange}
    //               />
    //               Hindustan
    //             </label>
    //             <br />
    //             <label>
    //               <input
    //                 type="checkbox"
    //                 value="ABBOTT"
    //                 checked={selectedOptions.includes("ABBOTT")}
    //                 onChange={handleOptionChange}
    //               />
    //               ABBOTT
    //             </label>
    //             <br />
    //             <label>
    //               <input
    //                 type="checkbox"
    //                 value="CIPLA"
    //                 checked={selectedOptions.includes("CIPLA")}
    //                 onChange={handleOptionChange}
    //               />
    //               CIPLA
    //             </label>
    //             <br />
               
    //             <br />
    //           </div>
    //         )}
    //       </div>
    
    //     );
    //   };
   

const HighRiskButton = () => {
  const [showNav, setShowNav] = useState(false);
  const [showBajaj, setShowBajaj] = useState(false);
  const [showHindustan, setShowHindustan] = useState(false);
  const [showCipla, setShowCipla] = useState(false);
  const [showAbbott, setShowAbbott] = useState(false);
  const [duration,setDuration] =useState('')
  const [company,setCompany] = useState('')
  const [money,setMoney] =useState(0)
  const[Amt,setAmt] = useState(0)
  const handleBajajClick =()=>{
    setShowBajaj(!showBajaj)
    setCompany('Bajaj')
  }
  const handleHindustanClick =()=>{
    setShowHindustan(!showHindustan)
    setCompany('Hindu')
  }
  const handleCiplaClick =()=>{
    setShowCipla(!showCipla)
    setCompany('CIPLA')
  }
  const handleAbbottClick =()=>{
    setShowAbbott(!showAbbott)
    setCompany('ABBOTT')
  }
  const handleButtonClick = () => {
    setShowNav(!showNav);
  }
  const handleDuration =(e) =>{
    setDuration(e.target.value)
  }
  const handleMoney =(e) =>{
    setMoney(e.target.value)
    console.log(money)
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('compony', company);
    formData.append('duration', duration);

    try {
      const response = await axios.post('http://127.0.0.1:8000/model/model-set/', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log(response);
      const stockAmount = response.data.pred * money;
      console.log(stockAmount)
      setAmt(stockAmount);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {!showNav && <button onClick={handleButtonClick}>High Risk</button>}
      {showNav && (
        <nav style={{display:"flex"}}>
          <ul>
            
            <button onClick ={handleBajajClick}>Bajaj</button>
            {showBajaj&&(<form>
                
                <input type='text' placeholder='Duration' onChange={handleDuration}></input>
                <input type='text' placeholder='Stocks' onChange={handleMoney}></input>
                <button type = 'submit' onClick={handleSubmit}> submit</button>
                <img src={bajaj} className="img-styling"></img>
            </form>)}
            <button onClick={handleHindustanClick}>Hindustan</button>
            {showHindustan&&(<form>
                
                <input type='text' placeholder='Duration' onChange={handleDuration}></input>
                <input type='text' placeholder='Stocks'onChange={handleMoney}></input>
                <button type = 'submit' onClick={handleSubmit}> submit</button>
            </form>)}
            <button onClick={handleCiplaClick}>Cipla</button>
            {showCipla&&(<form>
                
                <input type='text' placeholder='Duration' onChange={handleDuration}></input>
                <input type='text' placeholder='Stocks' onChange={handleMoney}></input>
                <button type = 'submit' onClick={handleSubmit}> submit</button>
            </form>)}
            <button onClick={handleAbbottClick}>ABBOTT</button>
            {showAbbott&&(<form>
                
                <input type='text' placeholder='Duration' onChange={handleDuration}></input>
                <input type='text' placeholder='Stocks' onChange={handleMoney}></input>
                <button type = 'submit' onClick={handleSubmit}> submit</button>
            </form>)}
            <h1>Forecasted Amount for this company:{Amt}</h1>
          </ul>
        </nav>
      )}
    </div>
  );
}


    return(
        <div>
        <HighRiskButton/><Lowstock/>
        </div>
    )
}