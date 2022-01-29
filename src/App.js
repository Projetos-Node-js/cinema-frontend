import LinkReact from "./Components/LinkReact";
import Atom from "./Components/Atom";
import Text from "./Components/Text";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Neste exemplo foi adicionado<br/>
        mais alguns componentes
        <Atom/>
        <Text/>
        <LinkReact>Learn React</LinkReact>
      </header>
    </div>
  );
}

export default App;
