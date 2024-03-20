import React, {useEffect, useRef} from 'react';
import './styles.scss'

const Index = ({firstNum, secondNum, answer}: number) => {
  const myArr = (num: number) => String(num).split("").map((num) => Number(num))
  const wrap = useRef<HTMLDivElement>(null)


  useEffect(() => {
    if (answer === firstNum + secondNum) {
      wrap.current.classList.add('success')
    } else {
      wrap.current.classList.remove('success')
    }
  }, [answer]);

  return (
    <div className='addition' ref={wrap}>
      <div className="parent">
        <div className="row">
          {myArr(firstNum).map((num, i) => (
            <div key={i}  className='box'>
              <h3>{num}</h3>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="box">
            <h3>+</h3>
          </div>
          {myArr(secondNum).map((num, i) => (
            <div key={i}  className='box'>
              <h3>{num}</h3>
            </div>
          ))}
        </div>

        <div className="line"></div>

        <div className="row answership">
          {myArr(answer).map((num, i)=> (
            <div  key={i} className='box'>
              <h3>{num}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;