import {useState} from 'react'

export default function StateBasic({ init }) {
  // Props (init)でState (count)を初期化
  const [count, setCount] = useState(init);
  console.log(`count is ${count}.`);
    
  const handleClick = () => {
    setCount(c => c + 1);
    setCount(c => c + 1);
  }
  return (
    <div>
      <button onClick={handleClick}>カウント</button>
      <p>{count}回、クリックされました。</p>
    </div>
  );
}