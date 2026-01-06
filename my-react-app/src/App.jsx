import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Exam1 from './components/Exam1'
import Exam2 from './components/Exam2'

function App() {
  // 상태 (state)
  //const [count, setCount] = useState(0)
  const [showExam, setShowExam] = useState(true);

  return (
    // js 단일 주석
    // <></> : fragment (html 역할 X)
    /* js 범위 주석 */
    <>
      {/* jsx 주석 */}
      {/* <h1>안녕하세요!</h1> */}
      <button onClick={() => setShowExam(!showExam)}>클릭</button>
      {showExam && <Exam2 mihyun="hello" test="world" />}
      {/* 조건부 렌더링 : 조건에 따라 렌더링되는 방법 
        && 앞에있는 showExam이 true 면 Exam1 렌더링됨
                          false 면 Exam1 렌더링 되지 않음
      */}
      
    </>
  )
}

export default App
