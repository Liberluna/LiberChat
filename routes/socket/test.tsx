export default function(){
  const x = () => {
    try{
      const sse = new EventSource('/socket/comet')
      sse.onmessage = (e) => {
        alert("on")
      }
      alert("conn")
    }catch(e){
      document.body.innerHTML = "error"
    }
  }
  return <div>
    <button onClick={x}>
      Click me!
    </button>
  </div>
}
