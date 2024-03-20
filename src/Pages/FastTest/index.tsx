import {useEffect, useState} from 'react';
import './styles.scss'
import Addition from "../../Components/Addition";
import Main from "../../Layouts/Main";
const Index = () => {
  const [answer, setAnswer] = useState('')
  const [firstNum, setFirstNum] = useState(30)
  const [secondNum, setSecondNum] = useState(30)
  const [counterSuccess, setCounterSuccess] = useState(0)

  const success = ()=> {
    setCounterSuccess(prevState => prevState+1)
    setFirstNum(Math.floor(Math.random() * 50))
    setSecondNum(Math.floor(Math.random() * 50))
    setAnswer('')
  }


  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.code.includes('Numpad') || event.code.includes('Digit')) {
        setAnswer(prevState => prevState.concat(event.key.replace(/\D/g,'')));
      } else if(event.code === 'Backspace') {
        setAnswer(prevState => prevState.slice(0, -1))
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
      </div>
    </Main>
  );
};

export default Index;