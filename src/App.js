import logo from './logo.svg';
import './App.css';
import './childComponent';
import ChildComponent from './childComponent';

function App() {
  const person=['John','25','United Kingdom']
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      
      <h2>Data passing Parent to Child</h2>
    <ChildComponent info={person}/>
       </div>
   
  );
}

export default App;
