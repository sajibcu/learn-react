import './App.css';
import Clock from './component/Clock';
import logo from './logo.svg';


function App() {
  return (
    <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.test
        </p>
        <Clock locale="bn-BD"/>
      </header>
    </div>
  );
}

export default App;
