import {useEffect, useState} from 'react';
import './styles.scss'
import Addition from "../../Components/Addition";
import Main from "../../Layouts/Main";
const Index = () => {
  const [answer, setAnswer] = useState('')
  const [firstNum, setFirstNum] = useState(Math.floor(Math.random() * 50))
  const [secondNum, setSecondNum] = useState(Math.floor(Math.random() * 50))
  const [counterSuccess, setCounterSuccess] = useState(0)

  const success = ()=> {
    setCounterSuccess(prevState => prevState+1)
    setFirstNum(Math.floor(Math.random() * 50))
    setSecondNum(Math.floor(Math.random() * 50))
    setAnswer('')
  }


  const next = ()=> {
    setFirstNum(Math.floor(Math.random() * 50))
    setSecondNum(Math.floor(Math.random() * 50))
    setAnswer('')
  }


  useEffect(() => {
    const handleKeyDown = (event: any) => {
      console.log(event)
      if (event.code.includes('Numpad') || event.code.includes('Digit')) {
        setAnswer(prevState => prevState.concat(event.key.replace(/\D/g,'')));
      } else if(event.code === 'Backspace') {
        setAnswer(prevState => prevState.slice(0, -1))
      } else if (event.code === 'ArrowRight') {
        next()
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [answer]);

  return (
    <Main>
      <div className='fast-test'>
        <p className='results'>{counterSuccess}</p>

        <Addition firstNum={firstNum} secondNum={secondNum} answer={Number(answer)} success={() => success()}/>


        <button onClick={()=> next()} className='skip-btn' title='Click here or press button ArrowRight to move next task'>
          <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg">
            <path
              d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591-1.299-1.002-3.945-3.044-5.498-4.243z"/>
          </svg>
        </button>
      </div>
    </Main>
  );
};

export default Index;