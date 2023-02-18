import React,{useState} from 'react';
import axios from 'axios';
export default function Lowrisk(){
    const LowRiskButton = () => {
        const [showNav, setShowNav] = useState(false);
        const [showInfosys, setShowInfosys] = useState(false);
        const [showkotak, setShowkotak] = useState(false);
        const [showHDFC, setShowHDFC] = useState(false);
        const [showHCLTECH, setShowHCLTECH] = useState(false);
        const [duration,setDuration] =useState('')
        const [company,setCompany] = useState('')
        const [money,setMoney] =useState(0)
        const[Amt,setAmt] = useState(0)
        const handleInfosysClick =()=>{
          setShowInfosys(!showInfosys)
          setCompany('infosys')
        }
        const handlekotakClick =()=>{
          setShowkotak(!showkotak)
          setCompany('kotak')
        }
        const handleHDFCClick =()=>{
          setShowHDFC(!showHDFC)
          setCompany('HDFC')
        }
        const handleHCLTECHClick =()=>{
          setShowHCLTECH(!showHCLTECH)
          setCompany('HCLTECH')
        }
        const handleButtonClick = () => {
          setShowNav(true);
        }
        const handleDuration =(e) =>{
          setDuration(e.target.value)
        }
        const handleMoney =(e) =>{
          setMoney(e.target.value)
        }
        const handleSubmit = async(event) => {
          event.preventDefault()
        const formData = new FormData();
          formData.append("compony", "Infosys");
          formData.append("duration",duration);
         
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
            {!showNav && <button onClick={handleButtonClick}>Low risk</button>}
            {showNav && (
              <nav style={{display:"flex"}}>
                <ul>
                  
                  <button onClick ={handleInfosysClick}>Infosys</button>
                  {showInfosys&&(<form>
                      
                      <input type='text' placeholder='Duration' onChange={handleDuration}></input>
                      <input type='text' placeholder='Money' onChange={handleMoney}></input>
                      <button type = 'submit' onClick={handleSubmit}> submit</button>
                  </form>)}
                  <button onClick={handlekotakClick}>kotak</button>
                  {showkotak&&(<form>
                      
                      <input type='text' placeholder='Duration' onChange={handleDuration}></input>
                      <input type='text' placeholder='Money'onChange={handleMoney}></input>
                      <button type = 'submit' onClick={handleSubmit}> submit</button>
                  </form>)}
                  <button onClick={handleHDFCClick}>HDFC</button>
                  {showHDFC&&(<form>
                      
                      <input type='text' placeholder='Duration' onChange={handleDuration}></input>
                      <input type='text' placeholder='Money' onChange={handleMoney}></input>
                      <button type = 'submit'onClick={handleSubmit}> submit</button>
                  </form>)}
                  <button onClick={handleHCLTECHClick}>HCLTECH</button>
                  {showHCLTECH&&(<form>
                      
                      <input type='text' placeholder='Duration' onChange={handleDuration}></input>
                      <input type='text' placeholder='Money' onChange={handleMoney}></input>
                      <button type = 'submit'onClick={handleSubmit}> submit</button>
                  </form>)}
                  <h1>Forecasted Amount for this company:{Amt}</h1>
                </ul>
              </nav>
            )}
          </div>
        );
      }
      return(
        <LowRiskButton/>
      )
}