import { useState } from 'react';
import './App.css';
import InputValues from './InputValues';
import TableContent from './TableContent';
import background from './assets/background.jpg'
import image from './assets/investment-calculator-logo.png'

function App() {
  // state object to merge all these differents inputs
  const [inputValue, setInputValue] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn : 6,
    duration: 10,
});

// check if the value in duration state is positve
const inputIsValid = inputValue.duration >= 1;

// this function updates states values 
// based on the previous state
const handleInputValue = ((inputIdentifier, newValue) => {
    setInputValue(prevUserInput => {
        // return update state    
        return {
            // get the old values
            ...prevUserInput,
            // dynamically set a property depending
            // on which vlue is stored
            [inputIdentifier]: +newValue
        }
    })
})

  return (
    <div className={`flex flex-col justify-center items-center bg-[url(${background})] bg-center bg-cover bg-no-repeat relative w-full]`}>

      <div className=''>
        <img src={image} className='h-40 w-40 ml-20' />
        <h1 className='my-3 text-3xl text-neutral-50 font-bold' id='font'>Investement Calculator</h1>
      </div>

      <div className='flex flex-wrap py-6 px-32 justify-between h-1/3 w-1/2 bg-green-600 rounded-lg shadow-xl mb-2'>
        <InputValues 
          onChange={handleInputValue}
          inputValue={inputValue}  
        />
      </div>
      
      {/* fallback message */}
      {!inputIsValid && <p>Please enter a duration greater than zero</p>}
      {inputIsValid && <TableContent inputValue={inputValue}/>}
    </div>
  );
}

export default App;
