import './App.css';
import "./components/mac-input";
import logo from './logo.svg';

// interface MacInputProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, Record<string, any> {}

// declare global {
//     namespace JSX {
//         interface IntrinsicElements {
//             "mac-input": MacInputProps
//         }
//     }
// }

function App() {
  return (
    <div className="App">
      <mac-input  name="mac"></mac-input>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>

    </div>
  );
}

export default App;
