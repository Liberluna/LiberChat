export default function(){
  const x = () => {
    alert("Thx!")
  }
  return <div>
    <button onClick={x}>
      Click me!
    </button>
  </div>
}
