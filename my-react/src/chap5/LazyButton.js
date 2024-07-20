export default function LazyButton() {
  const handleClick = e => console.log('出現したボタンを押せたよ！')
  
  return (
    <button type="button" onClick={handleClick}>送信</button>
  )
}