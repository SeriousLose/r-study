import './App.css';
import FatherComponent from './components/FatherComponent/FatherComponent';
import LoginControl from './components/LoginControl/LoginControl';
import NumberList from './components/NumberList/NumberList';
import TestComponent from './components/TestComponent/TestComponent';
import WelcomeComponent from './components/WelcomeComponent/WelcomeComponent';
import logo from './logo.svg';

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <NumberList/>
        <LoginControl/>
        <FatherComponent />
        <TestComponent />
        <img src={logo} className="App-logo" alt="logo" />
        <WelcomeComponent name="React" />
      </header>
    </div>
  );
}

export default App;
