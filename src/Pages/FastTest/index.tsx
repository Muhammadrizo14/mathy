import React, {useEffect, useState} from 'react';
import './styles.scss'
import Addition from "../../Components/Addition";
import Main from "../../Layouts/Main";
const Index = () => {
  const [answer, setAnswer] = useState('')


  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.code.includes('Numpad') || event.code.includes('Digit')) {
        setAnswer(prevState => prevState.concat(event.key));
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
        <Addition firstNum={23} secondNum={23} answer={Number(answer)}/>
      </div>
    </Main>
  );
};

export default Index;