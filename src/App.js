import logo from './logo.svg';
import './App.css';

function App() {

  const nayok=['rajjak','manna','Jasim'];
  const profes=['nayok'];

  return (
    <div className="App">
      <header className="App-header">
       <p>Monir</p>
       <Person name="Monir" profession="Student"></Person>
       <Person name={nayok[0]} profession={profes[0]}></Person>
       <Person></Person>
      </header>
    </div>
  );
}






function Person(data){
  const rong={
    border:'1px solid blue',
    margin:'5px',
    padding:'10px'
  }
  return(
    <div style={rong}>
      <h1>Name: {data.name}</h1>
      <p>Profession: {data.profession}</p>
    </div>
  )
}






export default App;
