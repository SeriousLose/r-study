import './App.css';
import FatherComponent from './components/FatherComponent/FatherComponent';
import LoginControl from './components/LoginControl/LoginControl';
import NumberList from './components/NumberList/NumberList';
import TestComponent from './components/TestComponent/TestComponent';
import Toolbar from './components/Toolbar/Toolbar';
import WelcomeComponent from './components/WelcomeComponent/WelcomeComponent';
import logo from './logo.svg';
import ThemeContext from './state/ThemeContext';





function App () {
  return (
    <div className="App">
      <header className="App-header">
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
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
