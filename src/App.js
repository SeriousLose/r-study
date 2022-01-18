import './App.css';
import FatherComponent from './components/FatherComponent/FatherComponent';
import TestComponent from './components/TestComponent/TestComponent';
import WelcomeComponent from './components/WelcomeComponent/WelcomeComponent';
import logo from './logo.svg';


function App () {
  return (
    <div className="App">
      <header className="App-header">
        <FatherComponent />
        <TestComponent />
        <img src={logo} className="App-logo" alt="logo" />
        <WelcomeComponent name="React" />
      </header>
    </div>
  );
}

export default App;
