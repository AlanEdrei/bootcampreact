import './App.css';

const Mensaje = (props) => {
  return <div>
    <h1 style={{color:props.color}} >{props.Texto}</h1>
  </div>
}
function App() {
  return (
    <div className="App">
      <Mensaje Texto="HELLOOO!" color="red"/>
      Hoooola 
    </div>
  );
}

export default App;
