import logo from './logo.svg';
import './App.css';

function App() {
  var name ="biplob";
  const nayoks =['rubel', 'josim','alomgir','bapparaj'];
  const nayikas = ['mousumi', 'shabnur','shabana', 'bobita'];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>my name: {name}</h3>
        <p>I want to become a web developer</p>
        <Person name= {nayoks[0]} nayika= {nayikas[0]}></Person>
        <Person name= {nayoks[1]} nayika= {nayikas[1]}></Person>
        <Person name= {nayoks[3]} nayika= {nayikas[2]}></Person>
      </header>
    </div>
  );
}

function Person(props) {
  console.log(props);
  return (
  <div style= {{border: '2px solid red'}}>
    <h1>name:{props.name}</h1>
    <h3>Hero of {props.nayika}</h3>
  </div>
  )
}

export default App;
