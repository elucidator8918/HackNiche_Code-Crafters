import {React,useState} from "react";




 function Slider(){
    const [value, setValue] = useState(0);
    const [category,setCat] =useState('')
    const MAX = 10;
    let currentSum =0;
    const getBackgroundSize = () => {
	return {
		backgroundSize: `${(value * 100) / MAX}% 100%`,
	};
    }
    function Dropdown() {
        
      
        const handleOptionChange = (event) => {
          setCat(event.target.value);
        };
             
        return (
          <div>
            <select label= 'category' value={category} onChange={handleOptionChange}>
              <option value="Jan" >Jan</option>
              <option value="Feb" >Feb</option>
              <option value="March" >March</option>
            </select>
            <p>Selected Month: {category}</p>
          </div>
        );
      }
   
    return(
        <div>
            <form>
            <div className='Dropdown'>
                            <Dropdown></Dropdown>
                        </div>  
                <input 
                type="range"
                min="0"
                max={MAX}
                onChange={(e) => setValue(e.target.value)}
                style={getBackgroundSize()}
                value={value}
                />
            </form>
        </div>
    
    )
}
export default Slider;