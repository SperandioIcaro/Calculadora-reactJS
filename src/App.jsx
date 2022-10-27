import Input from './components/Input'
import Button from './components/Button'

import { useState } from 'react'

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const handleSumNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('+')
    }else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }

  const handleMinusNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('-')
    }else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }
  
  const handleMultNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('*')
    }else {
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }
  const handleDivideNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('/')
    }else {
      const sum = Number(firstNumber) / Number(currentNumber);
     setCurrentNumber(String(sum))
      setOperation('')
    }

  }

  const handlePercentNumbers = () => {
    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('%')
    }else {
      const sum = (Number(firstNumber) * Number(currentNumber)) / 100;
      setCurrentNumber(String(sum))
      setOperation('')
    }  
  }

  const handleEquals = () => {

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
        switch(operation){
          case '+':
            handleSumNumbers();
            break;
          case '-':
            handleMinusNumbers();
            break;
          case '*':
            handleMultNumbers();
            break;
          case '/':
            handleDivideNumbers();
            break;
          case '%':
            handlePercentNumbers();
            break;
          default: 
            break;
        }
    }

  }

  return (
    <div className="flex items-center justify-center w-auto h-auto bg-zinc-300 mt-28 shadow-xl p-2 rounded-xl">
      <div className=" bg-zinc-100 w-96 min-auto rounded-lg">
        <Input value={currentNumber} />
            <div className="flex flex-row justify-between items-center">
                <Button label={'X'} onClick={handleMultNumbers}/>  
                <Button label={'/'} onClick={handleDivideNumbers} />
                <Button label={'C'} onClick={handleOnClear} /> 
                <Button label={'%'} onClick={handlePercentNumbers} />               
            </div>
            <div className="flex flex-row justify-between items-center">
                <Button label={'7'} onClick={() => handleAddNumber('7')}/>  
                <Button label={'8'} onClick={() => handleAddNumber('8')} />
                <Button label={'9'} onClick={() => handleAddNumber('9')} /> 
                <Button label={'-'} onClick={handleMinusNumbers} />               
            </div>
            <div className="flex flex-row justify-between items-center">
                <Button label={'4'} onClick={() => handleAddNumber('4')} />  
                <Button label={'5'} onClick={() => handleAddNumber('5')} />
                <Button label={'6'} onClick={() => handleAddNumber('6')} />
                <Button label={'+'} onClick={handleSumNumbers} />
            </div>
            <div className="flex flex-row justify-between items-center">
                <Button label={'1'} onClick={() => handleAddNumber('1')} />  
                <Button label={'2'} onClick={() => handleAddNumber('2')} />
                <Button label={'3'} onClick={() => handleAddNumber('3')} />
                <Button label={'='} onClick={handleEquals} />
            </div>
            <div className="flex flex-row justify-between items-center">
                <Button label={'0'} onClick={() => handleAddNumber('0')} />                
            </div>
      </div>
    </div>
  )
}

export default App
