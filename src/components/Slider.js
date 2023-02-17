import {React,useState,useRef,useEffect} from "react";




 function Slider(){
    const [value, setValue] = useState(500);
    const [category,setCat] =useState('')
    const previousValue = useRef(null);
    const [maxValue, setMaxValue] = useState(150000);
    
    let currentSum = 0;
    const getBackgroundSize = () => {
	return {
		backgroundSize: `${(value * 100) / maxValue}% 100%`,
	};
    }
    function Dropdown() {
        
      
        const handleOptionChange = (event) => {
          setCat(event.target.value);
        };
        
  
        useEffect(() => {
            if (previousValue.current === category) {
              setMaxValue(maxValue - currentSum);
            } else {
              currentSum += parseInt(value);
            }
            previousValue.current = category;
            setMaxValue(maxValue - currentSum);
          }, [category, value, maxValue]);

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

      const amount = currentSum+currentSum*0.071;
    return(
        <div>
            <form>
            <div className='Dropdown'>
                            <Dropdown></Dropdown>
                        </div>      
            
               <input 
                type="range"
                min="500"
                step="10"
                max={maxValue}
                onChange={(e) => setValue(e.target.value)}
                style={getBackgroundSize()}
                value={value}
                />
                <h1>{value}</h1>
                <button type="submit">Calculate</button>
                <h2>{amount}</h2>
            </form>
        </div>
    
    )
}
export default Slider;