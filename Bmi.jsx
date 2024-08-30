import React, { useState } from 'react'

const Bmi = () => {
  const [value, setvalue] = useState('')
  const [weight, setweight] = useState('')
  const [result, setresult] = useState('')
  const [catagary, setcatagary] = useState('')


  function handlecalculate(){
    if(value>0 && weight>0){
      
   let num1 =( parseInt(weight))   
   let num2 = (parseFloat(value)/100)
   let num3 = ((num1/(num2*num2)).toFixed(2))

   setresult(`You BMI Value is : ${num3}`)
   if(num3 < 18.5){
    setcatagary('Category is : underweight')
   }
   else if (num3 < 24.9){
    setcatagary('Category is : Nornal Weight')
   }
   else if (num3 < 29.9){
    setcatagary('Category is : Overweight')
   }
   else{
    setcatagary('Category is : Obesity')
   }
    }else{
      setresult(`Please Enter Valid Weight And Height`)
    }

  }
  function handlereset(){
    setvalue('')
    setweight('')
    setcatagary('')
    setresult('')
  }
  return (
    <>
    <div className='bmi'>
      <div className='bmii'>

      <div>
      <h1>BMI CALCULATOR</h1>
      </div>

      <div className='input1-div'>
      <label htmlFor="height">HEIGHT</label>
      <input 
      type="number" 
      placeholder='Height in cm' 
      required 
      value={value}
      id='height'
      onChange={(e)=>setvalue(e.target.value)}
      /> 
      </div><br />

      <div className='input2-div'>
      <label htmlFor="weight">WEIGHT</label>
      <input type="number"
      placeholder='weight in Kg' 
      required 
      value={weight}
      id='weight'
      onChange={(e)=>setweight(e.target.value)}

     />
      </div>

    <br />

    <div className='button-div'>
    <button onClick={handlecalculate} >CALCULATE</button>
    <button onClick={handlereset} >RESET</button>
    </div>

    <br />

    <div>

    <p>{result}</p>
    <h4> {catagary}</h4>
      
    </div>
   
      </div>

    </div>
    </>
  )
}

export default Bmi