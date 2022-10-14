import './App.css';
import  Calculator  from "./components/Calculator";

function App() {
  return (
    <div className="App">
      <header className="App-header flex justify-center items-stretch">
        <img 
          src='./logo.png' 
          className="App-logo" 
            alt="logo" />
        <h1 className='
          text-slate-400
          leading-13
          font-extralight
          text-4xl'>Basic Calculator
        </h1>                 
      </header>
      <Calculator />
    </div>
  );
}

export default App;
